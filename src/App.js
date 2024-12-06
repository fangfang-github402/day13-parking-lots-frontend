import './App.css';
import ParkingApp from "./component/ParkingApp";
import {createContext, useReducer} from "react";
import {lotsReducer} from "./context/lotsReducer";

export const LotsContext = createContext();

function App() {
    const [state, dispatch] = useReducer(lotsReducer, []);
    return (
        <LotsContext.Provider value={{state, dispatch}}>
            <div className="App">
                <ParkingApp/>
            </div>
        </LotsContext.Provider>
    );
}

export default App;
