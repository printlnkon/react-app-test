import { useState } from 'react';
import AppLayout from '@/layouts/app-layout';
import { Head } from '@inertiajs/react';
import { Mail, Phone } from 'lucide-react';

const teamMembers = [
    { name: 'Kalfontein Cruz', role: 'AGILA', email: 'john.doe@example.com', phone: '+63 912 345 6789' },
    { name: 'Roel Maximo', role: 'AGILA', email: 'jane.smith@example.com', phone: '+63 923 456 7890' },
    { name: 'Solito Moreno Jr.', role: 'AGILA', email: 'michael.brown@example.com', phone: '+63 934 567 8901' },
    { name: 'Gabriel Purificacion', role: 'AGILA', email: 'emily.white@example.com', phone: '+63 945 678 9012' },
];

export default function ContactUs() {
    const [formData, setFormData] = useState({
        name: '',
        mobile: '',
        email: '',
        concern: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prevState => ({ ...prevState, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert('Your message has been sent successfully!'); // Replace with actual form submission logic
        setFormData({ name: '', mobile: '', email: '', concern: '' });
    };

    return (
        <AppLayout>
            <Head title="Contact Us" />
            <div className="flex flex-col items-center gap-8 p-6">
                {/* Section: Contact Form */}
                <section className="w-full max-w-3xl bg-white p-6 rounded-xl shadow-md">
                    <h1 className="text-2xl font-bold text-center">Contact Us</h1>
                    <p className="text-gray-600 text-center mb-6">We'd love to hear from you! Fill out the form below.</p>
                    
                    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                        <input 
                            type="text" 
                            name="name" 
                            placeholder="Your Name " 
                            value={formData.name} 
                            onChange={handleChange} 
                            required 
                            className="border p-3 rounded-md w-full"
                        />
                        <input 
                            type="tel" 
                            name="mobile" 
                            placeholder="Mobile No." 
                            value={formData.mobile} 
                            onChange={handleChange} 
                            required 
                            className="border p-3 rounded-md w-full"
                        />
                        <input 
                            type="email" 
                            name="email" 
                            placeholder="Email Address" 
                            value={formData.email} 
                            onChange={handleChange} 
                            required 
                            className="border p-3 rounded-md w-full"
                        />
                        <textarea 
                            name="concern"
                            title="concern"
                            placeholder="Your Concern" 
                            rows={4} 
                            value={formData.concern} 
                            onChange={handleChange} 
                            required 
                            className="border p-3 rounded-md w-full"
                        ></textarea>
                        <button type="submit" className="bg-blue-600 text-white p-3 rounded-md hover:bg-blue-700">
                            Send Message
                        </button>
                    </form>
                </section>

                {/* Section: Team Contacts */}
                <section className="w-full max-w-4xl">
                    <h2 className="text-2xl font-semibold text-center">Our Team</h2>
                    <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
                        {teamMembers.map((member, index) => (
                            <div key={index} className="border rounded-xl p-4 text-center shadow-md max-w-4x2">
                                <h3 className="text-lg font-semibold">{member.name}</h3>
                                <p className="text-gray-500">{member.role}</p>
                                <p className="text-gray-700 mt-2 flex items-center justify-center gap-2 break words">
                                <Mail className="mb-4.5 w-5 h-full text-blue-600" /> 
                                    <a href={`mailto:${member.email}`} className="text-sm text-blue-600 break-all">
                                        {member.email}
                                    </a>
                                </p>
                                <p className="text-sm text-center text-gray-700 flex justify-center gap-2">
                                    <Phone className="w-4 h-4 text-gray-700" />
                                    {member.phone}
                                </p>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </AppLayout>
    );
}
