import React,{useState,useEffect} from 'react'
import ProductCardCarrousel from './ProductCardCarrousel';
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

function Carrousel1() {

  const [allProducts,setAllProducts] = useState([]);

  console.log(allProducts);


  const getAllProducts = async ()=>{


    fetch("http://localhost:5000/products/all").then(data=>data.json()).then(data=>setAllProducts(data)) 

  }

  useEffect(()=>{

    getAllProducts();

  },[])


 
  const sliderSettings = {
    dots:true,
    slidesToShow: 4,
    slidesToScroll:4,
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
         arrows: false,
         slidesToShow: 1,
         slidesToScroll:1,
        }
       }
    ]
  }
  
  return (
      <div className=''>
        <h6 className="home-title">Neu und Bestseller</h6>
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

export default Carrousel1;