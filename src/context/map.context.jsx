import { createContext, useEffect, useState } from "react";
import { districtService } from "../services/disctricts.service";

const MapContext = createContext({});

export const MapProvider = ({ children }) => {
  const [districtslist, setDistrictslist] = useState([]);
  const [districtSelected, setDistrictSelected] = useState(null);

  const [showDetails, setShowDetails] = useState(false);
  const [actions, setActions] = useState([]);

  const contextData = {
    districtSelected,
    setDistrictSelected,
    setShowDetails,
    showDetails,
    actions,
    setActions,
  };

  // const getDistricts = async () => {
  //   try {
  //     if (districtslist.length === 0) {
  //       const { data } = await districtService.index();
  //       setDistrictslist(data);
  //     } else {
  //       console.log("Data already cached:", districtslist);
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  useEffect(() => {
    // getDistricts();
  }, [districtslist]); 

  return (
    <MapContext.Provider value={contextData}>{children}</MapContext.Provider>
  );
};

export default MapContext;
