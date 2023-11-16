import { useState } from "react";
import { DetailsDistric } from "../components/DetailsDistric";
import { ListInpertretationMap } from "../components/ListInpertretationMap";
import BcnMap from "../components/MapBcn";

// const image = 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Mapa_de_Espa%C3%B1a_-_Constituci%C3%B3n_de_1873.svg/2441px-Mapa_de_Espa%C3%B1a_-_Constituci%C3%B3n_de_1873.svg.png'

export const MapUser = () => {

  const [showDetails, setShowDetails] = useState(false);

  const onShowDist = () => {
    setShowDetails(true)
  }

  return (
    <>
      <section id="mapuser">
        <h2 className="font-mono text-center text-4xl mt-5">Proyectos en desarrollo en Barcelona</h2>
        <div className="w-[80%] p-20 mx-auto flex gap-8 flex-col lg:flex-row justify-around">
          <BcnMap onClick={ onShowDist} />
          <ListInpertretationMap />
        </div>
        {
          (showDetails) && <DetailsDistric district={''} />
        }
      </section>
    </>
  )
}
