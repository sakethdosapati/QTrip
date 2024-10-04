// src/components/Webpages/CityCards.jsx
import React, { useEffect, useState } from "react";
import Nav from '../Nav/Nav';
import './Cards.css'; 
import { Link } from "react-router-dom";

const CityCards = ({ cityIndex }) => {
    const [cityData, setCityData] = useState([]);
    
    // API URLs for different cities
    const cityAPIs = [
        "https://content-qtripdynamic-qa-backend.azurewebsites.net/api/v1/adventures?city=bengaluru",
        "https://content-qtripdynamic-qa-backend.azurewebsites.net/api/v1/adventures?city=goa",
        "https://content-qtripdynamic-qa-backend.azurewebsites.net/api/v1/adventures?city=kolkata",
        "https://content-qtripdynamic-qa-backend.azurewebsites.net//api/v1/adventures?city=singapore",
        "https://content-qtripdynamic-qa-backend.azurewebsites.net//api/v1/adventures?city=malaysia",
        "https://content-qtripdynamic-qa-backend.azurewebsites.net//api/v1/adventures?city=bangkok",
        "https://content-qtripdynamic-qa-backend.azurewebsites.net//api/v1/adventures?city=new-york",
        "https://content-qtripdynamic-qa-backend.azurewebsites.net//api/v1/adventures?city=paris"
        
    ];

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(cityAPIs[cityIndex]);
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                const data = await response.json();
                setCityData(data); // Set the fetched data to state
            } catch (error) {
                console.error("Error fetching city data:", error);
            }
        };

        fetchData();
    }, [cityIndex]); // Re-fetch data when cityIndex changes

    return (
        <>
           {/* Optional: Include Nav component if needed */}
            <div id="bmain">
                <div id="headd">
                    <div className="sub">
                        <h1>Explore all adventures</h1>
                        <p>Here's a list of places that you can explore in the city</p>
                    </div>
                    <hr />
                    <div className="sub">
                        <div id="sear">
                            <div id="fil">
                                <p>Filter</p>
                            </div>
                            <div className="three">
                                <select defaultValue="">
                                    <option disabled selected value="">
                                        Filter by Duration (Hours)
                                    </option>
                                    <option value="0-2">0-2 Hours</option>
                                    <option value="2-6">2-6 Hours</option>
                                    <option value="6-12">6-12 Hours</option>
                                    <option value="12-99">12+ Hours</option>
                                </select>
                                <p>Clear</p>
                            </div>
                            <div className="three">
                                <select defaultValue="">
                                    <option disabled selected value="">Add Category</option>
                                    <option value="Cycling">Cycling Routes</option>
                                    <option value="Hillside">Hillside Getaways</option>
                                    <option value="Beaches">Serene Beaches</option>
                                    <option value="Party">Party Spots</option>
                                </select>
                                <p>Clear</p>
                            </div>
                            <div className="three">
                                <input type="text" placeholder="Search Adventures" />
                                <p>Clear</p>
                            </div>
                        </div>
                    </div>
                    <hr />
                    <div id="cards">
                        {cityData.map((x, index) => (
                            <div key={index} className="card">
                                <Link to="/third">
                                    <div style={{ backgroundColor: "black", height: "306px", borderRadius: '10px 10px 0px 0px' }}>
                                        <img src={x.image} alt={x.name} /> {/* Ensure API has imageUrl */}
                                    </div>
                                </Link>
                                <div id="pri">
                                    <div id="left">
                                        <h2>{x.name}</h2> {/* Ensure API has title */}
                                        <p>Duration</p> {/* Ensure API has description */}
                                    </div>
                                    <div id="right">
                                        <p>₹{x.costPerHead}</p>
                                        <p>{x.duration} hours</p>
                                    </div>
                                </div>
                                <div id='tag'>{x.category}</div> {/* Ensure API has tag */}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default CityCards;
