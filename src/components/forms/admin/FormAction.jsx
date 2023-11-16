import React, { useState } from "react";

function FormAction({ className ,action}) {


  const [body, setbody] = useState({
    title: action?.title
  })
  return (
    <form className={`w-full ${className}`}>
      <h2 className="text-lg  text-center text-black">Administrar accion</h2>
      <div className="form-control w-full max-w-full text-black">
        <div className="form-control w-full max-w-full text-black">
          <label className="label">
            <span className="label-text">Titulo:</span>
          </label>
          <input
            type="text"
            placeholder="Titulo"
            value={body?.title}
            onChange={(e) => setbody({...body, title: e.target.value})}
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
        <button className="btn btn-primary hover:scale-105 transition-all mt-4 self-center">Actualizar</button>
      </div>
    </form>
  );
}

export default FormAction;
