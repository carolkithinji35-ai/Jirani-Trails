import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getNearbyDestinations } from "../services/destinations";

const DestinationSection = () => {
    const [destinations, setDestinations] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(
            async (position) => {
                try {
                    const { latitude, longitude } = position.coords;

                    const data = await getNearbyDestinations(
                        latitude,
                        longitude,
                    );

                    setDestinations(data);
                } catch (err) {
                    console.error(err);
                    setError("We couldn't find destinations near you.");
                } finally {
                    setLoading(false);
                }
            },
            (error) => {
                console.error(error);
                setError(
                    "Please allow location access to discover nearby destinations.",
                );
                setLoading(false);
            },
        );
    }, []);

    return (
        <section
            id="destinations"
            className="bg-[#F4F0E8] px-6 py-24 text-[#252522] dark:bg-[#20231F] dark:text-[#F4F0E8] lg:px-10"
        >
            <div className="mx-auto max-w-7xl">
                {/* Section heading */}
                <div className="mb-14 flex items-end justify-between">
                    <div>
                        <p className="mb-4 text-xs uppercase tracking-[0.25em] text-[#78756D] dark:text-[#B7B4AA]">
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

                {/* Loading */}
                {loading && (
                    <div className="py-20 text-center text-[#78756D] dark:text-[#B7B4AA]">
                        Discovering destinations near you...
                    </div>
                )}

                {/* Error */}
                {!loading && error && (
                    <div className="py-20 text-center text-[#78756D] dark:text-[#B7B4AA]">
                        {error}
                    </div>
                )}

                {/* Empty */}
                {!loading && !error && destinations.length === 0 && (
                    <div className="py-20 text-center text-[#78756D] dark:text-[#B7B4AA]">
                        No destinations found nearby.
                    </div>
                )}

                {/* Destinations */}
                {!loading && !error && destinations.length > 0 && (
                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {destinations.map((destination, index) => (
                            <Link
                                key={destination.id}
                                to={`/destination/${destination.id}`}
                                className="group block"
                            >
                                <div className="relative aspect-4/5 overflow-hidden">
                                    <img
                                        src={
                                            [
                                                "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1600&q=85",
                                                "https://images.unsplash.com/photo-1551632811-561732d1e306?auto=format&fit=crop&w=1600&q=85",
                                                "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1600&q=85",
                                            ][index % 3]
                                        }
                                        alt={destination.name}
                                        className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                                    />

                                    <div className="absolute inset-x-0 bottom-0 bg-linear-to-t from-black/60 to-transparent p-6 pt-24 text-white">
                                        <p className="mb-2 text-xs uppercase tracking-[0.2em] text-white/70">
                                            {destination.categories?.[0] ||
                                                "Destination"}
                                        </p>

                                        <h3 className="text-2xl font-light">
                                            {destination.name}
                                        </h3>

                                        <p className="mt-1 text-sm text-white/75">
                                            {destination.location}
                                        </p>

                                        {destination.distance && (
                                            <p className="mt-2 text-xs text-white/60">
                                                {Math.round(
                                                    destination.distance / 1000,
                                                )}{" "}
                                                km away
                                            </p>
                                        )}
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
};

export default DestinationSection;
