import React from 'react'

function ProductInfo({product}) {
  return (
    <section className="section-pagetop bg-light">
      <div className="container">
        <nav>
          <ol className="breadcrumb text-white">
            <li className="breadcrumb-item">
              <a href="/">Homepage</a>
            </li>
            <li className="breadcrumb-item">
              <a href="#">
               {product.category}
              </a>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              {product.productName}
            </li>
          </ol>
        </nav>
      </div>
    </section>
  )
}

export default ProductInfo