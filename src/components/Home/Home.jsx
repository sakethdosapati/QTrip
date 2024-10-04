import React, { useState, useEffect } from "react";
import Cards from "../Cards/Cards.jsx"; 

const Home = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [cities, setCities] = useState([]); 

    useEffect(() => {
        fetch('https://content-qtripdynamic-qa-backend.azurewebsites.net/api/v1/cities')
            .then(response => response.json())
            .then(data => {
                // console.log("Fetched cities:", data);
                setCities(data); 
            })
            .catch(error => console.error('Error fetching city data:', error));
    }, []);

    const filteredCities = cities.filter(item => 
        item.city.toLowerCase().includes(searchTerm) 
    );

    const handleSearch = (e) => {
        setSearchTerm(e.target.value.toLowerCase());
    };
    return (
        <>
            <div id="bac">
                <img style={{ height: "600px", width: "100%" }} src="/Assesst/bac.jpg" alt="home" />
                <div style={{ backgroundColor: "red", marginTop: "-500px" }}>
                    <h1 style={{ textAlign: "center", color: "white", fontSize: "3rem" }}>Welcome to QTrip</h1>
                    <p style={{ textAlign: "center", color: "white", fontSize: "2rem" }}>Explore the world with fantastic places to venture around</p>
                    <input
                        style={{ width: "60%", height: "40px", borderRadius: "10px", marginLeft: "300px", fontSize: "1.2rem", border: "none" }}
                        placeholder="Search For City"
                        type="text"
                        onChange={handleSearch}
                    />
                </div>
            </div>
            <div style={{width: "1320px", height: "965px", flexWrap: "wrap", display: "flex", justifyContent: "space-around", marginTop: "300px", marginLeft: "100px"
            }}>
                <Cards cities={filteredCities} />
            </div>
        </>
    );
};

export default Home;
