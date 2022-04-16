import React,{useState,useEffect,useContext} from 'react'
import ProductCardCarrousel from './ProductCardCarrousel';
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { DataStore } from '../../DataStore';
import { useParams } from 'react-router-dom';

function SimilarProducts() {  

  const {productById,setProductById,clicked} = useContext(DataStore);

  const params = useParams();

  const id = params.id;

  const [selectedCategoryProducts,setSelectedCategoryProducts] = useState([]);

 
  const getProductById = async ()=>{

    await fetch(`http://localhost:5000/product/${id}`)
    .then((data) => data.json())
    .then((data) => setProductById(data));

  }


  const similar = async()=>{


    await fetch(`http://localhost:5000/product/similar/${productById.category}/${id}/${productById.productName}`).then(data=>data.json()).then(data=>setSelectedCategoryProducts(data)) 
  }

  useEffect(()=>{
    getProductById();  
  },[clicked])


  useEffect(()=>{
    similar();
  },[productById])


 
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
         arrows: false,
         slidesToShow: 1,
         slidesToScroll:1,
        }
       }
    ]
  }

  
  return (
      <div className='container'>
        <h6 className="home-title"></h6>
      <Slider {...sliderSettings}>

      {

        
        selectedCategoryProducts.map(product=>{
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

export default SimilarProducts;