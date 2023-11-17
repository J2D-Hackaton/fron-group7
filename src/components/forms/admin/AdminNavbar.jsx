import React from "react";
import Logo from '../../../media/logoNG.png'


function AdminNavbar() {

  const handleLogout = () => {
    localStorage.removeItem("user");
    window.location.reload();
  }
  
  return (
    <div className="flex items-center py-2 md:py-4 min-h-16 w-full bg-base-100bg-base-100 justify-between">
      <a href="/"><img src={Logo} width="150px" alt="aquacivis" /></a>
      <ul className="flex flex-row gap-4">
        <li>
        <button className="btn btn-outline btn-error" onClick={() => handleLogout()}>Cerrar sesión</button>
        </li>
      </ul>
    </div>
  );
}

export default AdminNavbar;
