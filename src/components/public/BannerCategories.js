import React from 'react'

function BannerCategories() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-4">
          <div className="card-banner">
            <div className="card-body img-banner" style={{height: "250px"}}> </div>
            <div className="text-bottom"><h5 className="title">Camera Drones</h5></div>
          </div>

        </div>
        <div className="col-md-4">

          <div className="card-banner img-banner" style={{height: "250px"}}>
            <article className="caption bottom">
              <h5 className="card-title">Watches</h5>
              <p>No matter how far along you are in your sophistication as an amateur.</p>
            </article>
          </div>

        </div>
        <div className="col-md-4">

          <div className="card-banner align-items-end img-banner" style={{height: "250px"}}>
            <article className="caption m-4 w-100">
              <h5 className="card-title">Camera & Photo</h5>
              <p>No matter how far along you are in your sophistication as an amateur.</p>
            </article>
          </div>

        </div>
      </div>
    </div >
  )
}

export default BannerCategories;