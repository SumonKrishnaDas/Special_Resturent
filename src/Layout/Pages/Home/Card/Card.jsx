import React from 'react';
import SectionTitle from '../../../../assets/Components/SectionTitle';
import slide1 from'../../../../assets/home/slide1.jpg'

const Card = () => {
    return (

        <div className='mx-auto'>

        <SectionTitle heading=" CHEF RECOMMANDS" subheading="----Should try----" >   </SectionTitle>
    

<div className='flex items-center justify-center min-h-screen   gap-5'>

<div className="card glass w-96">
  <figure>
  <img className='w-[424px] h-[300px]'src={slide1} alt="" />
  </figure>
  <div className="card-body flex flex-col items-center text-center">
    <h2 className="card-title">Caeser Salad </h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum, dolore.</p>
    <div className="card-actions justify-center">
      <button className="btn btn-primary  align-middle">Add Cart</button>
    </div>
  </div>


  
</div>
<div className="card glass w-96">
  <figure>
    <img   className='w-[424px] h-[300px]'  src= {slide1}
    
      alt="car!" />
  </figure>
  <div className="card-body  flex flex-col items-center text-center">
    <h2 className="card-title">Life hack</h2>
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum, sapiente!</p>
    <div className="card-actions justify-center">
      <button className="btn btn-primary">Add to cart</button>
    </div>
  </div>



</div>
<div className="card glass w-96    ">
  <figure>
    <img className='w-[424px] h-[300px]'
  src={slide1}
      alt="car!" />
  </figure>
  <div className="card-body flex flex-col items-center text-center ">
    <h2 className="card-title">Life hack</h2>
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error, totam.</p>
    <div className="card-actions justify-center">
      <button className="btn btn-primary">Add to Cart </button>
    </div>
  </div>



</div>

</div>

    

        </div>
    );
};

export default Card;