import "../Css/Dashboard.css"
import {useEffect, useState} from "react";
export default function Dashboard(){
    const [currentTime, setCurrentTime] = useState("");

    useEffect(() => {
        const updateCurrentTime = () => {
            const now = new Date();

            // Format time as HH:MM:SS
            const hours = now.getHours().toString().padStart(2, "0");
            const minutes = now.getMinutes().toString().padStart(2, "0");
            const seconds = now.getSeconds().toString().padStart(2, "0");

            setCurrentTime(`${hours}:${minutes}:${seconds}`);
        };

        const intervalId = setInterval(updateCurrentTime, 1000); // Update every 1 second
        updateCurrentTime();

        return () => clearInterval(intervalId);
    }, []);
    return(
        <>
            <section id="dashboard">
                <div className="currentTimeWrapper">
                    <div id="currentTime">{currentTime}</div>
                </div>
                <div className="dashboard-cards">
                    <div id="staticCard-fields" className="staticCard">
                        <h3>Total Fields
                            <i className="fa-solid fa-tree"></i>
                        </h3>
                        <p id="fieldCount">10</p>
                    </div>
                    <div id="staticCard-crops" className="staticCard">
                        <h3>Total Crops
                            <i className="fa-solid fa-leaf"></i>
                        </h3>
                        <p id="cropCount">25</p>
                    </div>
                    <div id="staticCard-staff" className="staticCard">
                        <h3>Total Staff
                            <i className="fa-solid fa-users"></i>
                        </h3>
                        <p id="staffCount">15</p>
                    </div>
                    <div id="staticCard-vehicles" className="staticCard">
                        <h3>Vehicles
                            <i className="fa-solid fa-car"></i>
                        </h3>
                        <p id="vehicleCount">35</p>
                    </div>
                </div>


                <div className="weather-container">
                    <h1>Crop Weather Report</h1>
                    <div className="weather-report">
                        <p><strong>Location:</strong> <span id="locations">-</span></p>
                        <p><strong>Temperature:</strong> <span id="temperature">-</span> °C</p>
                        <p><strong>Humidity:</strong> <span id="humidity">-</span>%</p>
                        <p><strong>Crop Recommendation:</strong> <span id="crop-recommendation">-</span></p>
                    </div>
                </div>

            </section>
        </>
    )
}