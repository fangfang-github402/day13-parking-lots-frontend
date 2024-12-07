import React, {useContext, useEffect} from 'react';
import {Card, Col, Row} from 'antd';
import '../css/ParkingLot.css';
import {LotsContext} from "../App";
import {getParkingLots} from "../api/api";
import PlateNumber from "./PlateNumber";

const ParkingLot = () => {
    const {state} = useContext(LotsContext);
    const {dispatch} = useContext(LotsContext);

    useEffect(() => {
        getParkingLots().then((data) => {
            dispatch({type: 'SET_LOTS', payload: data});
        });
    }, [state]);

    return (
        <div className={"parking-lots"}>
            <Row gutter={[16, 16]}>
                {state.map((lot) => (
                    <Col span={8} key={lot.id}>
                        <Card bordered={true}>
                            <span className={"parking-lot-title"}>{lot.name}</span>
                            <div className="parking-grid">
                                {Array.from({length: lot.capacity}).map((_, index) => {
                                    const ticket = lot.tickets.find(ticket => ticket.position === index + 1);
                                    return (
                                        <div key={index} className="parking-spot">
                                           {ticket ? <PlateNumber plateNumber={ticket.plateNumber} /> : ''}
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