interface Props {
    location: string;
    temperature: string;
    humidity: string;
    recommendation: string;
}

export function WeatherContainerComponent({ location, temperature, humidity, recommendation }: Props) {
    return (
        <div className="weather-container">
            <h1>Crop Weather Report</h1>
            <div className="weather-report">
                <p>
                    <strong>Location:</strong> <span id="locations">{location}</span>
                </p>
                <p>
                    <strong>Temperature:</strong> <span id="temperature">{temperature}</span> °C
                </p>
                <p>
                    <strong>Humidity:</strong> <span id="humidity">{humidity}</span>%
                </p>
                <p>
                    <strong>Crop Recommendation:</strong> <span id="crop-recommendation">{recommendation}</span>
                </p>
            </div>
        </div>
    );
}
