import React, { useState } from 'react';
import  orderImg from '.././../../assets/shop/banner2.jpg'
import Cover from '../Shared/Cover/Cover';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import 'react-tabs/style/react-tabs.css';
import UseMenu from '../../../hOOKS/UseMenu';
import FoodCart from '../FoodCart';
import OrderBox from './OrderBox';
const Order = () => {
  const[tabIndex,setIndex]=useState(0)

  const [menu] = UseMenu();
const dessert = menu.filter(item => item.category ==='dessert');
const soup= menu.filter(item=>item.category==='soup');
const salad = menu.filter(item=>item.category==='salad');
const offered= menu.filter(item=>item.category==='offered');
const pizza = menu.filter(item=>item.category==='pizza')

 return (

        <div>

     <Cover img={orderImg} title={"Order"}>   </Cover>

     <Tabs defaultIndex={tabIndex} onSelect={(index) => setIndex(index)}>
  <TabList>
    <Tab>Salad</Tab>
    <Tab>Pizza</Tab>
    <Tab>soup</Tab>
    <Tab>
  Drinks
    </Tab>
    <Tab>Desserts</Tab>
  
  </TabList>
  <TabPanel> 
<OrderBox items={salad}>  </OrderBox>
  </TabPanel>
  <TabPanel>

    <OrderBox items={pizza}>  </OrderBox>
  </TabPanel>
  <TabPanel><OrderBox items={soup} > </OrderBox>  </TabPanel>
  <TabPanel><OrderBox items={dessert}> </OrderBox>   </TabPanel>
  <TabPanel> <OrderBox items={offered } > </OrderBox></TabPanel>
</Tabs>









        </div>
    );
};

export default Order;