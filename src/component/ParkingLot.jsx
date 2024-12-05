import React from 'react';

const ParkingLot = ({name, capacity, spots}) => {
    return (
        <div>
            <h3>{name} (Capacity: {capacity})</h3>
            <div style={{
                display: 'grid',
                gridTemplateColumns: `repeat(${Math.ceil(Math.sqrt(capacity))}, 1fr)`,
                gap: '10px'
            }}>
                {Array.from({length: capacity}).map((_, index) => (
                    <div key={index} style={{border: '1px solid black', padding: '10px', textAlign: 'center'}}>
                        {spots[index] ? spots[index].plateNumber : 'X'}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ParkingLot;