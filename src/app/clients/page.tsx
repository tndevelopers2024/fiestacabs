import { getMetadata } from "@/src/data/metadata";
import Link from "next/link";
import ClientCategory from "../../components/sections/clients/ClientCategory";
import Button from "../../components/common/Button";
import Image from "next/image";
import PageHero from "../../components/common/PageHero";

export const metadata = getMetadata("/clients");

const itClients = [
    { name: "IT Client 2", image: "/images/clients/it-and-non-it-clients/2.png" },
    { name: "IT Client 3", image: "/images/clients/it-and-non-it-clients/3.png" },
    { name: "IT Client 4", image: "/images/clients/it-and-non-it-clients/4.png" },
    { name: "IT Client 5", image: "/images/clients/it-and-non-it-clients/5.png" },
    { name: "IT Client 6", image: "/images/clients/it-and-non-it-clients/6.png" },
    { name: "IT Client 7", image: "/images/clients/it-and-non-it-clients/7.png" },
    { name: "IT Client 8", image: "/images/clients/it-and-non-it-clients/8.png" },
    { name: "IT Client 9", image: "/images/clients/it-and-non-it-clients/9.png" },
    { name: "IT Client 10", image: "/images/clients/it-and-non-it-clients/10.png" },
    { name: "IT Client 11", image: "/images/clients/it-and-non-it-clients/11.png" },
    { name: "IT Client 12", image: "/images/clients/it-and-non-it-clients/12.png" },
    { name: "IT Client 13", image: "/images/clients/it-and-non-it-clients/13.png" },
    { name: "IT Client 14", image: "/images/clients/it-and-non-it-clients/14.png" },
    { name: "IT Client 15", image: "/images/clients/it-and-non-it-clients/15.png" },
    { name: "IT Client 16", image: "/images/clients/it-and-non-it-clients/16.png" },
    { name: "IT Client 17", image: "/images/clients/it-and-non-it-clients/17.png" },
    { name: "IT Client 18", image: "/images/clients/it-and-non-it-clients/18.png" },
    { name: "IT Client 19", image: "/images/clients/it-and-non-it-clients/19.png" },
    { name: "IT Client 20", image: "/images/clients/it-and-non-it-clients/20.png" },
];

const manufacturingClients = [
    { name: "Manufacturing Client 22", image: "/images/clients/manufacturing-new/22.png" },
    { name: "Manufacturing Client 23", image: "/images/clients/manufacturing-new/23.png" },
    { name: "Manufacturing Client 24", image: "/images/clients/manufacturing-new/24.png" },
    { name: "Manufacturing Client 25", image: "/images/clients/manufacturing-new/25.png" },
    { name: "Manufacturing Client 26", image: "/images/clients/manufacturing-new/26.png" },
    { name: "Manufacturing Client 27", image: "/images/clients/manufacturing-new/27.png" },
    { name: "Manufacturing Client 28", image: "/images/clients/manufacturing-new/28.png" },
    { name: "Manufacturing Client 29", image: "/images/clients/manufacturing-new/29.png" },
    { name: "Manufacturing Client 30", image: "/images/clients/manufacturing-new/30.png" },
    { name: "Manufacturing Client 31", image: "/images/clients/manufacturing-new/31.png" },
    { name: "Manufacturing Client 32", image: "/images/clients/manufacturing-new/32.png" },
    { name: "Manufacturing Client 33", image: "/images/clients/manufacturing-new/33.png" },
    { name: "Manufacturing Client 34", image: "/images/clients/manufacturing-new/34.png" },
    { name: "Manufacturing Client 35", image: "/images/clients/manufacturing-new/35.png" },
    { name: "Manufacturing Client 36", image: "/images/clients/manufacturing-new/36.png", scale: "scale-150" },
    { name: "Manufacturing Client 37", image: "/images/clients/manufacturing-new/37.png" },
    { name: "Manufacturing Client 38", image: "/images/clients/manufacturing-new/38.png" },
    { name: "Manufacturing Client 39", image: "/images/clients/manufacturing-new/39.png" },
    { name: "Manufacturing Client 40", image: "/images/clients/manufacturing-new/40.png" },
];

const educationClients = [
    { name: "Education Client 43", image: "/images/clients/education-new/43.png" },
    { name: "Education Client 44", image: "/images/clients/education-new/44.png" },
    { name: "Education Client 45", image: "/images/clients/education-new/45.png" },
];

const bankingClients = [
    { name: "Banking Client 50", image: "/images/clients/banking-new/50.png" },
    { name: "Banking Client 51", image: "/images/clients/banking-new/51.png" },
    { name: "Banking Client 52", image: "/images/clients/banking-new/52.png", scale: "scale-150" },
    { name: "Banking Client 53", image: "/images/clients/banking-new/53.png" },
];

