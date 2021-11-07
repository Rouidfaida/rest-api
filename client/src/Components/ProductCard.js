import React from 'react'
import { Card,Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { deleteProduct, getProduct } from '../redux/actionuser';
import EditProduct from './EditProduct';

const ProductCard = ({product}) => {
    const dispatch = useDispatch()
    return (
        <div>
            <Card style={{ width: '18rem' ,marginBottom:"80px",marginLeft:"20px",backgroundColor:"papayawhip"}}>
  <Card.Body>
<avatar style={{color:"blue", fontStyle:"italic",fontSize:"20px",fontWeight:"400px"}}>{product.name[0]}</avatar>
    <Card.Text>
    {product.name}
   
           
    </Card.Text>
    <Card.Text>
    {product.price}
    </Card.Text>
    <Card.Text>{product.quantite}</Card.Text>
           <hr/>
     <Button variant="primary"onClick={()=>{dispatch(deleteProduct(product._id));dispatch(getProduct())}}>delete</Button> 
  </Card.Body>
<EditProduct product={product}/>
</Card>
        </div>
    )
}

export default ProductCard
