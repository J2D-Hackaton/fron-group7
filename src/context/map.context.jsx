import { createContext, useState } from "react";


const MapContext = createContext({});


export const MapProvider = ({ children }) => {

    const [districtSelected, setDistrictSelected] = useState({})
    const contextData = {
        districtSelected,
        setDistrictSelected,
    };

    return (
        <MapContext.Provider value={contextData}>{children}</MapContext.Provider>
    );
};

export default MapContext