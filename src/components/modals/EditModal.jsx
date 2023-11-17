import React, { useState } from "react";
import FormAction from "../forms/admin/FormAction";

function EditModal({ action, children, create }) {


  return (
    <>
      <div className="">
        <div
          className="cursor-pointer"
          onClick={() => document.getElementById("my_modal_4").showModal()}
        >
          {children}
        </div>
        <dialog id="my_modal_4" className="modal">
          <div className="modal-box">
            <form method="dialog">
              <button className="btn btn-sm btn-circle btn-ghost text-black absolute right-2 top-2">
                ✕
              </button>
            </form>
            
            <FormAction action={action}/>
          </div>
        </dialog>
      </div>
    </>
  );
}

export default EditModal;
