import React from "react";

function AdminNav() {

   
  return (
    <div>
      <div class="card p-3" bis_skin_checked="1">
        <nav class="nav nav-pills mx-auto">
          <a class="nav-link active" aria-current="page" href="/admin">
            Add Product
          </a>
          <a class="nav-link" href="/admin/deleteproduct/null">
            Delete Product
          </a>
          <a class="nav-link" href="#">
            New Feature
          </a>
          <a class="nav-link" href="#">
          New Feature
          </a>
          <a class="nav-link" href="#">
          New Feature
          </a>
        </nav>
      </div>
    </div>
  );
}

export default AdminNav;
