import React from 'react'

function ProductDescription() {
  return (
    <div>

        {/* Product Beschreibung */}
      <div style={{maxWidth: "50rem"}}>
        <div class="card" bis_skin_checked="1">
          <header class="card-header">
            <ul class="nav nav-tabs card-header-tabs">
              <li class="nav-item">
                <a href="/" class="nav-link active" aria-current="true">
                  Specification
                </a>
              </li>
              <li class="nav-item">
                <a href="/" class="nav-link">
                  Reviews
                </a>
              </li>
              <li class="nav-item">
                <a href="/" class="nav-link">
                  Shipping info
                </a>
              </li>
              <li class="nav-item">
                <a href="/" class="nav-link">
                  Seller profile
                </a>
              </li>
            </ul>
          </header>
          <article class="card-body">
            <p>
              With supporting text below as a natural lead-in to additional
              content. Lorem ipsum dolor sit amet, consectetur adipisicing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </p>
            <ul class="list-check cols-two">
              <li>Some great feature name here </li>
              <li>Lorem ipsum dolor sit amet, consectetur </li>
              <li>Duis aute irure dolor in reprehenderit </li>
              <li>Optical heart sensor </li> <li>Easy fast and ver good </li>
              <li>Some great feature name here </li>
              <li>Modern style and design</li>
            </ul>
            <hr />
            <dl class="row">
              <dt class="col-sm-3">Display</dt>
              <dd class="col-sm-9">13.3-inch LED-backlit display with IPS</dd>
              <dt class="col-sm-3">Processor</dt>
              <dd class="col-sm-9">2.3GHz dual-core Intel Core i5</dd>
              <dt class="col-sm-3">Camera</dt>
              <dd class="col-sm-9">720p FaceTime HD camera</dd>
              <dt class="col-sm-3">Memory</dt>
              <dd class="col-sm-9">8 GB RAM or 16 GB RAM</dd>
              <dt class="col-sm-3">Graphics</dt>
              <dd class="col-sm-9">Intel Iris Plus Graphics 640</dd>
            </dl>
          </article>
        </div>
      </div>

    </div>
  )
}

export default ProductDescription