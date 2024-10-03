import React, { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import { useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import useCart from '../../hOOKS/useCart'; 
 const FoodCart = ({ item }) => {    
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const { name, image, price, _id } = item;
  
  // Destructure both cart and refetch from useCart
const [cart, refetch] = useCart(); // Fixing the destructuring here

  const addCart = (food) => {
    console.log("adding food", food);

    if (user) {
      const orderItem = { menuItemId: _id, name, image, price, email: user.email };

      fetch('http://localhost:3456/carts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(orderItem),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.insertedId) {
            refetch(); // Refetch after successfully adding to cart
            Swal.fire({
              position: 'top-end',
              icon: 'success',
              title: 'Item added to cart!',
              showConfirmButton: false,
              timer: 1500,
            });
          } else {
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: 'Something went wrong!',
            });
          }
        })
        .catch((error) => {
          console.error("Error adding item to cart:", error);
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Failed to add item to cart. Please try again.',
          });
        });
    } else {
      // If user is not logged in, prompt them to login
      Swal.fire({
        title: 'Please log in to continue',
        text: 'You need to log in before adding items to the cart.',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Log in',
      }).then((result) => {
        if (result.isConfirmed) {
          navigate('/login', { state: { from: location } });
        }
      });
    }
  };

  return (
    <div className="card bg-base-100 w-96 shadow-xl">
      <figure>
        <img src={image} alt={name} />
      </figure>
      <p className="absolute right-0 mr-4 mt-4 bg-slate-800 text-white px-2 py-1">${price}</p>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <div className="card-actions justify-end">
          <button onClick={() => addCart(item)} className="btn btn-primary">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCart;
