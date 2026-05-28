import React from "react";
import Link from "next/link";

interface OfficeInfo {
    title: string;
    description: string;
    calls: string[];
    mail?: string;
    mapLink: string;
    mapEmbed?: string;
    searchQuery?: string;
}

const OfficeCard = ({ office }: { office: OfficeInfo }) => (
    <div className="bg-white p-7 rounded-2xl shadow-[0_12px_30px_rgba(15,23,42,0.06)] border border-slate-100 hover:-translate-y-1 hover:shadow-[0_18px_34px_rgba(15,23,42,0.1)] transition flex flex-col h-full">
        <div className="flex items-center justify-between mb-3">
            <h3 className="text-lg font-bold text-slate-900">{office.title}</h3>
            <Link
                href={office.mapLink}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1 text-xs font-semibold btn-animated/10 text-[#EC2028] rounded-full border border-[#EC2028]/20 hover:bg-[#EC2028] hover:text-white transition-colors"
            >
                On map
            </Link>
        </div>
        <p className="text-slate-600 text-sm mb-5 leading-relaxed">
            {office.description}
        </p>
        <div className="space-y-2 mb-5 flex-grow">
            {office.calls.map((call, idx) => (
                <p key={idx} className="text-sm font-semibold text-slate-800 flex items-center gap-2">
                    <span className="text-[#EC2028] font-bold">Call:</span>
                    <Link href={`tel:${call.replace(/[^0-9+]/g, '')}`} className="hover:text-[#EC2028] transition-colors">
                        {call}
                    </Link>
                </p>
            ))}
            {office.mail && (
                <p className="text-sm font-semibold text-slate-800 flex items-center gap-2">
                    <span className="text-[#EC2028] font-bold">Mail:</span>
                    <Link href={`mailto:${office.mail}`} className="hover:text-[#EC2028] transition-colors">
                        {office.mail}
                    </Link>
                </p>
            )}
        </div>
        <div className="mt-auto rounded-lg overflow-hidden h-40 border border-slate-200 shrink-0">
            <iframe
                title={`Map of ${office.title}`}
                width="100%"
                height="100%"
                frameBorder="0"
                style={{ border: 0 }}
                src={office.mapEmbed || `https://maps.google.com/maps?q=${encodeURIComponent(office.searchQuery || office.description)}&t=&z=13&ie=UTF8&iwloc=&output=embed`}
                allowFullScreen
            ></iframe>
        </div>
    </div>
);

const OfficeLocations = () => {
    const mainOffices: OfficeInfo[] = [
        {
            title: "Head Office",
            description: "Ground & Second Floor, 523, Vinayagapuram Main Rd, S. Kolathur, S.Kolathur, Viduthalai Nagar, Kovilambakkam, Chennai, Tamil Nadu 600129, India",
            calls: ["044 - 2220 0095", "+91 96004 37002"],
            mail: "info@fiestaindia.net",
            mapLink: "https://maps.app.goo.gl/xZYfnVYvfJzDFJ8T9",
            searchQuery: "Fiesta Smart Mobility - Head Office",
            mapEmbed: "https://maps.google.com/maps?cid=7920263213510848783&t=&z=15&ie=UTF8&iwloc=&output=embed"
        },
        {
            title: "Registered Office",
            description: "99, Lourd Doss Grotto Rd, Arokya Matha Nagar, Little Mount, Kotturpuram, Chennai, Tamil Nadu 600015, India",
            calls: ["044 - 223 - 00995", "+91 88070 10095"],
            mail: "rac@fiestaindia.net",
            mapLink: "https://maps.app.goo.gl/cEfYrJq1v3H9hzQt6",
            searchQuery: "Fiesta Smart Mobility - Registered Office",
            mapEmbed: "https://maps.google.com/maps?cid=14351019332237937057&t=&z=15&ie=UTF8&iwloc=&output=embed"
        }
    ];

    const branchOffices: OfficeInfo[] = [
        {
            title: "Bangalore",
            description: "2nd Floor, R J Elite, No.45/A, Ramamurthi Nagar Main Rd, Dayananda Layout, Mukkutam Nagar, Ramamurthy Nagar, Bengaluru, Karnataka 560016, India",
            calls: ["080 - 4124 8273", "+91 99164 54848"],
            mail: "racblr@fiestaindia.net",
            mapLink: "https://maps.app.goo.gl/yB29uHTmKA2KMtKZ6",
            searchQuery: "Fiesta Smart Mobility - Bengaluru"
        },
        {
            title: "Hyderabad",
            description: "8-1-402/336, Sathya Colony, Qutub Shahi Tombs, Hyderabad, Telangana 500104, India",
            calls: ["+91 77025 33797"],
            mail: "sales_hyd@fiestaindia.net",
            mapLink: "https://maps.app.goo.gl/w4K4xbCb9DULN7VM6",
            mapEmbed: "https://maps.google.com/maps?q=Fiesta+Smart+Mobility+Shaikpet+Golconda+Hyderabad&t=&z=15&ie=UTF8&iwloc=&output=embed"
        },
        {
            title: "Mumbai",
            description: "1st Floor, Acme Industrial Park, 109, Goregaon East, Mumbai, Maharashtra 400063",
            calls: ["+91 74188 85492"],
            mail: "sales_mumbai@fiestaindia.net",
            mapLink: "https://maps.app.goo.gl/vg9FvA39ssSn6Lj59",
            mapEmbed: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d934.1186940318352!2d72.8567384209082!3d19.16259305255345!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b7b7a33bcad7%3A0xa4742bb203157635!2sFiesta%20Smart%20Mobility%20Private%20Limited!5e0!3m2!1sen!2sin!4v1778325886756!5m2!1sen!2sin"
        },
        {
            title: "Pune",
            description: "Niche Façade ,Office No. 204, 2nd Floor 232 Road, Plot Number: 26 & 27 & Survey Number, Sakore Nagar, Viman Nagar, Pune, Maharashtra 411014",
            calls: ["+91 82913 82323"],
            mail: "sales_pune@fiestaindia.net",
            mapLink: "https://maps.app.goo.gl/9d8pzRVaK5fVS7kR6",
            mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3895.4857543944813!2d73.907461!3d18.5642866!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c104b4db8bd7%3A0x24b74b5c89240c6f!2sFiesta%20Smart%20Mobility%20-%20Pune!5e0!3m2!1sen!2sin!4v1779783649238!5m2!1sen!2sin"
        },
        {
            title: "Kolkata",
            description: "Speed Workpod, 34/1Q, Ballygunge Circular Rd, near Ballygunge science college, Ballygunge, Kolkata, West Bengal 700019, India",
            calls: ["+91 63850 50605"],
            mail: "sales_kolkata@fiestaindia.net",
            mapLink: "https://maps.app.goo.gl/hNmSydpTdX319PD97",
            searchQuery: "Fiesta Smart Mobility - Kolkata"
        },
        {
            title: "Oragadam (Kanchipuram)",
            description: "Tambaram - Mudichur - Walajabad Rd, Oragadam Industrial Corridor, Vaipoor, Tamil Nadu 602118, India",
            calls: ["+91 98840 13783"],
            mail: "rac_ord@fiestaindia.net",
            mapLink: "https://maps.app.goo.gl/iNN8T8DuQqTvBHQKA",
            searchQuery: "Fiesta Smart Mobility - Oragadam"
        },
        {
            title: "Mahindra World City",
            description: "58, Bharathiyar Street, near Mcity, Mahindra World City, Veerapuram, Tamil Nadu 603004, India",
            calls: ["+91 73059 80807"],
            mail: "m_city@fiestaindia.net",
            mapLink: "https://maps.app.goo.gl/svyMw3PvrN8wN4pH6",
            mapEmbed: "https://maps.google.com/maps?cid=6061177878761591730&t=&z=15&ie=UTF8&iwloc=&output=embed"
        },
        {
            title: "Hosur (Tamil nadu)",
            description: "Gandhi Nagar, Kumudepalli, Thorapalli Agraharam, Hosur, Tamil Nadu 635109, India",
            calls: ["+91 733 877 7076"],
            mail: "bts_hosur@fiestaindia.net",
            mapLink: "https://maps.app.goo.gl/NTifSVy1mTogfNw87",
            searchQuery: "Fiesta Smart Mobility - Hosur"
        },
        {
            title: "Gurugram (NCR)",
            description: "Ground Floor, Sushant shopping arcade, H-103, Sushant Lok Phase I, Sector 43, Gurugram, Haryana 122009, India",
            calls: ["+91 81488 22633"],
            mail: "sales_gurgaon@fiestaindia.net",
            mapLink: "https://maps.app.goo.gl/ywYvfitDTEPfEcnQ8",
            searchQuery: "Fiesta Smart Mobility - Gurugram"
        }
    ];

    return (
        <section className="py-16">
            <div className="max-w-6xl mx-auto px-4 space-y-14">
                <div className="space-y-3 text-center">
                    <p className="text-xs uppercase tracking-[0.28em] text-slate-500">Our offices</p>
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Find us near your routes</h2>
                    <p className="text-slate-600 text-sm md:text-base max-w-3xl mx-auto">
                        Pan-India presence with local ops teams who know the roads, shifts, and compliance for each city.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {mainOffices.map((office, idx) => (
                        <OfficeCard key={idx} office={office} />
                    ))}
                </div>

                <div className="space-y-3">
                    <h3 className="text-2xl font-bold text-slate-900">Branch offices</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {branchOffices.map((office, idx) => (
                            <OfficeCard key={idx} office={office} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OfficeLocations;
