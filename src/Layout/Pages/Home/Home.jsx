import React from 'react'
import Banner from './Banner'
import Catagory from './Catagory/Catagory';
import Poster from'./Poster'
import PopularMenu from './PopularMenu/PopularMenu';
import Card from './Card/Card';
import Number from './Number';
import Featured from './Featured';
import Testimonial from './Testimonial/Testimonial';
import { Helmet, } from 'react-helmet-async';
const Home = () => {
    return (
        <div>
        <Helmet>
             <title>Home Page</title>
            </Helmet>   

<Banner> </Banner>
<Catagory> </Catagory>
<Poster> </Poster>
<PopularMenu> </PopularMenu>
<Number> </Number>
<Card> </Card>
<Featured> </Featured>
<Testimonial> </Testimonial>

            
        </div>
    );
};

export default Home;