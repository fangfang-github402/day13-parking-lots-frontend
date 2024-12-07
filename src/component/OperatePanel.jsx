import React, {useReducer, useState} from 'react';
import '../css/OperatePanel.css';
import {fetchCar, parkCar} from "../api/api";
import {lotsReducer} from "../context/lotsReducer";

const OperatePanel = () => {
    const [plateNumber, setPlateNumber] = useState('');
    const [selectedStrategy, setSelectedStrategy] = useState('Standard');

    const {dispatch} = useReducer(lotsReducer, [], () => []);

    const parkingStrategies = [
        {name: "Standard"},
        {name: "Smart"},
        {name: "Super Smart"}
    ];

    const validatePlateNumber = (plateNumber) => {
        const plateNumberPattern = /^[A-Z]{2}-\d{4}$/;
        return plateNumberPattern.test(plateNumber);
    };

    const handlePark = () => {
        if (!validatePlateNumber(plateNumber)) {
            return;
        }
        parkCar(plateNumber, selectedStrategy)
            .then((response) => {
                dispatch({type: 'PARK_CAR', payload: response});
                console.log(response);
            })
            .catch((error) => {
                console.error(error);
            });
    };

    const handleFetch = () => {
        if (!validatePlateNumber(plateNumber)) {
            return;
        }
        fetchCar(plateNumber)
            .then((response) => {
                dispatch({type: 'FETCH_CAR', payload: response});
                console.log(response);
            })
            .catch((error) => {
                console.error(error);
            });
    };

    return (
        <div className="control-bar">
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
    );
};

export default OperatePanel;