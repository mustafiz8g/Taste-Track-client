
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import MyFoodsTable from "./MyFoodsTable";
// import axios from "axios";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import TitleSubTitle from "../shared/TitleSubTitle";



const MyFoods = () => {
  // const {foodName, price, quantity}
  const { user } = useAuth();
  const [myFoods, setMyFoods] = useState([])

const axiosSecure = useAxiosSecure();

  useEffect(() => {
   
    // axios.get(`https://taste-track-server.vercel.app/myFoods?email=${user.email}`,{
    //   withCredentials: true
    // })
    // .then(res => setMyFoods(res.data))

  axiosSecure.get(`/myFoods?email=${user.email}`)
  .then(res => setMyFoods(res.data))


  }, [user.emai])

  // console.log(myFoods)




  return (
    <div className="w-10/12 mx-auto">
      <TitleSubTitle title={`my total added item (${myFoods.length})`}></TitleSubTitle>

      <div className="overflow-x-auto ">
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
              myFoods.map((myFood, index) =>
              <MyFoodsTable key={myFood._id} 
               index = {index}
              myFood = {myFood}
              myFoods = {myFoods}
              setMyFoods = {setMyFoods}
              ></MyFoodsTable>
             )
            }


          </tbody>

        </table>
      </div>

    </div>
  );
};

export default MyFoods;