import React, { useContext, useEffect, useState } from "react";
import { set, useForm } from "react-hook-form";
import actionService from "../../../services/actions.service";
import MapContext from "../../../context/map.context";

function FormAction({ className, action }) {
  const { register, handleSubmit, setValue } = useForm();
  const { actions, setActions } = useContext(MapContext);

  useEffect(() => {
    if (action) {
      setValue("title", action.title);
      setValue("description", action.description);
      setValue("status", action.status);
    }
  }, [action, setValue]);

  const onSubmit = async (dataForm) => {
    console.log("Data del formulario:", dataForm);
    const currentActions = [...actions]; 

    const existingActionIndex = currentActions.findIndex(
      (existingAction) => existingAction.id === action.id
    );

    if (existingActionIndex !== -1) {
      currentActions[existingActionIndex] = { ...dataForm, id: action.id };
    } else {
      currentActions.unshift(dataForm);
    }

    setActions(currentActions);

    setValue("title", "");
    setValue("description", "");
    setValue("status", "");
  };


  return (
    <form className={`w-full ${className}`} onSubmit={handleSubmit(onSubmit)}>
      <h2 className="text-lg font-bold text-center text-black">Modificar acción</h2>
      <div className="form-control w-full max-w-full text-black">
        <div className="form-control w-full max-w-full text-black">
          <label className="label">
            <span className="label-text">Titulo:</span>
          </label>
          <input
            type="text"
            placeholder="Titulo"
            className="input input-bordered w-full max-w-full"
            {...register("title")}
          />
        </div>
        <div className="form-control w-full max-w-full text-black">
          <label className="label">
            <span className="label-text">Descripción:</span>
          </label>
          <textarea
            placeholder="Descripción"
            className="textarea textarea-bordered w-full max-w-full"
            {...register("description")}
          ></textarea>
        </div>
        <div className="form-control w-full max-w-full text-black">
          <label className="label">
            <span className="label-text">Estatus:</span>
          </label>
          <select className="select select-bordered" {...register("status")}>
            <option selected value="ongoing">En progreso</option>
            <option value="Por iniciar">Por Empezar</option>
            <option value="Finished">Finalizado</option>
          </select>
        </div>
        <button
          type="submit"
          className="btn btn-primary hover:scale-105 transition-all mt-4 self-center"
        >
          Modificar
        </button>
      </div>
    </form>
  );
}

export default FormAction;