const travelTourismClients = [
    { name: "Travel & Tourism Client 47", image: "/images/clients/travel-and-tourism/47.png" },
    { name: "Travel & Tourism Client 48", image: "/images/clients/travel-and-tourism/48.png", scale: "scale-150" },
];
const hospitalityClients = [
    { name: "Hospitality Client 55", image: "/images/clients/hospitality/55.png" },
    { name: "Hospitality Client 56", image: "/images/clients/hospitality/56.png" },
    { name: "Hospitality Client 57", image: "/images/clients/hospitality/57.png" },
    { name: "Hospitality Client 58", image: "/images/clients/hospitality/58.png" },
    { name: "Hospitality Client 59", image: "/images/clients/hospitality/59.png" },
    { name: "Hospitality Client 60", image: "/images/clients/hospitality/60.png" },
    { name: "Hospitality Client 61", image: "/images/clients/hospitality/61.png" },
    { name: "Hospitality Client 62", image: "/images/clients/hospitality/62.png" },
];
const constructionClients = [
    { name: "Construction Client 64", image: "/images/clients/construction/64.png" },
    { name: "Construction Client 65", image: "/images/clients/construction/65.png" },
];
const mediaAdvertisingClients = [
    { name: "Media Advertising Client 67", image: "/images/clients/media-advertising/67.png" },
    { name: "Media Advertising Client 68", image: "/images/clients/media-advertising/68.png" },
];
const legalServicesClients = [
    { name: "Legal Services Client 70", image: "/images/clients/legal-services/70.png" },
    { name: "Legal Services Client 71", image: "/images/clients/legal-services/71.png" },
];


export default function ClientsPage() {
    return (
        <main className="bg-[#f7f7f9]">
            <PageHero
                title="Clients"
                backgroundImage="/images/clients/hero.jpeg"
                height="md"
            />

            {/* Category quick links */}
            <section className="max-w-6xl mx-auto px-4 py-10">
                <div className="flex flex-wrap gap-3">
                    <Link href="#Mainit" className="px-4 py-2 rounded-full bg-[#EC2028] btn-animated text-white text-sm font-semibold hover:bg-[#c51c24] transition-colors">
                        IT AND NON-IT CLIENT
                    </Link>
                    <Link href="#Manu" className="px-4 py-2 rounded-full bg-white text-slate-900 text-sm font-semibold border border-slate-200 shadow-sm hover:border-[#EC2028] transition-colors">
                        MANUFACTURING
                    </Link>
                    <Link href="#education1" className="px-4 py-2 rounded-full bg-white text-slate-900 text-sm font-semibold border border-slate-200 shadow-sm hover:border-[#EC2028] transition-colors">
                        EDUCATION
                    </Link>
                    <Link href="#TravelTourism" className="px-4 py-2 rounded-full bg-white text-slate-900 text-sm font-semibold border border-slate-200 shadow-sm hover:border-[#EC2028] transition-colors">
                        Travel & Tourism
                    </Link>
                    <Link href="#Banking" className="px-4 py-2 rounded-full bg-white text-slate-900 text-sm font-semibold border border-slate-200 shadow-sm hover:border-[#EC2028] transition-colors">
                        BANKING
                    </Link>
                    <Link href="#Hospitality" className="px-4 py-2 rounded-full bg-white text-slate-900 text-sm font-semibold border border-slate-200 shadow-sm hover:border-[#EC2028] transition-colors">
                        HOSPITALITY
                    </Link>
                    <Link href="#Construction" className="px-4 py-2 rounded-full bg-white text-slate-900 text-sm font-semibold border border-slate-200 shadow-sm hover:border-[#EC2028] transition-colors">
                        CONSTRUCTION
                    </Link>
                    <Link href="#MediaAdvertising" className="px-4 py-2 rounded-full bg-white text-slate-900 text-sm font-semibold border border-slate-200 shadow-sm hover:border-[#EC2028] transition-colors">
                        Media Advertising
                    </Link>
                    <Link href="#LegalServices" className="px-4 py-2 rounded-full bg-white text-slate-900 text-sm font-semibold border border-slate-200 shadow-sm hover:border-[#EC2028] transition-colors">
                        Legal Services
                    </Link>
                </div>
            </section>

            {/* Client grids */}
            <section className="pb-16">
                <ClientCategory id="Mainit" title="IT AND NON-IT CLIENT" clients={itClients} />
                <ClientCategory id="Manu" title="MANUFACTURING" clients={manufacturingClients} />
                <ClientCategory id="education1" title="EDUCATION" clients={educationClients} />
                <ClientCategory id="TravelTourism" title="Travel & Tourism" clients={travelTourismClients} />
                <ClientCategory id="Banking" title="BANKING" clients={bankingClients} />
                <ClientCategory id="Hospitality" title="HOSPITALITY" clients={hospitalityClients} />
                <ClientCategory id="Construction" title="CONSTRUCTION" clients={constructionClients} />
                <ClientCategory id="MediaAdvertising" title="Media Advertising" clients={mediaAdvertisingClients} />
                <ClientCategory id="LegalServices" title="Legal Services" clients={legalServicesClients} />
            </section>

        </main>
    );
}
