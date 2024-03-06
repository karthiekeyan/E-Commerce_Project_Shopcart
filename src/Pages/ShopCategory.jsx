import React, { useContext } from 'react'
import './CSS/ShopCategory.css';
import dropdown_icon from '../Components/Assets/dropdown_icon.png';
import Item from '../Components/Item/Item';
import { Context } from '../Context/Context';




const ShopCategory = (props) => {
    const {all_Product} = useContext(Context);


  return (
    <div className='shop-category'>
        <img className='shopcategory-banner' src={props.banner} alt=''/>
        <div className="shopcategory-indexsort">
            <p>
                <span>Showing 1-12 --</span> 
                 Out of 36 Products
            </p> 
            <div className="shopcategory-sort">
                Sort By <img src={dropdown_icon} alt='' />
            </div>  
        </div>
        
        <div className="shopcategory-products">
            {all_Product.map((item,i)=>{
                if(props.category===item.category){
                    return<Item key ={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price ={item.old_price}></Item>

                }
                else{
                    return null;
                }
            })}
        </div>
        <div className="shopcategory-loadmore">
            Explore More
        </div>
    </div>
  )
}

export default ShopCategory