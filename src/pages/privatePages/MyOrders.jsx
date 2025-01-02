import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import MyOrderTable from "./MyOrderTable";
import TitleSubTitle from "../shared/TitleSubTitle";
import AllFoodes from "../AllFoodes";



const MyOrders = () => {
    const { user } = useAuth();
    const [purchases ,setPurchase] = useState([])



      useEffect( () => {
            fetch(`https://taste-track-server.vercel.app/myOrders?email=${user.email}`)
            .then(res => res.json())
            .then(data => {
                setPurchase(data)
            })
        } ,[user.email])
        // console.log(purchases)



        
    return (
        <div className="w-10/12 mx-auto">
           <TitleSubTitle title={`my all purchased item (${purchases.length})`}></TitleSubTitle>

            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>
          <p>Serial</p>
        </th>
        <th> Details</th>
        
        <th>Seller</th>
        <th>Purchase Date </th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
     {
        purchases.map((purchase, index) =><MyOrderTable 
        key={purchase._id}
        purchase = {purchase}
        index = {index}
        purchases = {purchases}
        setPurchase = {setPurchase}

        
        ></MyOrderTable> )
        
     }
    
  
    </tbody>

  </table>
</div>

        </div>
    );
};

export default MyOrders;