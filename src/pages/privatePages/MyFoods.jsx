
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import { Link } from "react-router-dom";



const MyFoods = () => {
    // const {foodName, price, quantity}
    const { user } = useAuth();
    const [myFoods ,setMyFoods] = useState([])



      useEffect( () => {
            fetch(`http://localhost:3800/myFoods?email=${user.email}`)
            .then(res => res.json())
            .then(data => {
                setMyFoods(data)
            })
        } ,[user.email])
        // console.log(myFoods)

  

        
    return (
        <div>
            <p className="text-center"> Total : {myFoods.length}</p>

            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>
          <p>Serial</p>
        </th>
        <th>Details</th>
        
        <th>Price</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
     {
        myFoods.map((purchase, index) =>  <tr key={purchase._id}>
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
                </div>
              </div>
            </td>
            <td>
             
              <br />
              <div className="text-sm text-orange-600 font-bold opacity-50">${purchase.price}</div>
              </td>
            <th>

      
        <button  className="btn btn-sm btn-outline">Update</button>


            </th>
          </tr>)
     }
    
  
    </tbody>

  </table>
</div>

        </div>
    );
};

export default MyFoods;