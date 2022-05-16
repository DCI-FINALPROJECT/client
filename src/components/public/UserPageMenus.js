import React from "react";
import { logout } from "../helpers/logout";

function UserPageMenus({whichComponent,setWhichComponent}) {
  return (
    <aside className="col-lg-3">
      <div className="card p-3 h-100">
        <nav className="nav flex-column nav-pills">
          <span onClick={()=>setWhichComponent(1)} className={`nav-link ${whichComponent === 1 && "active"}`}  style={{cursor:"pointer"}}>
            My Profile
          </span>          
          <span onClick={()=>setWhichComponent(2)} className={`nav-link ${whichComponent === 2 && "active"}`}  style={{cursor:"pointer"}} >
            Active Orders
          </span>
          <span onClick={()=>setWhichComponent(3)} className={`nav-link ${whichComponent === 3 && "active"}`}  style={{cursor:"pointer"}}>
            Order History
          </span>
          <span onClick={logout} className="nav-link"  style={{cursor:"pointer"}}>
            Log Out
          </span>
        </nav>
      </div>
    </aside>
  );
}

export default UserPageMenus;
