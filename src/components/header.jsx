function Header() {
    return (
        <header className="absolute top-0 z-50 w-full">
            <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-8">
                <a
                    href="/"
                    className="text-2xl font-semibold tracking-tight text-white sm:text-3xl"
                >
                    Jirani <span className="font-light">Trails</span>
                </a>
                <nav className="hidden items-center gap-8 md:flex">
                    <a
                        href="/"
                        className="text-sm font-medium text-white transition-opacity hover:opacity-70"
                    >
                        Explore
                    </a>
                    <a
                        href="#destinations"
                        className="text-sm font-medium text-white transition-opacity hover:opacity-70"
                    >
                        Destinations
                    </a>
                    <a
                        href="#about"
                        className="text-sm font-medium text-white transition-opacity hover:opacity-70"
                    >
                        About
                    </a>
                </nav>
                <button className="rounded-full border cursor-pointer border-white/70 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-white hover:text-black">Start Exploring</button>
            </div>
        </header>
    );
}

export default Header