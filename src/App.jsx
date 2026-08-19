import { useState } from "react";
import {Routes, Route} from "react-router-dom"
import Home from "./pages/Home";
import DestinationDetails from "./pages/destinationDetails";
import Trails from "./pages/trails";
import TrailDetails from "./pages/trailDetails";

export default function App() {
    const [darkMode, setDarkMode] = useState(false);
    return (
        <div
            className={
                darkMode
                    ? "dark min-h-screen bg-[#20231F] text-[#F4F0E8]"
                    : "min-h-screen bg-[#F4F0E8] text-[#252522]"
            }
        >
            <Routes>
                <Route
                    path="/"
                    element={
                        <Home darkMode={darkMode} setDarkMode={setDarkMode} />
                    }
                />

                <Route
                    path="/destination/:id"
                    element={
                        <DestinationDetails
                            darkMode={darkMode}
                            setDarkMode={setDarkMode}
                        />
                    }
                />
                <Route
                    path="/trails"
                    element={
                        <Trails darkMode={darkMode} setDarkMode={setDarkMode} />
                    }
                />
                <Route
                    path="/trails/:id"
                    element={
                        <TrailDetails
                            darkMode={darkMode}
                            setDarkMode={setDarkMode}
                        />
                    }
                />
               
            </Routes>
        </div>
    );
}
