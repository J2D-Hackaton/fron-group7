import React, { useContext, useEffect, useState } from "react";
import AdminNavbar from "../../components/forms/admin/AdminNavbar";
import {
  AiFillEdit,
  AiOutlineDelete,
  AiOutlineInfoCircle,
  AiOutlineSearch,
} from "react-icons/ai";
import InputAutoCompleted from "../../components/InputAutoCompleted";
import DistrictModal from "../../components/modals/DistrictModal";
import Map from "../../components/mapa/Map";
import { actionsService } from "../../services/actions.service";
import MapContext from "../../context/map.context";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function AdminPage() {
  const navigate = useNavigate();
  const { districtSelected, setDistrictSelected } = useContext(MapContext);

  const [actions, setActions] = useState([]);

  async function getSingleAction() {
    setActions([]);
    if (districtSelected) {
      try {
        const { data } = await actionsService.show(
          districtSelected.code_borough
        );
        setActions(data.interventions);
      } catch (error) {}
    }
  }

  const isAdmin = () => {
    const user = JSON.parse(localStorage.getItem("user"));
    user?.token ? navigate("/admin") : navigate("/login");
  };

  useEffect(() => {
    isAdmin();
    getSingleAction();
  }, [districtSelected]);

  const handleDelete = async (action) => {};

  return (
    <div className="flex flex-col px-[5%] pb-8">
      <AdminNavbar />
      <div className=" pb-[8vh] h-[80vh]  mt-10 grid md:grid-cols-2 gap-16 ">
        <div className="flex flex-1 max-h-full flex-col gap-6 max-w-lg order-2 md:order-1">
          <InputAutoCompleted />
          <div className="flex flex-col gap-4 max-h-full overflow-y-auto items-center">
            {actions.length === 0 ? (
              <span className="loading loading-dots loading-sm"></span>
            ) : (
              actions.slice(0, 5).map((action, index) => (
                <div
                  key={index}
                  className="flex justify-between p-4 rounded-md items-center shadow-md border hover:text-white hover:bg-black transition-all cursor-pointer w-full"
                >
                  <h3>{action.title}</h3>
                  <div className=" flex gap-2 items-center">
                    <span
                      className={`text-sm font-bold capitalize ${
                        action.status === "ongoing"
                          ? "text-yellow-600"
                          : action.status === "finished"
                          ? "text-green-600"
                          : "text-red-600"
                      }`}
                    >
                      {action.status === "ongoing"
                        ? "En progreso"
                        : action.status === "finished"
                        ? "Finalizado"
                        : "Sin empezar"}
                    </span>
                    <DistrictModal action={action} key={index}>
                      <button className="p-2 border hover:scale-110 transition-all  hover:bg-white hover:text-black">
                        <AiOutlineInfoCircle />
                      </button>
                    </DistrictModal>
                    <button
                      className="p-2 border hover:scale-110 transition-all  hover:bg-white hover:text-black"
                      onClick={() => handleDelete()}
                    >
                      <AiOutlineDelete></AiOutlineDelete>
                    </button>
                  </div>
                </div>
              ))
            )}
            <DistrictModal create>
              <button className="btn btn-primary">
                Crear una nueva acción
              </button>
            </DistrictModal>
          </div>
        </div>
        <div className="rounded flex flex-col bg-neutral-content self-center order-1 md:order-2 min-h-[20rem] max-h-[25rem] overflow-hidden border-lg shadow-md cursor-pointer hover:scale-105 transition-all hover:-translate-y-5">
          <Map />
        </div>
      </div>
    </div>
  );
}

export default AdminPage;
