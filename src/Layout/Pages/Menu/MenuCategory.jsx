import React from 'react';
import MenuItem from '../Shared/MenuItem';
import Cover from '../Shared/Cover/Cover';
import { Link } from 'react-router-dom';




const MenuCategory = ({items,title,coverImg}) => {
    return (
        <div>
<Cover  img={coverImg}  title={title}>       </Cover>
<div className='grid md:grid-cols-2 gap-4'>
{
  items.map(item=> <MenuItem key= {item._id} item={item}> </MenuItem>)
}
</div>     

<div>    
     <Link to={`/order/${title}`}><button className='btn btn-outline border-b-4  border-0'>order your favrite  food</button></Link> </div>
    </div>
    );
};
export default MenuCategory;