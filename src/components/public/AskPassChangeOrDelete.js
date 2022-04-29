import React from "react";

function AskPassChangeOrDelete({setIsPassChangeAktiv}) {
  return (
    <div class="row" style={{ maxWidth: "920px" }}>
      <div class="col-md">
        <article class="box mb-3 bg-light">
          <button class="btn float-end btn-light btn-sm" onClick={()=>{setIsPassChangeAktiv(true)}} href="#">
            Change
          </button>
          <p class="title mb-0">Password</p>
          <small class="text-muted d-block" style={{ width: "70%" }}>
            You can reset or change your password by clicking here
          </small>
        </article>
      </div>
      <div class="col-md">
        <article class="box mb-3 bg-light">
          <a class="btn float-end btn-outline-danger btn-sm" href="#">
            Deactivate
          </a>
          <p class="title mb-0">Remove account</p>
          <small class="text-muted d-block" style={{ width: "70%" }}>
            Once you delete your account, there is no going back.
          </small>
        </article>
      </div>
    </div>
  );
}

export default AskPassChangeOrDelete;
