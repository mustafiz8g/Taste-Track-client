
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import MyFoodsTable from "./MyFoodsTable";



const MyFoods = () => {
  // const {foodName, price, quantity}
  const { user } = useAuth();
  const [myFoods, setMyFoods] = useState([])



  useEffect(() => {
    fetch(`https://taste-track-server.vercel.app/myFoods?email=${user.email}`)
      .then(res => res.json())
      .then(data => {
        setMyFoods(data)
      })
  }, [user.email])
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