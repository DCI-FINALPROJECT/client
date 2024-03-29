import React from "react";
import { useParams } from "react-router-dom";

function AdminNav() {
  const path = window.location.pathname;
  const id = useParams().id;
  const prName = useParams().productName;

  return (
    <div>
      <div class="card p-3" bis_skin_checked="1">
        <nav class="nav nav-pills mx-auto">
          <a
            class={
              path === "/admin/addproduct" ? "nav-link active" : "nav-link"
            }
            aria-current="page"
            href="/admin/addproduct"
          >
            Add Product
          </a>
          <a
            class={
              path === `/admin/edit/${id}` ||
              path === `/admin/deleteproduct/${prName}`
                ? "nav-link active"
                : "nav-link"
            }
            href="/admin/deleteproduct/null"
          >
            Edit or Delete Product
          </a>
          <a
            class={
              path === `/admin/populerproducts`
                ? "nav-link active"
                : "nav-link"
            }
            href="/admin/populerproducts"
          >
            Populer Products
          </a>
          <a
            class={
              path === `/admin/couponCreate` ? "nav-link active" : "nav-link"
            }
            href="/admin/couponCreate"
          >
            Create Coupon
          </a>
          <a class={
              path === `/admin/category` 
                ? "nav-link active"
                : "nav-link"
            }
            href="/admin/category">
            Category
          </a>
          <a class={
              path === `/admin/userlist` 
                ? "nav-link active"
                : "nav-link"
            } href="/admin/userlist">
            Make Admin
          </a>
          <a class={
              path === `/admin/neworders` 
                ? "nav-link active"
                : "nav-link"
            } href="/admin/neworders">
            New Orders
          </a>
        </nav>
      </div>
    </div>
  );
}

export default AdminNav;
