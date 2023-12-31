import React, { useState } from "react";
import FormAction from "../forms/admin/FormAction";
import FormCreateAction from "../forms/admin/FormCreateAction";

function DistrictModal({ action, children, create }) {
  const [body, setBody] = useState({});


  return (
    <>
      <div className="">
        <div
          className="cursor-pointer"
          onClick={() => document.getElementById("my_modal_3").showModal()}
        >
          {children}
        </div>
        <dialog id="my_modal_3" className="modal">
          <div className="modal-box">
            <form method="dialog">
              <button className="btn btn-sm btn-circle btn-ghost text-black absolute right-2 top-2">
                ✕
              </button>
            </form>
            <h3 className="font-bold text-2xl text-center text-black">
              Crear acción
            </h3>
            <FormCreateAction />
          </div>
        </dialog>
      </div>
    </>
  );
}

export default DistrictModal;
