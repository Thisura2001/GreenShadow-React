import "../Css/Dashboard.css"
import {useEffect, useState} from "react";
import {FaCar, FaLeaf, FaTree, FaUsers} from "react-icons/fa";
import {DashBoardCardComponent} from "../Component/DashBoardCardComponent.tsx";
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
                    <DashBoardCardComponent title="Total Fields" count={10}>
                        <FaTree/>
                    </DashBoardCardComponent>

                    <DashBoardCardComponent title="Total Crops" count={25}>
                        <FaLeaf/>
                    </DashBoardCardComponent>

                    <DashBoardCardComponent title="Total Staff" count={15}>
                        <FaUsers/>
                    </DashBoardCardComponent>

                    <DashBoardCardComponent title="Vehicles" count={35}>
                        <FaCar/>
                    </DashBoardCardComponent>
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