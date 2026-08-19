const Hero = () => {
    return (
        <section className="relative flex min-h-screen items-center overflow-hidden ">
            <img
                src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=2000&q=85"
                alt="Mountain landscape"
                className="absolute inset-0 h-full w-full object-cover"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/65" />

            <div className="relative z-10 mx-auto flex justify-center  text-center w-full max-w-7xl px-6 pt-24 lg:px-8">
                <div className="max-w-3xl text-white">
                    

                    <h1 className="text-5xl font-semibold leading-[1.05] tracking-tight sm:text-6xl lg:text-8xl">
                        Find your next
                        <span className="block font-light italic">
                            adventure.
                        </span>
                    </h1>

                    <p className="mt-7 max-w-xl text-base leading-7 text-white/85 sm:text-lg mx-auto ">
                        Discover breathtaking hiking trails and outdoor
                        destinations around you. Find a trail, check the
                        weather, and start exploring.
                    </p>

                    <div className="mx-auto mt-10 flex max-w-2xl flex-col gap-3 rounded-2xl bg-white p-3 text-left shadow-2xl sm:flex-row">
                        <div className="flex flex-1 items-center gap-3 px-4">
                            <svg
                                className="h-5 w-5 text-gray-500"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={1.8}
                                    d="M21 21l-4.35-4.35m2.1-5.4a7.5 7.5 0 11-15 0 7.5 7.5 0 0115 0z"
                                />
                            </svg>

                            <input
                                type="text"
                                placeholder="Where do you want to explore?"
                                className="w-full bg-transparent py-3 text-sm text-gray-900 outline-none placeholder:text-gray-400"
                            />
                        </div>

                        <button className="rounded-xl cursor-pointer bg-black px-7 py-3 text-sm font-medium text-white transition hover:bg-gray-800">
                            Explore
                        </button>
                    </div>
                </div>
            </div>

            <div className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 text-xs uppercase tracking-[0.25em] text-white/80 sm:block">
                Scroll to explore
            </div>
        </section>
    );
};

export default Hero;
