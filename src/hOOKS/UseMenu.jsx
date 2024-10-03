import React, { useEffect, useState } from 'react';

const UseMenu = () => {
    const [menu,setmenu] = useState([]);
   const[Loading,SetLoading]=useState(true)
  useEffect(()=>{
   fetch('http://localhost:3456/menu')
  .then(res=>res.json())
  .then(data=>setmenu(data))
  },[])

    return[menu]

};

export default UseMenu;