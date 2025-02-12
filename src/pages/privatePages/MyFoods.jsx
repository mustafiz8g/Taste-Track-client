
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import MyFoodsTable from "./MyFoodsTable";
// import axios from "axios";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import TitleSubTitle from "../shared/TitleSubTitle";
import { Link } from "react-router-dom";



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
    <div className="w-10/12 mx-auto min-h-[500px]">
      <TitleSubTitle title={`my total added item (${myFoods.length})`}></TitleSubTitle>

      {
        myFoods.length === 0 ? <>
        
        <h3 className="text-2xl text-red-600 font-medium"> You did not add food yet</h3>
        <Link className=" col-span-1 md:col-span-2 lg:col-span-3" to={`/addFoods`}>
                        <div className="bg-orange-500 w-[300px] mt-4 rounded-lg hover:bg-orange-600 text-white font-semibold py-3 text-center text-lg cursor-pointer">
                            Add Food
                        </div>
                    </Link>
        </> :

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
      }

    </div>
  );
};

export default MyFoods;