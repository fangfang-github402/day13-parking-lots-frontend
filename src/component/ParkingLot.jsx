import React, { useEffect, useState } from 'react';
import { Row, Col, Card } from 'antd';
import { getParkingLots } from '../api/api';
import '../css/ParkingLot.css';

const ParkingLot = () => {
    const [parkingLots, setParkingLots] = useState([]);
    useEffect(() => {
        getParkingLots().then((data) => {
            setParkingLots(data);
        });
    }, []);

    return (
        <div className={"parking-lots"}>
            <Row gutter={[16, 16]}>
                {parkingLots.map((lot) => (
                    <Col span={8} key={lot.id}>
                        <Card bordered={true}>
                            <span className={"parking-lot-title"}>{lot.name}</span>
                            <div className="parking-grid">
                                {Array.from({ length: lot.capacity }).map((_, index) => {
                                    const ticket = lot.tickets.find(ticket => ticket.position === index + 1);
                                    return (
                                        <div key={index} className="parking-spot">
                                            {ticket ? <div className="plate-number">{ticket.plateNumber}</div> :''}
                                        </div>
                                    );
                                })}
                            </div>
                        </Card>
                    </Col>
                ))}
            </Row>
        </div>
    );
};

export default ParkingLot;