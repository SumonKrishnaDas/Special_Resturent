import React from 'react';
import SectionTitle from '../../../assets/Components/SectionTitle';
import Featuredimg from'../../../assets/home/featured.jpg';
import './Featured.css';
const Featured = () => {
    return (
        <div className= 'featured-item text-white pt-8 py-10 my-20 bg-fixed '>
            
<SectionTitle  heading="Featured Item "  subheading=" Cheking  it  out" >  </SectionTitle>
<div className='flex  justify-center items-center  bg-slate-500 bg-opacity-50  py-20 px-36'>


<div>
    <img src={Featuredimg} alt="" />
</div>
<div className='md:ml-10'>
<p>  5 Aug 2024</p>
<p>Where can i  get some </p>
Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita molestias alias illo quae, beatae repudiandae officiis totam? Odio error ad incidunt! Architecto totam temporibus magni laudantium at, consequatur assumenda eum, in esse ipsam possimus asperiores quisquam. Dolor modi repellendus nisi eaque dicta minima itaque est, veniam animi, debitis officia ducimus.

<button className='btn btn-outline border-b-4  border-0'> Read more </button>
</div>



</div>

        </div>
    );
};

export default Featured;