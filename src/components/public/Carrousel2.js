import React,{useState,useEffect} from 'react'
import ProductCardCarrousel from './ProductCardCarrousel';
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

function Carrousel2() {

  const [allProducts,setAllProducts] = useState([]);

  const getAllProducts = async ()=>{


    fetch("http://localhost:5000/products/bestSellers").then(data=>data.json()).then(data=>setAllProducts(data)) 

  }

  useEffect(()=>{

    getAllProducts();

  },[])


 
  const sliderSettings = {
    dots:true,
    slidesToShow: 5,
    slidesToScroll:5,
    infinite: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
         slidesToShow: 2,
         slidesToScroll:2,
        }
      },
      {
        breakpoint: 600,
        settings: {
         dots: false,
         slidesToShow: 1,
         slidesToScroll:1,
        }
       }
    ]
  }
  
  return (
      <div className='container px-5'>
        <h2 className="home-title">Best Sellers</h2>
      <Slider {...sliderSettings}>

      {
        allProducts.map(product=>{
          return(
           <ProductCardCarrousel
           
           key={product._id}
           product={product}

            />

          )
        })
      }
        
       
      </Slider>
        
    </div>
  )
}

export default Carrousel2;