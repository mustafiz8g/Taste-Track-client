import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import MyOrderTable from "./MyOrderTable";
import TitleSubTitle from "../shared/TitleSubTitle";
import AllFoodes from "../AllFoodes";
import { Link } from "react-router-dom";



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
        <div className="w-10/12 mx-auto min-h-[500px]">
           <TitleSubTitle title={`my all purchased item (${purchases.length})`}></TitleSubTitle>

           {
        purchases.length === 0 ? <>
        
        <h3 className="text-2xl text-red-600 font-medium"> You did not order food yet</h3>
        <Link className=" col-span-1 md:col-span-2 lg:col-span-3" to={`/addFoods`}>
                        <div className="bg-orange-500 w-[300px] mt-4 rounded-lg hover:bg-orange-600 text-white font-semibold py-3 text-center text-lg cursor-pointer">
                            Order Now
                        </div>
                    </Link>
        </> : 
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
           }

        </div>
    );
};

export default MyOrders;