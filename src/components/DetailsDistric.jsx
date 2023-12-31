import { useContext } from "react";
import MapContext from "../context/map.context";
import { IconClose } from "../components/icons/IconClose";

export const DetailsDistric = ({ actions = [], name }) => {
  const { setShowDetails, setDistrictSelected } = useContext(MapContext);

  const handleClose = () => {
    setShowDetails(false);
    setDistrictSelected(null);
  };

  return (
    <div className="overflow-x-auto w-full md:w-fit m-8 mx-auto">
      <div className="flex justify-end text-red-500">
        <button className="3xl" onClick={handleClose}>
          <IconClose />
        </button>
      </div>

      <div className="table-container overflow-x-auto mx-auto">
        <table className="table text-md border-collapse">
          <thead>
            <tr className="text-lg">
              <th></th>
              <th>Distrito</th>
              <th>Actuacion</th>
              <th>Fecha de inicio</th>
              <th>Fecha de fin</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {actions.map((action) => (
              <tr key={action.barrio_id}>
                <td>{action.id}</td>
                <td>{name}</td>
                <td>{action.title}</td>
                <td>{action.startDate}</td>
                <td>{action.endDate}</td>
                <td>{action.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
