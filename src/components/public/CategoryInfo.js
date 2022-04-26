import React from "react";
import { useParams } from "react-router-dom";

function CategoryInfo() {

  const params = useParams();


  return (
    <section className="section-pagetop bg-light " style={{padding:"10px 0", borderRadius:"5px"}}>
      <div className="container">
      <i class="fa-solid fa-house"></i>
        <nav >
          <ol className="breadcrumb text-white">
            <li className="breadcrumb-item">
              <a href="/"><i className="fa fa-lg fa-home"></i> Homepage</a>
            </li>
            <li className="breadcrumb-item">
              <span className="text-dark">Category</span>
            </li>
            <li className="breadcrumb-item">
              <span className="text-dark">{ params.category.includes("&") ? "Filtered Category" : params.category.substring(0,1).toUpperCase()+params.category.substring(1).toLowerCase()}</span>
            </li>
          
          </ol>
        </nav>
      </div>
    </section>
  );
}

export default CategoryInfo;
