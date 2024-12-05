import ParkingLot from './ParkingLot';
import {useState} from "react";
import '../css/ParkingApp.css';
import {fetchCar, parkCar} from "../api/api";

const ParkingApp = () => {
    const [plateNumber, setPlateNumber] = useState('');

    const parkingStrategies = [
        { name: "Standard" },
        { name: "Smart" },
        { name: "Super Smart" }
    ];

    const [selectedStrategy, setSelectedStrategy] = useState(parkingStrategies[0].name);

    const handlePark = () => {
        parkCar(plateNumber, selectedStrategy)
            .then((response) => {
                console.log(response);
            })
            .catch((error) => {
                console.error(error);
            });
    };

    const handleFetch = () => {
        fetchCar(plateNumber)
            .then((response) => {
                console.log(response);
            })
            .catch((error) => {
                console.error(error);
            });
    };

    return (
        <div>
            <div className={"control-bar"}>
                <input
                    type="text"
                    value={plateNumber}
                    onChange={(e) => setPlateNumber(e.target.value)}
                    placeholder="Enter plate number"
                />
                <select
                    value={selectedStrategy}
                    onChange={(e) => setSelectedStrategy(e.target.value)}
                >
                    {parkingStrategies.map((strategy) => (
                        <option key={strategy.name} value={strategy.name}>
                            {strategy.name}
                        </option>
                    ))}
                </select>
                <button onClick={handlePark}>Park</button>
                <button onClick={handleFetch}>Fetch</button>
            </div>
            <ParkingLot/>
        </div>
    );
};

export default ParkingApp;