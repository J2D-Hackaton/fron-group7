import { useContext, useState } from "react";
import { DetailsDistric } from "../components/DetailsDistric";
import { ListInpertretationMap } from "../components/ListInpertretationMap";
import Map from "../components/mapa/Map";
import MapContext from "../context/map.context";

export const MapUser = () => {

  const { actions, districtSelected, showDetails } = useContext(MapContext)
  
  
  return (
    <>
      <section id="mapuser">
        <h2 className="font-semibold text-center text-5xl mt-24">Proyectos en desarrollo <span className="text-green-600 uppercase underline underline-offset-4 font-bold">Barcelona</span></h2>
        <div className="w-[80%] p-20 mx-auto flex gap-8 flex-col lg:flex-row justify-around">
          <Map />
          <ListInpertretationMap />
        </div>
        {
          showDetails && <DetailsDistric actions={ actions } name={ districtSelected.name_district }/>
        }
      </section>
    </>
  )
}
