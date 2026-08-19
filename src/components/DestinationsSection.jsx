import { Link } from "react-router-dom";
const destinations = [
    {
        id: 1,
        name: "Mount Kenya",
        location: "Nanyuki, Kenya",
        category: "Mountain",
        image: "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?auto=format&fit=crop&w=1600&q=85",
    },
    {
        id: 2,
        name: "Ngong Hills",
        location: "Nairobi, Kenya",
        category: "Hiking",
        image: "https://images.unsplash.com/photo-1551632811-561732d1e306?auto=format&fit=crop&w=1600&q=85",
    },
    {
        id: 3,
        name: "Karura Forest",
        location: "Nairobi, Kenya",
        category: "Forest",
        image: "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1600&q=85",
    },
];

const DestinationSection = () => {
    return (
        <section
            id="destinations"
            className="bg-[#F4F0E8] px-6 py-24 text-[#171717] dark:bg-[#20231F] dark:text-white lg:px-10"
        >
            <div className="mx-auto max-w-7xl">
                <div className="mb-14 flex items-end justify-between">
                    <div>
                        <p className="mb-4 text-xs uppercase tracking-[0.25em] text-neutral-500 dark:text-neutral-400">
                            Discover
                        </p>

                        <h2 className="max-w-2xl text-4xl font-light tracking-tight sm:text-5xl">
                            Places worth{" "}
                            <span className="italic">exploring.</span>
                        </h2>
                    </div>

                    <button className="hidden text-sm underline underline-offset-4 md:block">
                        View all destinations
                    </button>
                </div>

                <div className="grid gap-8 md:grid-cols-3">
                    {destinations.map((destination) => (
                        <Link
                            key={destination.id}
                            to={`/destination/${destination.id}`}
                            className="group block"
                        >
                            <div className="relative aspect-4/5 overflow-hidden">
                                <img
                                    src={destination.image}
                                    alt={destination.name}
                                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                                />

                                <div className="absolute inset-x-0 bottom-0 bg-linear-to-t from-black/60 to-transparent p-6 pt-24 text-white">
                                    <p className="mb-2 text-xs uppercase tracking-[0.2em] text-white/70">
                                        {destination.category}
                                    </p>

                                    <h3 className="text-2xl font-light">
                                        {destination.name}
                                    </h3>

                                    <p className="mt-1 text-sm text-white/75">
                                        {destination.location}
                                    </p>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default DestinationSection;
