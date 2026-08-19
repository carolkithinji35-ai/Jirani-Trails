import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Header from "../components/header";
import { getTrailById } from "../services/trails";

const TrailDetails = ({ darkMode, setDarkMode }) => {
    const { id } = useParams();

    const [trail, setTrail] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        const fetchTrail = async () => {
            try {
                const data = await getTrailById(id);
                setTrail(data);
            } catch (err) {
                console.error(err);
                setError("We couldn't load this trail.");
            } finally {
                setLoading(false);
            }
        };

        fetchTrail();
    }, [id]);

    return (
        <main className="min-h-screen bg-[#F4F0E8] text-[#252522] dark:bg-[#20231F] dark:text-[#F4F0E8]">
            <Header
                darkMode={darkMode}
                setDarkMode={setDarkMode}
                transparent={false}
            />

            <section className="px-6 pb-24 pt-36 lg:px-10">
                <div className="mx-auto max-w-6xl">
                    <Link
                        to="/trails"
                        className="text-sm text-[#78756D] underline underline-offset-4 dark:text-[#B7B4AA]"
                    >
                        ← Back to trails
                    </Link>

                    {loading && (
                        <p className="mt-16 text-[#78756D] dark:text-[#B7B4AA]">
                            Loading trail...
                        </p>
                    )}

                    {error && (
                        <p className="mt-16 text-[#78756D] dark:text-[#B7B4AA]">
                            {error}
                        </p>
                    )}

                    {trail && (
                        <div className="mt-12">
                            <p className="text-xs uppercase tracking-[0.25em] text-[#78756D] dark:text-[#B7B4AA]">
                                Hiking Trail
                            </p>

                            <h1 className="mt-4 text-5xl font-light tracking-tight sm:text-6xl">
                                {trail.properties.name ||
                                    "Unnamed hiking trail"}
                            </h1>

                            <div className="mt-8 grid gap-6 sm:grid-cols-3">
                                <div>
                                    <p className="text-xs uppercase tracking-widest text-[#78756D] dark:text-[#B7B4AA]">
                                        Distance
                                    </p>

                                    <p className="mt-2 text-2xl">
                                        {trail.properties.distance_km
                                            ? `${trail.properties.distance_km.toFixed(
                                                  1,
                                              )} km`
                                            : "N/A"}
                                    </p>
                                </div>

                                <div>
                                    <p className="text-xs uppercase tracking-widest text-[#78756D] dark:text-[#B7B4AA]">
                                        Elevation Gain
                                    </p>

                                    <p className="mt-2 text-2xl">
                                        {trail.properties.ascent_m
                                            ? `${Math.round(
                                                  trail.properties.ascent_m,
                                              )} m`
                                            : "N/A"}
                                    </p>
                                </div>

                                <div>
                                    <p className="text-xs uppercase tracking-widest text-[#78756D] dark:text-[#B7B4AA]">
                                        Type
                                    </p>

                                    <p className="mt-2 text-2xl capitalize">
                                        {trail.properties.route_type ||
                                            "Hiking"}
                                    </p>
                                </div>
                            </div>

                            <div className="mt-16 overflow-hidden bg-[#EAE4D8] dark:bg-[#2B2E29]">
                                <div className="flex min-h-[350px] items-center justify-center">
                                    <p className="text-sm text-[#78756D] dark:text-[#B7B4AA]">
                                        Trail map will go here
                                    </p>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </section>
        </main>
    );
};

export default TrailDetails;
