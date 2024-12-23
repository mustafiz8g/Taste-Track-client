import { Link } from "react-router-dom";


const AllFoodsCard = ({ food }) => {
    const {_id, foodName, foodImage, quantity, price } = food;
  
    return (
      <div className="mx-auto bg-white rounded-lg shadow-md overflow-hidden border">
        {/* Image */}
        <div className="relative">
          <img
            src={foodImage}
            alt={foodName}
            className="w-full object-cover h-48"
          />
        </div>
  
        {/* Product Info */}
        <div className="p-4">
          {/* Title */}
          <h2 className="text-lg font-bold text-gray-800 text-center">{foodName}</h2>
  
          {/* Description */}
          <p className="text-gray-600 text-center text-sm mt-2">
            Stock : {quantity}
          </p>
  
          {/* Price */}
          <p className="text-center text-orange-500 text-lg font-semibold mt-4">${price}</p>
  
       
        </div>
  
        {/* Details Button */}
        <Link to ={`${_id}`}>
        <div className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 text-center cursor-pointer">
          Details
        </div>
        </Link>
      </div>
    );
  };
  
  export default AllFoodsCard;
  




