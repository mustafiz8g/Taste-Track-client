import { Link } from "react-router-dom";


const AllFoodsCard = ({ food }) => {
    const {_id, foodName, foodImage, quantity, price } = food;
  
    return (
      <div className="mx-auto bg-primary1  rounded-lg shadow-md overflow-hidden border border-red-accent">      
        <div className="flex justify-center  h-48">
          <img
            src={foodImage}
            alt={foodName}
            className="  h-full"
          />
        </div>    
        <div className="p-4">
          <h2 className="text-lg font-bold text-center">{foodName}</h2>   
          <p className=" text-center text-sm mt-2">
            Stock : {quantity}
          </p>
          <p className="text-center text-orange-500 text-lg font-semibold mt-4">${price}</p>
        </div>
       <Link to ={`${_id}`}>
        <div className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 text-center cursor-pointer">
          Details
        </div>
        </Link>
      </div>
    );
  };
  
  export default AllFoodsCard;
  




