export const lotsReducer = (state, action) => {
    switch (action.type) {
        case 'SET_LOTS':
            return action.payload;
        case 'PARK_CAR':
            return state.map(lot =>
                lot.id === action.payload.parkingLot
                    ? {...lot, tickets: [...lot.tickets, action.payload]}
                    : lot
            );
        case 'FETCH_CAR':
            return state.map(lot =>
                lot.id === action.payload.parkingLot
                    ? {...lot, tickets: lot.tickets.filter(ticket => ticket.plateNumber !== action.payload.plateNumber)}
                    : lot
            );
        default:
            return state;
    }
};