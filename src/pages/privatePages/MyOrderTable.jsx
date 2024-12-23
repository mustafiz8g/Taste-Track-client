


const MyOrderTable = ({purchase,index }) => {
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
          <button  className="btn btn-ghost">X</button>
        </th>
      </tr>
    );
};

export default MyOrderTable;