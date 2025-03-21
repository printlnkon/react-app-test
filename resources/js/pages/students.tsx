import { useState } from 'react'; 
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';

const breadcrumbs: BreadcrumbItem[] = [
    { title: 'Dashboard', href: '/dashboard' },
    { title: 'Students', href: '/students' },
];

const students = [
    { id: '0200031060', name: 'Kalfontein Cruz', timeIn: '08:00 AM', year: 1, section: 'BT-601' },
    { id: '0200031069', name: 'Roel Maximo', timeIn: '08:00 AM', year: 2, section: 'BT-602' },
    { id: '0200031075', name: 'Solito Moreno Jr.', timeIn: '09:15 AM', year: 3, section: 'BT-603' },
    { id: '0200031088', name: 'Gabriel Purificacion', timeIn: '10:30 AM', year: 4, section: 'BT-604' },
];

const yearLevels = [1, 2, 3, 4];
const getOrdinalSuffix = (number: number) => {
    if (number >= 11 && number <= 13) return 'th';
    const lastDigit = number % 10;
    switch (lastDigit) {
        case 1: return 'st';
        case 2: return 'nd';
        case 3: return 'rd';
        default: return 'th';
    }
};

const sections = ['BT-601', 'BT-602', 'BT-603', 'BT-604'];

export default function Students() {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedYear, setSelectedYear] = useState<number | null>(null);
    const [selectedSection, setSelectedSection] = useState<string | null>(null);

    const filteredStudents = students.filter(student =>
        (selectedYear ? student.year === selectedYear : true) &&
        (selectedSection ? student.section === selectedSection : true) &&
        (
            student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            student.section.toLowerCase().includes(searchTerm.toLowerCase()) ||
            student.year === Number(selectedYear)
        )
    );

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Students" />
            <div className="flex flex-col gap-4 p-4">
               {/* Search Filter & Dropdown */}
                <div className="flex gap-4">
                    {/* Year Level Filter */}
                    <select
                        className="border p-2 rounded-md"
                        onChange={(e) => setSelectedYear(e.target.value ? parseInt(e.target.value) : null)}
                        value={selectedYear || ''}
                    >
                        <option value="">All Year Levels</option>
                        {yearLevels.map(year => (
                            <option key={year} value={year}>{`${year}${getOrdinalSuffix(year)} Year`}</option>
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
                        placeholder="Search by name, year, or section..."
                        className="border p-2 rounded-md flex-1"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>

                {/* Total Students Count */}
                {/* <h2 className="text-xl font-semibold">Total Students: {filteredStudents.length}</h2> */}

                {/* Students List Table */}
                <div className="border rounded-xl p-4 shadow-md">
                    <h2 className="text-lg font-semibold mb-4">Students List</h2>
                    <div className="overflow-x-auto">
                        {filteredStudents.length > 0 ? (
                            <table className="min-w-full border-collapse">
                                <thead>
                                    <tr className="border-b bg-gray-100">
                                        <th className="text-left p-2 w-auto">Name</th>
                                        <th className="text-left p-2 w-auto">Year</th>
                                        <th className="text-left p-2 w-auto">Section</th>
                                        <th className="text-left p-2 w-auto">Time In</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {filteredStudents.map((student) => (
                                        <tr key={student.id} className="border-b hover:bg-gray-50">
                                            <td className="p-2">{student.name}</td>
                                            <td className="p-2">{student.year}</td>
                                            <td className="p-2">{student.section}</td>
                                            <td className="p-2">{student.timeIn}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        ) : (
                            <p className="text-gray-500">No matching students found.</p>
                        )}
                    </div>
                </div>

            </div>
        </AppLayout>
    );
}
