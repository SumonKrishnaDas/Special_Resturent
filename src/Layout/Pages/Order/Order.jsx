import React, { useState } from 'react';
import orderImg from '.././../../assets/shop/banner2.jpg';
import Cover from '../Shared/Cover/Cover';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import UseMenu from '../../../hOOKS/UseMenu';
import OrderBox from './OrderBox';
import { useParams } from 'react-router-dom';
const Order = () => {
  const categories = ['salad', 'pizza', 'soup', 'drinks', 'dessert']; // Fixed 'dessert'
  const [menu] = UseMenu();
  const { category } = useParams();

  // Ensure that if the category is not found, default to the first tab (index 0)
  const initialIndex = categories.indexOf(category) !== -1 ? categories.indexOf(category) : 0;

  const [tabIndex, setIndex] = useState(initialIndex);

  console.log('category', category);
  const dessert = menu.filter(item => item.category === 'dessert');
  const soup = menu.filter(item => item.category === 'soup');
  const salad = menu.filter(item => item.category === 'salad');
  const drinks = menu.filter(item => item.category === 'drinks');
  const pizza = menu.filter(item => item.category === 'pizza');

  return (
    <div>
      <Cover img={orderImg} title={'Order'}> </Cover>
      <Tabs selectedIndex={tabIndex} onSelect={(index) => setIndex(index)}>
        <TabList>
          <Tab>Salad</Tab>
          <Tab>Pizza</Tab>
          <Tab>Soup</Tab>
          <Tab>Drinks</Tab>
          <Tab>Desserts</Tab>
        </TabList>

        <TabPanel>
          <OrderBox items={salad}> </OrderBox>
        </TabPanel>

        <TabPanel>
          <OrderBox items={pizza}> </OrderBox>
        </TabPanel>

        <TabPanel>
          <OrderBox items={soup}> </OrderBox>
        </TabPanel>

        <TabPanel>
          <OrderBox items={drinks}> </OrderBox>
        </TabPanel>

        <TabPanel>
          <OrderBox items={dessert}> </OrderBox>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Order;
