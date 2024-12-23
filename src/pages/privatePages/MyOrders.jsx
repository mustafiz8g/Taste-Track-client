import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";



const MyOrders = () => {
    // const {foodName, price, quantity}
    const { user } = useAuth();
    const [purchases ,setPurchase] = useState([])



      useEffect( () => {
            fetch(`http://localhost:3800/myOrders?email=${user.email}`)
            .then(res => res.json())
            .then(data => {
                setPurchase(data)
            })
        } ,[user.email])
        console.log(purchases)



        
    return (
        <div>
            <p className="text-center"> Total : {purchases.length}</p>

            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>
          <p>Serial</p>
        </th>
        <th>Details</th>
        
        <th>Owner</th>
        <th>Date </th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
     {
        purchases.map((purchase, index) =>  <tr key={purchase._id}>
            <th>
              <p>{index + 1}</p>
            </th>
            <td>
              <div className="flex items-center gap-3">
                <div className="avatar">
                  <div className="mask mask-squircle h-12 w-12">
                    <img
                      src={purchase.foodImage}
                      alt="Avatar Tailwind CSS Component" />
                  </div>
                </div>
                <div>
                  <div className="font-bold"> {purchase.foodName}</div>
                  <div className="text-sm text-orange-600 font-bold opacity-50">${purchase.price}</div>
                </div>
              </div>
            </td>
            <td>
             
              <br />
              <span className="badge badge-ghost badge-sm">{purchase.Owner}</span>
            </td>
            <td>{purchase.buyingDate}</td>
            <th>
              <button  className="btn btn-ghost">X</button>
            </th>
          </tr>)
     }
    
  
    </tbody>

  </table>
</div>

        </div>
    );
};

export default MyOrders;