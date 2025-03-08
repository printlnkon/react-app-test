import AppLayout from '@/layouts/app-layout';
import { Head } from '@inertiajs/react';

const teamMembers = [
    { name: 'Kalfontein Cruz', role: 'AGILA', image: '/' },
    { name: 'Roel Maximo', role: 'AGILA', image: '/' },
    { name: 'Solito Moreno Jr.', role: 'AGILA', image: '/' },
    { name: 'Gabriel Purificacion', role: 'AGILA', image: '/' },
];

export default function AboutUs() {
    return (
        <AppLayout>
            <Head title="About Us" />
            <div className="flex flex-col items-center gap-5 p-10">
                {/* Section: Project Overview */}
                <section className="text-center max-w-4xl">
                    <h1 className="text-3xl font-bold">About Our Project</h1>
                    <p className="mt-4 text-lg text-gray-600 text-center">
                        AGILA DESCRIPTION.
                    </p>
                </section>

                {/* Section: Meet the Team */}
                <section className="max-w-5x1">
                    <h2 className="text-2xl font-semibold text-center p-8">Meet the Team</h2>
                    <div className="mt- grid grid-cols-2 gap-10 md:grid-cols-2 lg:grid-cols-4">
                        {teamMembers.map((member, index) => (
                            <div key={index} className="border rounded-xl p-4 text-center shadow-md">
                                <img src={member.image} alt={member.image} className="mx-auto h-32 w-32 rounded-full object-cover" />
                                <h3 className="mt-3 text-xl font-semibold">{member.name}</h3>
                                <p className="text-gray-500">{member.role}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Section: Our Vision */}
                <section className="text-center max-w-4xl">
                    <h2 className="text-2xl font-semibold">Our Vision</h2>
                    <p className="mt-4 text-lg text-gray-600 text-center">
                        AGILA DESCRIPTION.
                    </p>
                </section>
                {/* Section: Our Mission */}
                <section className="text-center max-w-4xl">
                    <h2 className="text-2xl font-semibold">Our Mission</h2>
                    <p className="mt-4 text-lg text-gray-600 text-center">
                        AGILA DESCRIPTION.
                    </p>
                </section>
            </div>
        </AppLayout>
    );
}
