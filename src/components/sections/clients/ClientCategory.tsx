import Image from "next/image";

interface Client {
    name: string;
    image: string;
}

interface ClientCategoryProps {
    id: string;
    title: string;
    clients: Client[];
}

const ClientCategory = ({ id, title, clients }: ClientCategoryProps) => {
    return (
        <section id={id} className="border-t border-slate-200 py-14 bg-white">
            <div className="mx-auto max-w-6xl px-4">
                <div className="flex items-center gap-3 mb-8">
                    <span className="w-1.5 h-8 rounded-full bg-[#EC2028] btn-animated" />
                    <h2 className="text-2xl md:text-3xl font-bold text-slate-900">{title}</h2>
                </div>

                <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6 lg:grid-cols-4 xl:grid-cols-5">
                    {clients.map((client) => (
                        <div
                            key={`${id}-${client.name}`}
                            className="flex h-36 md:h-44 p-4 md:p-5 items-center justify-center bg-white rounded-xl border border-slate-200 shadow-[0_10px_24px_rgba(15,23,42,0.06)] transition hover:-translate-y-1 hover:shadow-[0_18px_32px_rgba(15,23,42,0.08)]"
                        >
                            <div className="relative w-[105%] h-[105%] md:w-[110%] md:h-[110%]">
                                <Image
                                    src={client.image}
                                    alt={client.name}
                                    fill
                                    className="object-contain"
                                    sizes="(max-width: 640px) 60vw, (max-width: 1024px) 40vw, (max-width: 1280px) 25vw, 18vw"
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ClientCategory;
