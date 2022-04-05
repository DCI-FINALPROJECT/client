import React, { useContext, useEffect } from 'react'
import { DataStore } from '../../DataStore';
import Footer from '../public/Footer'
import Header from '../public/Header'
import { useParams } from 'react-router-dom';

function SearchPage() {

    const {searchState, productByName, setProductByName} = useContext(DataStore);

const params = useParams();

const productName = params.productName;

console.log('params',params);


function getProductByName(){

    const findingProduct = fetch(`http://localhost:5000/product/search/${productName}`).then(data=>data.json()).then(data=>console.log("sasaas",data))
}

console.log('finding', productByName);

useEffect(()=>{

  getProductByName();

},[productName])

  return (
    <div>
        <Header/>
        <Footer/>
    </div>
  )
}

export default SearchPage