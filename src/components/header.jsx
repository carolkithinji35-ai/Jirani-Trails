import { useState } from "react";
import { Sun, Moon, User, Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

function Header({ darkMode, setDarkMode, transparent = false }) {
    const [menuOpen, setMenuOpen] = useState(false);
    const { pathname } = useLocation();
    const foregroundColor = transparent
        ? "text-white"
        : "text-[#252522] dark:text-[#F4F0E8]";
    const buttonHover = transparent
        ? "hover:bg-white hover:text-[#252522]"
        : "hover:bg-[#252522] hover:text-white dark:hover:bg-[#F4F0E8] dark:hover:text-[#20231F]";
    const navClass = (path) =>
        `text-sm font-medium transition-opacity hover:opacity-70 ${foregroundColor} ${
            pathname === path ? "underline underline-offset-8" : ""
        }`;

    return (
        <header
            className={`top-0 z-50 w-full ${
                transparent
                    ? "absolute"
                    : "sticky border-b border-black/10 bg-[#F4F0E8] dark:border-white/10 dark:bg-[#20231F]"
            }`}
        >
            <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-8">
                <Link
                    to="/"
                    className={`text-2xl font-semibold tracking-tight sm:text-3xl ${foregroundColor}`}
                >
                    Jirani <span className="font-light">Trails</span>
                </Link>

                <nav className="hidden items-center gap-8 md:flex">
                    <Link to="/" className={navClass("/")}>
                        Explore
                    </Link>
                    <Link to="/trails" className={navClass("/trails")}>
                        Find Trails
                    </Link>
                    <Link
                        to="/#destinations"
                        className={`text-sm font-medium transition-opacity hover:opacity-70 ${foregroundColor}`}
                    >
                        Destinations
                    </Link>
                </nav>

                <div className="flex items-center gap-3">
                    <button
                        onClick={() => setDarkMode(!darkMode)}
                        aria-label="Toggle dark mode"
                        className={`flex h-10 w-10 items-center justify-center ${foregroundColor}`}
                    >
                        {darkMode ? <Sun size={18} /> : <Moon size={18} />}
                    </button>
                    <button
                        aria-label="Profile"
                        title="Profile"
                        className={`flex h-10 w-10 items-center justify-center rounded-full transition ${foregroundColor} ${buttonHover}`}
                    >
                        <User size={18} />
                    </button>
                    <button
                        onClick={() => setMenuOpen(!menuOpen)}
                        aria-label="Toggle navigation menu"
                        title="Menu"
                        className={`flex h-10 w-10 items-center justify-center rounded-full transition md:hidden ${foregroundColor} ${buttonHover}`}
                    >
                        {menuOpen ? <X size={20} /> : <Menu size={20} />}
                    </button>
                </div>
            </div>

            {menuOpen && (
                <nav
                    className={`mx-4 rounded-2xl p-6 shadow-lg backdrop-blur-md md:hidden ${
                        transparent
                            ? "bg-black/50 text-white"
                            : "bg-[#EAE4D8] text-[#252522] dark:bg-[#2B2E29] dark:text-[#F4F0E8]"
                    }`}
                >
                    <div className="flex flex-col gap-5">
                        <Link to="/" onClick={() => setMenuOpen(false)} className={navClass("/")}>
                            Explore
                        </Link>
                        <Link to="/trails" onClick={() => setMenuOpen(false)} className={navClass("/trails")}>
                            Find Trails
                        </Link>
                        <Link
                            to="/#destinations"
                            onClick={() => setMenuOpen(false)}
                            className={`text-sm font-medium hover:opacity-70 ${foregroundColor}`}
                        >
                            Destinations
                        </Link>
                    </div>
                </nav>
            )}
        </header>
    );
}

export default Header;
