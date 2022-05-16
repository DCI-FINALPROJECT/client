import React from "react";

function NotAuthorize() {
  return (
    <div className="d-flex justify-content-center align-items-center" style={{height:"300px", width:"100%"}}>
      <div
        className="d-flex align-items-center auth"
        
      >
        <h2 className="ml-sm-5"> You are not authorized!</h2>
      </div>
    </div>
  );
}

export default NotAuthorize;
