import React from "react";
import { useParams } from "react-router-dom";

function AdminNav() {

  const path = window.location.pathname
  const id =useParams().id
  const prName = useParams().productName

  return (
    <div>
      <div class="card p-3" bis_skin_checked="1">
        <nav class="nav nav-pills mx-auto">
          <a class={path==="/admin"?"nav-link active":"nav-link"} aria-current="page" href="/admin">
            Add Product
          </a>
          <a class={path===`/admin/edit/${id}`||path===`/admin/deleteproduct/${prName}`?"nav-link active":"nav-link"} href="/admin/deleteproduct/null">
           Edit or Delete Product
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
