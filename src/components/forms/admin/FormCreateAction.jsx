import React from "react";
import { useForm } from "react-hook-form";
import actionService from "../../../services/actions.service";

function FormCreateAction({ className }) {

  const {register, handleSubmit} = useForm()

  const onSubmit = async (dataForm) => {
      try {
          const { data } = await actionService.create(dataForm);
          
      } catch (error) {
          console.log(error)
         
      }
  };


  return (
    <form className={`w-full ${className}`}>
      <h2 className="text-lg  text-center text-black">Crear Acción</h2>
      <div className="form-control w-full max-w-full text-black">
        <div className="form-control w-full max-w-full text-black">
          <label className="label">
            <span className="label-text">Titulo:</span>
          </label>
          <input
            type="text"
            placeholder="Titulo"
            className="input input-bordered w-full max-w-full"
          />
        </div>
        <div className="form-control w-full max-w-full text-black">
          <label className="label">
            <span className="label-text">Descripción:</span>
          </label>
          <textarea
            placeholder="Descripción"
            className="textarea textarea-bordered w-full max-w-full"
          ></textarea>
        </div>
        <div className="form-control w-full max-w-full text-black">
          <label className="label">
            <span className="label-text">Estatus:</span>
          </label>
          <select className="select select-bordered">
            <option selected>En progreso</option>
            <option>Por iniciar</option>
            <option>Finalizar</option>
          </select>
        </div>
        <div className="form-control w-full max-w-full text-black">
          <label className="label">
            <span className="label-text">Dirección:</span>
          </label>
          <input
            type="text"
            placeholder="Dirección"
            className="input input-bordered w-full max-w-full"
          />
        </div>
        <div className="form-control w-full max-w-full">
          <label className="label">
            <span className="label-text">Fecha de inicio:</span>
          </label>
          <input
            type="date"
            placeholder="Fecha"
            className="input input-bordered w-full max-w-full"
          />
        </div>
        <div className="form-control w-full max-w-full">
          <label className="label">
            <span className="label-text">Fecha de finalización:</span>
          </label>
          <input
            type="date"
            placeholder="Fecha"
            className="input input-bordered w-full max-w-full"
          />
        </div>
        <button className="btn btn-primary hover:scale-105 transition-all mt-4 self-center">Crear </button>
      </div>
    </form>
  );
}

export default FormCreateAction;
