import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavF from './components/Nav/Nav.jsx';  
import Footer from './components/Footer/Footer.jsx';  
import Home from './components/Home/Home.jsx';  
import CityCards from './components/Webpages/CityCards.jsx';  
import Bengalurunest from "./components/Webpages/Nestedpages/Bengalurunest.jsx"; 
import Error from "./Error/Error.jsx";

const App = () => {
    return (
        <BrowserRouter>
            <NavF />
            <Routes>
                <Route path="/" element={<Home />} /> {/* Home component handles card rendering */}
                <Route path="/city/bengaluru" element={<CityCards cityIndex={0} />} />
                <Route path="/city/goa" element={<CityCards cityIndex={1} />} />
                <Route path="/city/kolkata" element={<CityCards cityIndex={2} />} />
                <Route path="/city/singapore" element={<CityCards cityIndex={3} />} />
                <Route path="/city/malaysia" element={<CityCards cityIndex={4} />} />
                <Route path="/city/bangkok" element={<CityCards cityIndex={5} />} />
                <Route path="/city/new-york" element={<CityCards cityIndex={6} />} />
                <Route path="/city/paris" element={<CityCards cityIndex={7} />} />
                <Route path="/third" element={<Bengalurunest />} />
                <Route path="*" element={<Error></Error>}/>
            </Routes>
            <Footer />
        </BrowserRouter>
    );
};

export default App;
