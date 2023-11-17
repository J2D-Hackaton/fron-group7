import { createContext, useEffect, useState } from "react";
import { districtService } from "../services/disctricts.service";

const MapContext = createContext({});

export const MapProvider = ({ children }) => {
  const [districtslist, setDistrictslist] = useState([]);
  const [districtSelected, setDistrictSelected] = useState(null);

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

export default MapContext;
