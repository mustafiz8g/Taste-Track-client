

import { Link } from "react-router-dom";


const TopFoodCard = ({ food }) => {
    const {_id, foodName, foodImage, quantity, price } = food;
  
    return (
      <div className="mx-auto bg-white rounded-lg shadow-md overflow-hidden border">      
        <div className=" flex justify-center object-cover">
          <img
            src={foodImage}
            alt={foodName}
            className="h-full "
          />
        </div>    
        <div className="p-4">
          <h2 className="text-lg font-bold text-gray-800 text-center">{foodName}</h2>   
          <p className="text-gray-600 text-center text-sm mt-2">
            Stock : {quantity}
          </p>
          <p className="text-center text-orange-500 text-lg font-semibold mt-4">${price}</p>
        </div>
       <Link to ={`allFoods/${_id}`}>
        <div className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 text-center cursor-pointer">
          Details
        </div>
        </Link>
      </div>
    );
  };
  
  export default TopFoodCard;
  




