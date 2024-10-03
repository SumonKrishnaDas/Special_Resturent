import React from 'react';
import FoodCart from '../FoodCart';
const OrderBox = ({items}) => {
   return (
     <div className='grid md:grid-cols-3 gap-4'>
        {
        items.map(item=><FoodCart
        key={item._id}
        item={item}
        
        > </FoodCart>)
        }
         </div>
        
    );
};

export default OrderBox;