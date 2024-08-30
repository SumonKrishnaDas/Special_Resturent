import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../../assets/Components/SectionTitle';
import MenuItem from '../../Shared/MenuItem';

const PopularMenu = () => {

  const [menu,setmenu] = useState([]);
  useEffect(()=>{

fetch('menu.json')
.then(res=>res.json())
.then(data=>{
  const popularitems = data.filter(item=>item.category==='popular');
  setmenu(popularitems)
})

  },[])


    return (
        <section>


<SectionTitle heading="from our menu"  subheading="popular items"   > 


</SectionTitle>


<div className='grid md:grid-cols-2 gap-4'>


{

  menu.map(item=> <MenuItem key= {item._id} item={item} > </MenuItem>)
}

</div>
            
        </section>
    );
};

export default PopularMenu;