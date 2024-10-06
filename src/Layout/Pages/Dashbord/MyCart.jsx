import React from 'react';
import  useCart  from '../../../hOOKS/useCart';

const MyCart = () => {

    const[cart] = useCart();

    const total =cart.reduce((acc, curr) => acc + curr.price, 0);
    return (
        <div>
          <div className='flex justify-between items-center h-[60px]'> 
          <h1 className='text-2xl font-bold'>Total items:{cart.length}</h1>
            <h1 className='text-2xl font-bold'>Total price:${total}</h1>
            <button className='btn btn-primary'>pay</button>
        
          </div>

          <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <th>#</th>
        <th>Food</th>
        <th>Item Name</th>
        <th>Price </th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
  {/* row 1 */}
  {
    cart.map((item, index) => (
      <tr key={item.id || index}> {/* Add key prop here */}
        <td>
          <label>{index + 1}</label>
        </td>
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle h-12 w-12">
                <img
                  src="https://img.daisyui.com/images/profile/demo/2@94.webp"
                  alt="Avatar Tailwind CSS Component"
                />
              </div>
            </div>
            <div>
              <div className="font-bold">Hart Hagerty</div>
              <div className="text-sm opacity-50">United States</div>
            </div>
          </div>
        </td>
        <td>
          Zemlak, Daniel and Leannon
          <br />
          <span className="badge badge-ghost badge-sm">Desktop Support Technician</span>
        </td>
        <td>Purple</td>
        <td>
          <button className="btn btn-ghost btn-xs">details</button>
        </td>
      </tr>
    ))
  }
</tbody>

  
   
  </table>
</div>
        </div>



    );
};

export default MyCart;