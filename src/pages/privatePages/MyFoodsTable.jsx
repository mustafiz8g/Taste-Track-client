import { Link } from "react-router-dom";
import Swal from "sweetalert2";



const MyFoodsTable = ({index, myFood, myFoods, setMyFoods}) => {
     const handleDelete = (_id) => {
        Swal.fire({
          title: "Are you sure?",
       
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, delete it!"
        }).then((result) => {
          if (result.isConfirmed) {
            fetch(`http://localhost:3800/myFoods/${_id}`, {
              method: "DELETE"
            })
              .then((res) => res.json())
              .then((data) => {
                if (data.deletedCount > 0) {
                  const remaining = myFoods.filter((item) => item._id !== _id);
                  setMyFoods(remaining); 
                  Swal.fire({
                    title: "Deleted!",
                    text: "This item has been deleted.",
                    icon: "success"
                  });
                }
              })
            }
        });
      };
    return (
        <tr>
        <th>
          <p>{index + 1}</p>
        </th>
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle h-12 w-12">
                <img
                  src={myFood.foodImage}
                  alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold"> {myFood.foodName}</div>
            </div>
          </div>
        </td>
        <td>

          <br />
          <div className="text-sm text-orange-600 font-bold opacity-50">${myFood.price}</div>
        </td>
        <th>


          <Link to={`/myFoods/${myFood._id}`}>
            <button className="btn btn-sm btn-outline">Update</button>
          </Link>
          <button onClick={() => handleDelete(myFood._id)}
   className="btn btn-ghost">X</button>


        </th>
      </tr>
    );
};

export default MyFoodsTable;