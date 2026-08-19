import { useState } from "react";
import { Link } from "react-router-dom";
import { searchTrails } from "../services/trails";
import Header from "../components/header";

const Trails = ({darkMode, setDarkMode}) => {
    const [search, setSearch] = useState("");
    const [trails, setTrails] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const handleSearch = async (event) => {
        event.preventDefault();

        if (!search.trim()) {
            setError("Enter a trail or hiking destination to search.");
            return;
        }

        setLoading(true);
        setError("");

        try {
            const results = await searchTrails(search.trim());
            setTrails(results);
            console.log("Trail API results", results)

            if (results.length === 0) {
                setError("No hiking trails found.");
            }
        } catch (err) {
            console.error(err);
            setError("Something went wrong while finding trails.");
            setTrails([]);
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <Header
                darkMode={darkMode}
                setDarkMode={setDarkMode}
                transparent={false}
            />
            <main className="min-h-screen bg-[#F4F0E8] px-6 py-24 text-[#252522] dark:bg-[#20231F] dark:text-[#F4F0E8] lg:px-10">
            <div className="mx-auto max-w-7xl">
                <p className="text-xs uppercase tracking-[0.25em] text-[#78756D] dark:text-[#B7B4AA]">
                    Find Trails
                </p>

                <h1 className="mt-4 max-w-3xl text-5xl font-light tracking-tight sm:text-6xl">
                    Find your next <span className="italic">adventure.</span>
                </h1>

                <form
                    onSubmit={handleSearch}
                    className="mt-10 flex max-w-2xl gap-3 rounded-xl bg-white p-3 dark:bg-[#2B2E29]"
                >
                    <input
                        type="text"
                        value={search}
                        onChange={(event) => setSearch(event.target.value)}
                        placeholder="Search for a hiking trail..."
                        className="min-w-0 flex-1 bg-transparent px-4 py-3 text-sm outline-none placeholder:text-[#78756D] dark:placeholder:text-[#B7B4AA]"
                    />

                    <button
                        type="submit"
                        disabled={loading}
                        className="rounded-lg bg-[#252522] px-6 py-3 text-sm font-medium text-white transition hover:bg-[#3A3A36] disabled:opacity-50"
                    >
                        {loading ? "Searching..." : "Search"}
                    </button>
                </form>

                {error && (
                    <p className="mt-8 text-sm text-[#A65F43]">{error}</p>
                )}

                {trails.length > 0 && (
                    <section className="mt-16">
                        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                            {trails.map((trail) => (
                                <Link
                                    key={trail.id}
                                    to={`/trails/${trail.id}`}
                                    className="group"
                                >
                                    <article className="overflow-hidden rounded-2xl bg-white dark:bg-[#2B2E29]">
                                        <div className="aspect-[4/3] overflow-hidden bg-[#EAE4D8] dark:bg-[#353832]">
                                            <img
                                                src="https://images.unsplash.com/photo-1551632811-561732d1e306?auto=format&fit=crop&w=1200&q=85"
                                                alt={trail.name}
                                                className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                                            />
                                        </div>

                                        <div className="p-6">
                                            <p className="text-xs uppercase tracking-[0.2em] text-[#78756D] dark:text-[#B7B4AA]">
                                                Hiking Trail
                                            </p>

                                            <h2 className="mt-2 text-2xl font-light">
                                                {trail.name}
                                            </h2>

                                            {trail.distance && (
                                                <p className="mt-3 text-sm text-[#78756D] dark:text-[#B7B4AA]">
                                                    {trail.distance.toFixed(1)}{" "}
                                                    km
                                                </p>
                                            )}
                                        </div>
                                    </article>
                                </Link>
                            ))}
                        </div>
                    </section>
                )}
            </div>
            </main>
        </>
    );
};

export default Trails;
