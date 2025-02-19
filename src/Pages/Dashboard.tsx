import "../Css/Dashboard.css"
import {useEffect, useState} from "react";
import {FaCar, FaLeaf, FaTree, FaUsers} from "react-icons/fa";
import {DashBoardCardComponent} from "../Component/DashboardComponets/DashBoardCardComponent.tsx";
import {WeatherContainerComponent} from "../Component/DashboardComponets/WeatherContainerComponent.tsx";
export default function Dashboard(){

    const [currentTime, setCurrentTime] = useState("");
    useEffect(() => {
        const updateCurrentTime = () => {
            const now = new Date();

            const hours = now.getHours().toString().padStart(2, "0");
            const minutes = now.getMinutes().toString().padStart(2, "0");
            const seconds = now.getSeconds().toString().padStart(2, "0");

            setCurrentTime(`${hours}:${minutes}:${seconds}`);
        };

        const intervalId = setInterval(updateCurrentTime, 1000);
        updateCurrentTime();

        return () => clearInterval(intervalId);
    }, []);

    const [weather] = useState({
        location:"Agalawatta",
        temperature: "28",
        humidity: "65",
        recommendation: 'Paddy',
    })
    return(
        <>
        <section id="dashboard">
            <div className="currentTimeWrapper">
                <div id="currentTime">{currentTime}</div>
            </div>
            <div className="dashboard-cards grid grid-cols-4 gap-4">
            <DashBoardCardComponent title="Total Fields" count={10} bgColor="bg-purple-600">
                <FaTree/>
            </DashBoardCardComponent>

            <DashBoardCardComponent title="Total Crops" count={25} bgColor="bg-yellow-500">
                <FaLeaf/>
            </DashBoardCardComponent>

            <DashBoardCardComponent title="Total Staff" count={15} bgColor="bg-blue-500">
                <FaUsers/>
            </DashBoardCardComponent>

            <DashBoardCardComponent title="Vehicles" count={35} bgColor="bg-red-500">
                <FaCar/>
            </DashBoardCardComponent>
        </div>
        <WeatherContainerComponent location={weather.location}
                                   temperature={weather.temperature}
                                   humidity={weather.humidity}
                                   recommendation={weather.recommendation}>
        </WeatherContainerComponent>
        </section>
</>
)
}