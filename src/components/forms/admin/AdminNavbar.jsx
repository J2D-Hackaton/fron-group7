import React from "react";


function AdminNavbar() {
  return (
    <div className="flex items-center py-2 md:py-4 min-h-16 w-full bg-base-100bg-base-100 justify-between">
      <a className="btn btn-ghost text-xl">daisyUI</a>
      <ul className="flex flex-row gap-4">
        <li>
        <button className="btn btn-outline btn-error">Cerrar sesión</button>
        </li>
      </ul>
    </div>
  );
}

export default AdminNavbar;
