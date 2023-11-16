import React from "react";
import FormAction from "../forms/admin/FormAction";

function DistrictModal({ action, children}) {
  return (
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
          <h3 className="font-bold text-2xl text-center text-black"> {action?.title}</h3>
          <FormAction/>
        </div>
      </dialog>
    </div>
  );
}

export default DistrictModal;
