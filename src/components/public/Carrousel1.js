import React,{useState,useEffect} from 'react'
import ProductCardCarrousel from './ProductCardCarrousel';
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

function Carrousel1() {

  const [newProducts,setNewProducts] = useState([]);

  console.log(newProducts);

  const getNewProducts = async ()=>{


    fetch("http://localhost:5000/products/newProducts").then(data=>data.json()).then(data=>setNewProducts(data)) 

  }

  useEffect(()=>{

    getNewProducts();

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
         slidesToShow: 3,
         slidesToScroll:3,
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
        <h2 className="home-title">New Products</h2>
      <Slider {...sliderSettings}>

      {
        newProducts.map(product=>{
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

export default Carrousel1;