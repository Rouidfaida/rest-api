import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProduct } from '../redux/actionuser'
import ProductCard from './ProductCard'

const ProductList = () => {
    const {products,loading} = useSelector(state => state.allproduct)
const dispatch = useDispatch()
useEffect(() => {
  dispatch(getProduct())
    
}, [])
    return (
        <div style={{marginLeft:"300px",marginRight:"100px" ,marginTop:"50px", display:"flex",flexWrap:"wrap"}}>
        {
            loading?<h1>loading...</h1>:
            products.map((product,i)=><ProductCard product={product} key={i}/>)
        }
        </div>
    )
}

export default ProductList
