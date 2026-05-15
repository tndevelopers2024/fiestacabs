import React from 'react';
import { FaChevronDown } from 'react-icons/fa';

const jobCategories = [
    {
        name: "Finance & Accounts",
        jobs: [
            { 
                title: "Accounts Executive", 
                location: "Chennai, TN",
                experience: "2 Years",
                requirement: "Male preferred",
                count: "2 Positions",
                skills: "Graduate, Tally & Excel knowledge"
            }
        ]
    },
    {
        name: "Business Development & Operations",
        jobs: [
            {
                title: "Tender & Proposals - Executive",
                location: "Chennai, TN",
                experience: "Any Degree",
                requirement: "Male preferred",
                count: "1 Position",
                skills: "e-tender & GeM Portal knowledge"
            }
        ]
    }
];

const OpenPositions = () => {
    return (
        <section className="py-24 bg-[#FFF]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-16">
                    <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 tracking-tight">Open Positions</h2>
                    <p className="text-gray-800 text-lg">Explore open roles across teams at Fiesta Smart Mobility.</p>
                </div>

                <div className="space-y-16">
                    {jobCategories.map((category, catIndex) => (
                        <div key={catIndex}>
                            <h3 className="text-2xl font-bold text-gray-900 mb-6">
                                {category.name}
                            </h3>
                            <div className="border-t border-black/20">
                                {category.jobs.map((job: any, jobIndex) => (
                                    <div key={jobIndex} className="py-10 flex flex-col md:flex-row justify-between items-start md:items-center border-b border-black/10 hover:bg-black/[0.02] px-2 transition-all">
                                        <div className="mb-6 md:mb-0 flex-1">
                                            <div className="flex items-center gap-4 mb-2">
                                                <div className="text-2xl font-bold text-gray-900">
                                                    {job.title}
                                                </div>
                                                {job.count && (
                                                    <span className="bg-orange-50 text-orange-700 text-[10px] px-2 py-0.5 rounded-full font-bold uppercase tracking-wider border border-orange-100">
                                                        {job.count}
                                                    </span>
                                                )}
                                            </div>
                                            
                                            <div className="flex flex-wrap gap-3 mt-4">
                                                {job.experience && (
                                                    <div className="flex flex-col">
                                                        <span className="text-[10px] text-gray-400 font-bold uppercase tracking-tight mb-1">Experience</span>
                                                        <span className="bg-gray-100 text-gray-700 text-[11px] px-2 py-1 rounded font-bold uppercase tracking-wider">
                                                            {job.experience}
                                                        </span>
                                                    </div>
                                                )}
                                                {job.requirement && (
                                                    <div className="flex flex-col">
                                                        <span className="text-[10px] text-gray-400 font-bold uppercase tracking-tight mb-1">Preference</span>
                                                        <span className="bg-blue-50 text-blue-700 text-[11px] px-2 py-1 rounded font-bold uppercase tracking-wider">
                                                            {job.requirement}
                                                        </span>
                                                    </div>
                                                )}
                                                {job.skills && (
                                                    <div className="flex flex-col">
                                                        <span className="text-[10px] text-gray-400 font-bold uppercase tracking-tight mb-1">Requirements</span>
                                                        <span className="bg-emerald-50 text-emerald-700 text-[11px] px-2 py-1 rounded font-bold uppercase tracking-wider">
                                                            {job.skills}
                                                        </span>
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                        <div className="text-gray-700 text-[14px] font-semibold bg-gray-50 px-5 py-2.5 rounded-full border border-black/5 shadow-sm">
                                            {job.location}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Email Resume Section */}
                <div className="mt-28 py-16 border-t border-black/20 flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-8">
                    <div>
                        <h4 className="text-3xl font-bold text-gray-900 mb-2 tracking-tight">Don't see a role that fits?</h4>
                        <p className="text-gray-800 text-lg">
                            We're always looking for talented individuals to join our mission.
                        </p>
                    </div>
                    <a
                        href="mailto:careers@fiestacabs.com"
                        className="bg-black text-white px-10 py-5 rounded-full font-bold hover:bg-gray-800 transition-all text-lg shadow-xl"
                    >
                        Send your resume
                    </a>
                </div>
            </div>
        </section>
    );
};

export default OpenPositions;

