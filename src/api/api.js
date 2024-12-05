import instance from "./interceptor";

export const getParkingLots = async () => {
    const response = await instance.get("/lots");
    return response.data;
}