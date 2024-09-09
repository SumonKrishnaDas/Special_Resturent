import React from 'react';

const FoodCart = ({item}) => {

const {name,image,price,recipe} =item;

    return (
      

<div className="card bg-base-100 w-96 shadow-xl">
  <figure>
    <img
      src={image}
      alt="Shoes" />

  </figure>
  <p className='absolute right-0 mr-4 mt-4 bg-slate-800 text-white'>{price}</p>
  <div className="card-body">
    <h2 className="card-title">{name}</h2>

    <div className="card-actions justify-end">
      <button className="btn btn-primary">Add to Cart</button>
    </div>
  </div>
</div>




    );
};

export default FoodCart;