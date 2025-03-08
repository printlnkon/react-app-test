import { useState } from "react";
import { Head } from "@inertiajs/react";
import AppLayout from "@/layouts/app-layout";
import { Card } from "@/components/ui/card";
import { type BreadcrumbItem } from '@/types';

const breadcrumbs: BreadcrumbItem[] = [
    { title: 'Dashboard', href: '/dashboard' },
    { title: 'Schedules', href: '/schedules' },
];

// Sample professor data
const professors = [
    { id: 'P001', name: 'Mr. Cedric D. Cruz', absences: 2, department: 'Information Technology', subject: 'Programming Languages' },
];

// Extract unique departments for filtering
const departments = Array.from(new Set(professors.map(prof => prof.department)));

// Sample schedule data
const scheduleData = [
    { time: "10:00 - 10:30", monday: "CITE1006 - COMPROG 2", tuesday: "", wednesday: "", thursday: "", friday: "", saturday: "" },
    { time: "11:30 - 12:00", monday: "LAB", tuesday: "STIC1003 - CPT", wednesday: "", thursday: "LAB", friday: "", saturday: "" },
    { time: "1:00 - 1:30", monday: "BREAK", tuesday: "BREAK", wednesday: "ADMIN", thursday: "", friday: "", saturday: "" },
    { time: "2:30 - 3:00", monday: "CONSULTATION", tuesday: "", wednesday: "CONSULTATION", thursday: "", friday: "", saturday: "" },
    { time: "5:00 - 5:30", monday: "CITE1006 - COMPROG 2", tuesday: "", wednesday: "", thursday: "", friday: "", saturday: "" },
];

const getCellStyle = (text: string) => {
    if (text.includes("LAB")) return "bg-red-500 text-white font-semibold";
    if (text.includes("CONSULTATION")) return "bg-blue-400 text-white";
    if (text.includes("BREAK") || text.includes("ADMIN")) return "bg-gray-400 text-white";
    if (text) return "bg-yellow-300"; // Default for lectures
    return "";
};

export default function Schedules() {
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
            <Head title="Schedules" />
            <div className="p-4 flex flex-col gap-4">
                {/* Filters Section */}
                <div className="flex gap-4">
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

                {/* Professors List */}
                <div className="border rounded-xl p-4 shadow-md">
                    <h2 className="text-lg font-semibold mb-4">Professors List</h2>
                    {filteredProfessors.length > 0 ? (
                        <table className="w-full border-collapse">
                            <thead>
                                <tr className="border-b bg-gray-100">
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
                

                {/* Schedule Section */}
                <div className="border rounded-xl p-4 shadow-md">
                <h2 className="text-lg font-semibold mb-4">Schedule</h2>
                    <div className="overflow-x-auto">
                        <table className="min-w-full border border-gray-300 text-sm">
                            <thead>
                                <tr className="bg-gray-700 text-white">
                                    <th className="p-2 border">Time</th>
                                    <th className="p-2 border">Monday</th>
                                    <th className="p-2 border">Tuesday</th>
                                    <th className="p-2 border">Wednesday</th>
                                    <th className="p-2 border">Thursday</th>
                                    <th className="p-2 border">Friday</th>
                                    <th className="p-2 border">Saturday</th>
                                </tr>
                            </thead>
                            <tbody>
                                {scheduleData.map((row, index) => (
                                    <tr key={index} className="border-b text-center">
                                        <td className="p-2 border">{row.time}</td>
                                        <td className={`p-2 border ${getCellStyle(row.monday)}`}>{row.monday}</td>
                                        <td className={`p-2 border ${getCellStyle(row.tuesday)}`}>{row.tuesday}</td>
                                        <td className={`p-2 border ${getCellStyle(row.wednesday)}`}>{row.wednesday}</td>
                                        <td className={`p-2 border ${getCellStyle(row.thursday)}`}>{row.thursday}</td>
                                        <td className={`p-2 border ${getCellStyle(row.friday)}`}>{row.friday}</td>
                                        <td className={`p-2 border ${getCellStyle(row.saturday)}`}>{row.saturday}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>   
            </div>
        </AppLayout>
    );
}
