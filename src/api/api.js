import instance from "./interceptor";

export const getParkingLots = async () => {
    const response = await instance.get("/lots");
    return response.data;
}

export const parkCar = async (plateNumber, strategy) => {
    const response = await instance.post("/park", {
            plateNumber: plateNumber,
            parkingBoyType: strategy
        }
    );
    return response.data;
}

export const fetchCar = async (plateNumber) => {
    const response = await instance.get("/fetch", {
        params: {
            plateNumber: plateNumber
        }
    });
    return response.data;
}