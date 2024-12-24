
import Swal from "sweetalert2";

const MyOrderTable = ({purchase,index , purchases, setPurchase }) => {
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
        fetch(`http://localhost:3800/myOrders/${_id}`, {
          method: "DELETE"
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              const remaining = purchases.filter((item) => item._id !== _id);
              setPurchase(remaining); 
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
        <tr key={purchase._id}>
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
            <div className="flex gap-3 ">
            <div className="text-sm text-orange-600 font-bold opacity-50">${purchase.price}</div>
            <div><span className="text-[12px]">Quantity:</span> <span className="font-bold text-[12px] text-green-600">{purchase.purchaseQuantity}</span></div>
            </div>
              
            </div>
          </div>
        </td>
        <td>
         
          <br />
          <span className="badge badge-ghost badge-sm">{purchase.Owner}</span>
        </td>
        <td>{purchase.buyingDate}</td>
        <th>
          <button onClick={() => handleDelete(purchase._id)}
           className="btn btn-ghost">X</button>
        </th>
      </tr>
    );
};

export default MyOrderTable;