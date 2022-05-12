import React, { useState } from 'react'

function GiftCard() {

    const giftCard = [
        {name:"GC20", amount:20},
        {name:"GC25", amount:25},
        {name:"GC50", amount:50},
        {name:"GC100", amount:100}
    ]
  return (
    <div className='d-flex flex-wrap justify-content-center align-items-center m-5 '>

        {giftCard.map((card)=>{
            return(

                <div className=" card-product-grid m-3">
                
                    <div className="img-wrap" style={{height:"170px"}} >
                      <img src={"https://beerginvino.com/wp-content/uploads/2021/11/giftcard-1.jpg"} style={{height:"170px"}} />
                    </div>
                    <div className="info-wrap">
                        <h4 className='card-title'> Gift Card</h4>
                        <h5 className="text-muted">{card.name}</h5>
                      <div className="price-wrap">
                        <strong className="price text-muted">Card Amount: {card.amount} €</strong>
                      </div>
                      <div className="d-flex justify-content-center mt-4">
                        <a href="#" className="btn btn-yellow">
                          Add to cart
                        </a>
                        
                      </div>
                    </div>
                  </div>
            )
        })}

        
    </div>
  )
}

export default GiftCard