import { useState } from "react";
import{ Sun, Moon, User, Menu, X } from "lucide-react"
function Header({ darkMode, setDarkMode }) {
    const [menuOpen, setMenuOpen] = useState(false);
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
                <div className="flex items-center gap-3">
                    <button
                        onClick={() => setDarkMode(!darkMode)}
                        aria-label="Toggle dark mode"
                        className="flex h-10 w-10 items-center justify-center   text-white "
                    >
                        {darkMode ? <Sun size={18} /> : <Moon size={18} />}
                    </button>

                    <button
                        aria-label="Profile"
                        className="flex h-10 w-10 rounded-full  items-center justify-center  border-white/50 text-white transition hover:bg-white hover:text-black" title="Profile"
                    >
                        <User size={18} />
                        
                    </button>
                    <button
                        onClick={() => setMenuOpen(!menuOpen)}
                        aria-label="Toggle navigation menu"
                        className="flex h-10 w-10 rounded-full items-center justify-center  text-white transition hover:bg-white hover:text-black md:hidden" title="menu"
                    >
                        {menuOpen ? <X size={20} /> : <Menu size={20} />}
                    </button>
                </div>
            </div>
            {/* mobile navigation */}
            {menuOpen && (
                <nav className="mx-4 rounded-2xl bg-black/30 p-6 backdrop-blur-md md:hidden shadow-lg">
                    <div className="flex flex-col gap-5">
                        <a
                            href="/"
                            onClick={() => setMenuOpen(false)}
                            className="text-sm font-medium text-white hover:opacity-70"
                        >
                            Explore
                        </a>

                        <a
                            href="#destinations"
                            onClick={() => setMenuOpen(false)}
                            className="text-sm font-medium text-white hover:opacity-70"
                        >
                            Destinations
                        </a>

                        <a
                            href="#about"
                            onClick={() => setMenuOpen(false)}
                            className="text-sm font-medium text-white hover:opacity-70"
                        >
                            About
                        </a>

                        <button
                            className="flex items-center gap-2 border-t border-white/20 pt-5 text-left text-sm font-medium text-white"
                            aria-label="Profile"
                        >
                            👤 Profile
                        </button>
                    </div>
                </nav>
            )}
        </header>
    );
}

export default Header;
