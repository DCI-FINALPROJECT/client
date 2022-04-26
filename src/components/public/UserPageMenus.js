import React from "react";
import { logout } from "../helpers/logout";

function UserPageMenus({whichComponent,setWhichComponent}) {
  return (
    <aside className="col-lg-3">
      <div className="card p-3 h-100">
        <nav className="nav flex-column nav-pills">
          <span onClick={()=>setWhichComponent(1)} className={`nav-link ${whichComponent === 1 && "active"}`} >
            My Profile
          </span>          
          <span onClick={()=>setWhichComponent(2)} className={`nav-link ${whichComponent === 2 && "active"}`} >
            Active Orders
          </span>
          <span onClick={()=>setWhichComponent(3)} className={`nav-link ${whichComponent === 3 && "active"}`} >
            Order History
          </span>
          <span onClick={logout} className="nav-link">
            Log Out
          </span>
        </nav>
      </div>
    </aside>
  );
}

export default UserPageMenus;
