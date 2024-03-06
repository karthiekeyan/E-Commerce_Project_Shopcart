import React, { useContext } from 'react'
import { Context } from '../Context/Context'
import { useParams } from 'react-router-dom';
import CartProduct from '../CartProduct/CartProduct';
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay';
import DescriptionBox from '../Components/DescriptionBox/DescriptionBox';
import RelatedProducts from '../Components/RelatedProducts/RelatedProducts';



const Product = () => {
  const {all_Product}= useContext(Context);
  const {productId} = useParams();
  const product = all_Product.find((e) => e.id === Number(productId));
  return (
    <div>
      <CartProduct product ={product} />
       <ProductDisplay product={product}/> 
       <DescriptionBox />
       <RelatedProducts />
    </div>
  )
}

export default Product