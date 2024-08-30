import React from 'react';
import SectionTitle from '../../../assets/Components/SectionTitle';
import Featuredimg from'../../../assets/home/featured.jpg'

const Featured = () => {
    return (
        <div>
            
<SectionTitle  heading="Featured Item "  subheading=" Cheking  it  out" >  </SectionTitle>
<div className='flex'>


<div>
    <img src={Featuredimg} alt="" />
</div>
<div>
<p>  5 Aug 2024</p>
<p>Where can i  get some </p>
Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita molestias alias illo quae, beatae repudiandae officiis totam? Odio error ad incidunt! Architecto totam temporibus magni laudantium at, consequatur assumenda eum, in esse ipsam possimus asperiores quisquam. Dolor modi repellendus nisi eaque dicta minima itaque est, veniam animi, debitis officia ducimus.

<button className='btn btn-outline'> Read more </button>
</div>



</div>

        </div>
    );
};

export default Featured;