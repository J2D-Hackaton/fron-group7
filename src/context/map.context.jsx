import { createContext, useState } from "react";


const MapContext = createContext({});


export const MapProvider = ({ children }) => {

    const [showDetails, setShowDetails] = useState(false);
    const [districtSelected, setDistrictSelected] = useState({});
    const [actions, setActions] = useState([]);

    const contextData = {
        districtSelected,
        setDistrictSelected,
        setShowDetails,
        showDetails,
        actions, 
        setActions
    };

    return (
        <MapContext.Provider value={contextData}>{children}</MapContext.Provider>
    );
};

export default MapContext