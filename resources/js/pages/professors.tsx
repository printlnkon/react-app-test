import { useState } from 'react';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';

const breadcrumbs: BreadcrumbItem[] = [
    { title: 'Dashboard', href: '/dashboard' },
    { title: 'Professors', href: '/professors' },
];

// Sample professor data
const professors = [
    { id: 'P001', name: 'Mr. Cedric D. Cruz', absences: 2, department: 'Information Technology', subject: 'Programming Languages' },
    { id: 'P002', name: 'Prof. Brian Lee', absences: 1, department: 'Information Technology', subject: 'Database Management' },
    { id: 'P003', name: 'Dr. Catherine Wilson', absences: 4, department: 'Engineering', subject: 'Thermodynamics' },
];

// Extract unique departments for the dropdown
const departments = Array.from(new Set(professors.map(prof => prof.department)));

export default function Professors() {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedDepartment, setSelectedDepartment] = useState('');

    const filteredProfessors = professors.filter(professor =>
        (selectedDepartment ? professor.department === selectedDepartment : true) &&
        (professor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        professor.department.toLowerCase().includes(searchTerm.toLowerCase()) ||
        professor.subject.toLowerCase().includes(searchTerm.toLowerCase()))
    );

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Professors" />
            <div className="flex flex-col gap-4 p-4"> 

                {/* Search Filter & Dropdown */}
                <div className="flex gap-4">
                    {/* Dropdown Menu */}
                    <select
                        className="border p-2 rounded-md"
                        onChange={(e) => setSelectedDepartment(e.target.value)}
                        value={selectedDepartment}
                    >
                        <option value="">All Departments</option>
                        {departments.map(dept => (
                            <option key={dept} value={dept}>{dept}</option>
                        ))}
                    </select>

                    <input
                        type="text"
                        placeholder="Search by name, department, or subject..."
                        className="border p-2 rounded-md flex-1"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
                
                <h2 className="text-xl font-semibold">Total Professors: {professors.length}</h2>
                
                <div className="border rounded-xl p-4 shadow-md">
                    <h2 className="text-lg font-semibold mb-4">Professors List</h2>
                    {filteredProfessors.length > 0 ? (
                        <table className="w-full border-collapse">
                            <thead>
                                <tr className="border-b">
                                    <th className="text-left p-2">Name</th>
                                    <th className="text-left p-2">Absences</th>
                                    <th className="text-left p-2">Department</th>
                                    <th className="text-left p-2">Subject</th>
                                </tr>
                            </thead>
                            <tbody>
                                {filteredProfessors.map((professor) => (
                                    <tr key={professor.id} className="border-b">
                                        <td className="p-2">{professor.name}</td>
                                        <td className="p-2">{professor.absences}</td>
                                        <td className="p-2">{professor.department}</td>
                                        <td className="p-2">{professor.subject}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    ) : (
                        <p className="text-gray-500">No matching professors found.</p>
                    )}
                </div>
            </div>
        </AppLayout>
    );
}
