import { useState } from 'react'; 
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';

const breadcrumbs: BreadcrumbItem[] = [
    { title: 'Dashboard', href: '/dashboard' },
    { title: 'Students', href: '/students' },
];

const students = [
    { id: '0200031060', name: 'John Doe', timeIn: '08:00 AM', timeOut: '12:00 PM', year: 1, section: 'BT-601' },
    { id: '0200031069', name: 'Eich Dawg', timeIn: '08:00 AM', timeOut: '12:00 PM', year: 1, section: 'BT-601' },
    { id: '0200031075', name: 'Jane Smith', timeIn: '09:15 AM', timeOut: '01:00 PM', year: 2, section: 'BT-602' },
    { id: '0200031088', name: 'Michael Brown', timeIn: '10:30 AM', timeOut: '02:45 PM', year: 3, section: 'BT-603' },
];

const yearLevels = [1, 2, 3, 4];
const sections = ['BT-601', 'BT-602', 'BT-603', 'BT-604'];

export default function Students() {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedYear, setSelectedYear] = useState<number | null>(null);
    const [selectedSection, setSelectedSection] = useState<string | null>(null);

    const filteredStudents = students.filter(student =>
        (selectedYear ? student.year === selectedYear : true) &&
        (selectedSection ? student.section === selectedSection : true) &&
        (student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        student.section.toLowerCase().includes(searchTerm.toLowerCase()))
    );

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Students" />
            <div className="flex flex-col gap-4 p-4">
                {/* Filters & Search Bar Layout */}
                <div className="flex gap-4">
                    {/* Year Level Filter */}
                    <select
                        className="border p-2 rounded-md"
                        onChange={(e) => setSelectedYear(e.target.value ? parseInt(e.target.value) : null)}
                        value={selectedYear || ''}
                    >
                        <option value="">All Year Levels</option>
                        {yearLevels.map(year => (
                            <option key={year} value={year}>{year}st Year</option>
                        ))}
                    </select>

                    {/* Section Filter */}
                    <select
                        className="border p-2 rounded-md"
                        onChange={(e) => setSelectedSection(e.target.value || null)}
                        value={selectedSection || ''}
                    >
                        <option value="">All Sections</option>
                        {sections.map(section => (
                            <option key={section} value={section}>{section}</option>
                        ))}
                    </select>

                    {/* Search Bar */}
                    <input
                        type="text"
                        placeholder="Search by name or section..."
                        className="border p-2 rounded-md flex-1"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>

                {/* Total Students Count */}
                <h2 className="text-xl font-semibold">Total Students: {filteredStudents.length}</h2>

                {/* Students List Table */}
                <div className="border rounded-xl p-4 shadow-md">
                    <h2 className="text-lg font-semibold mb-4">Registered Students</h2>
                    {filteredStudents.length > 0 ? (
                        <table className="w-full border-collapse">
                            <thead>
                                <tr className="border-b">
                                    <th className="text-left p-2">Name</th>
                                    <th className="text-left p-2">Year</th>
                                    <th className="text-left p-2">Section</th>
                                    <th className="text-left p-2">Time In</th>
                                    <th className="text-left p-2">Time Out</th>
                                </tr>
                            </thead>
                            <tbody>
                                {filteredStudents.map((student) => (
                                    <tr key={student.id} className="border-b">
                                        <td className="p-2">{student.name}</td>
                                        <td className="p-2">{student.year}</td>
                                        <td className="p-2">{student.section}</td>
                                        <td className="p-2">{student.timeIn}</td>
                                        <td className="p-2">{student.timeOut}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    ) : (
                        <p className="text-gray-500">No matching students found.</p>
                    )}
                </div>
            </div>
        </AppLayout>
    );
}
