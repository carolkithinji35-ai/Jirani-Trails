import { Link, useParams } from "react-router-dom";
import Header from "../components/header";

const DestinationDetails = ({ darkMode, setDarkMode }) => {
    const { id } = useParams();

    return (
        <main className="min-h-screen bg-[#F4F0E8] px-6 pb-32 pt-24 text-[#252522] dark:bg-[#20231F] dark:text-[#F4F0E8]">
            <Header darkMode={darkMode} setDarkMode={setDarkMode} />
            <div className="mx-auto max-w-5xl">
                <Link to="/" className="text-sm underline">
                    ← Back to destinations
                </Link>

                <h1 className="mt-10 text-5xl font-light">Destination {id}</h1>
            </div>
        </main>
    );
};

export default DestinationDetails;
