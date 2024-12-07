import React from 'react';
import ParkingLot from './ParkingLot';
import OperatePanel from './OperatePanel';

const ParkingApp = () => {
    return (
        <div>
            <OperatePanel/>
            <ParkingLot/>
        </div>
    );
};

export default ParkingApp;