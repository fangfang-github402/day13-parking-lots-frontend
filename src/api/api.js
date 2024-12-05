import axios from 'axios';

const instance = axios.create({
    baseURL: "http://localhost:8080/parking",
})

export const getParkingLots = async () => {
    const response = await instance.get("/lots");
    return response.data;
}