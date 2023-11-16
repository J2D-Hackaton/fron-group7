import React, { useState } from "react";
import AdminNavbar from "../../components/forms/admin/AdminNavbar";
import { AiFillEdit, AiOutlineDelete, AiOutlineInfoCircle, AiOutlineSearch } from "react-icons/ai";
import InputAutoCompleted from "../../components/InputAutoCompleted";
import DistrictModal from "../../components/modals/DistrictModal";
import Map from "../../components/mapa/Map";

const actions = [
  {
    title: "Reforestación de Sant Pau",
    description:
      "Proyecto para plantar árboles y mejorar la vegetación en la zona de Sant Pau, Barcelona.",
    status: "en proceso",
  },
  {
    title: "Desarrollar nueva función",
    description: "Implementar una nueva característica en la aplicación.",
    status: "en proceso",
  },
  {
    title: "Planificar reunión de equipo",
    description:
      "Coordinar una reunión para discutir el progreso del proyecto.",
    status: "por iniciar",
  },
  {
    title: "Realizar pruebas de calidad",
    description:
      "Evaluar y validar la calidad del software antes del lanzamiento.",
    status: "finalizado",
  },
  {
    title: "Optimizar rendimiento del sistema",
    description: "Mejorar la eficiencia y velocidad del sistema.",
    status: "en proceso",
  },
  {
    title: "Diseñar interfaz de usuario",
    description:
      "Crear un diseño atractivo y funcional para la interfaz de usuario.",
    status: "por iniciar",
  },
  {
    title: "Actualizar documentación",
    description: "Revisar y actualizar la documentación del proyecto.",
    status: "finalizado",
  },
];

function AdminPage() {
  return (
    <div className="flex flex-col px-[5%] pb-8">
      <AdminNavbar />
      <div className=" pb-[8vh] h-[80vh]  mt-10 grid md:grid-cols-2 gap-16 ">
        <div className="flex flex-1 max-h-full flex-col gap-6 max-w-lg order-2 md:order-1">
          <InputAutoCompleted />
          <div className="flex flex-col gap-4 max-h-full overflow-y-auto items-center">
            {actions.slice(0,5).map((action, index) => (
              <div
                key={index}
                className="flex justify-between p-4 rounded-md items-center shadow-md border hover:text-white hover:bg-black transition-all cursor-pointer w-full"
              >
                <h3>{action.title}</h3>
                <div className=" flex gap-2 items-center">

                <span
                  className={`text-sm font-bold capitalize ${
                    action.status === "en proceso"
                      ? "text-yellow-600"
                      : action.status === "finalizado"
                      ? "text-green-600"
                      : "text-red-600"
                  }`}
                >
                  {action.status}
                </span>
                <DistrictModal action={action} key={index}>
                  <button className="p-2 border hover:scale-110 transition-all  hover:bg-white hover:text-black">
                  <AiOutlineInfoCircle />
                  </button>
                </DistrictModal>
                  <button className="p-2 border hover:scale-110 transition-all  hover:bg-white hover:text-black">
                  <AiOutlineDelete ></AiOutlineDelete>
                  </button>
                </div>
              </div>
            ))}
            <div className="join grid grid-cols-2">
              <button className="join-item btn btn-outline">
                Pagina anterior
              </button>
              <button className="join-item btn btn-outline">Siguiente</button>
            </div>
          </div>
        </div>
        {/* <FormZone className={"max-w-lg order-2 md:order-1"} /> */}
        <div className="rounded  bg-neutral-content self-center order-1 md:order-2 min-h-[20rem] max-h-[25rem] overflow-hidden border-lg shadow-md cursor-pointer hover:scale-105 transition-all hover:-translate-y-5">
          <Map/>
        </div>
      </div>
    </div>
  );
}

export default AdminPage;
