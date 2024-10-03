import React from 'react';
import { Helmet } from 'react-helmet-async';
import Cover from '../Shared/Cover/Cover';
import menuImg from'../../../assets/menu/banner3.jpg'
import desImg  from'../../../assets/menu/dessert-bg.jpeg'
import  saladImg from'../../../assets/menu/salad-bg.jpg'
import soupImg from '../../../assets/menu/soup-bg.jpg'
import pizzaImg from '../../../assets/menu/pizza-bg.jpg'
import offered from'../../../assets/menu/salad-bg.jpg'
import PopularMenu from'../Home/PopularMenu/PopularMenu'
import UseMenu from '../../../hOOKS/UseMenu';
import SectionTitle from '../../../assets/Components/SectionTitle';
import MenuCategory from './MenuCategory';
const Menu = () => {
const [menu] = UseMenu();
const dessert = menu.filter(item => item.category ==='dessert');
const soup= menu.filter(item=>item.category==='soup');
const salad = menu.filter(item=>item.category==='salad');
const offered= menu.filter(item=>item.category==='offered');
const pizza = menu.filter(item=>item.category==='pizza')

  return (

        <div>
<Helmet>
 <title> Special Menu</title>
</Helmet> 

<Cover  img={menuImg}  title={"Our menu"}>  </Cover>
<SectionTitle subheading="Don't miss" heading= "Today's offer" >   </SectionTitle>
<MenuCategory items={dessert}  title={"dessert"} coverImg={desImg}   >  </MenuCategory>
<MenuCategory items={salad} title={"salad"} coverImg={saladImg}>    </MenuCategory>
<MenuCategory items={soup} title={"soup"}  coverImg={soupImg}  >     </MenuCategory>
<MenuCategory  items={pizza}   title={"pizaa"}  coverImg={pizzaImg}  >    </MenuCategory>

        </div>
    );
};

export default Menu;