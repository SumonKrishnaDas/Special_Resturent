import React, { useEffect, useState } from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import SectionTitle from '../../../../assets/Components/SectionTitle';
const Testimonial = () => {
const[reviews,setReview]=useState([]);
    useEffect(()=>{
        fetch('review.json')
        .then(res=>res.json())
        .then(data=> setReview(data))
    },[])      
    return (
        <div className='m-24'>
            <SectionTitle heading={'What our Client Say'} subheading={'Testimonials'}>   </SectionTitle>
             <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
{
  reviews.map(review=><SwiperSlide>
        <div className='m-24 flex flex-col items-center'>
        <Rating style={{ maxWidth: 250 }} value={review.rating}  readOnly ></Rating>
<p> {review.details}</p>
<h3 className='text-2xl text-orange-500'>
    {review.name}
</h3> </div>
        </SwiperSlide>)
}
      </Swiper>            
        </div>
    );
};

export default Testimonial;