import { Link, useParams } from "react-router-dom";

const DestinationDetails = () => {
    const { id } = useParams();

    return (
        <main className="min-h-screen  px-6 py-32 bg-[#F4F0E8] text-[#252522] dark:bg-[#20231F] dark:text-[#F4F0E8]">
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
