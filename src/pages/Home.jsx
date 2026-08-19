import Header from "../components/header";
import Hero from "../components/hero";
import DestinationsSection from "../components/DestinationsSection";

const Home = ({ darkMode, setDarkMode }) => (
    <>
        <Header darkMode={darkMode} setDarkMode={setDarkMode} transparent />
        <Hero darkMode={darkMode} />
        <DestinationsSection />
    </>
);

export default Home;
