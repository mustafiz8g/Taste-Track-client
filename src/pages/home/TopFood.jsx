import { useEffect, useState } from "react";
import TopFoodCard from "./TopFoodCard";
import { Link } from "react-router-dom";



const TopFood = () => {

    const [foods, setFoods] = useState([])

    useEffect(() => {
        fetch('https://taste-track-server.vercel.app/topFoods')
            .then(res => res.json())
            .then(data => {
                setFoods(data)
            })
    }, [])

    return (
        <div className="mb-16">
            <h2 className="text-2xl font-bold mb-6 text-center">Top Selling Item</h2>
            <div className="grid grid-cols-12 w-10/12 mx-auto">
                <div className="col-span-3">
                   Aside extra layout
                </div>
                <div className="col-span-9 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-4 ">

                    {
                        foods.map(food => <TopFoodCard key={food._id} food={food}></TopFoodCard>)
                    }
                    
                </div>
              
            </div>



                <div className="mt-10 w-10/12 mx-auto">
                    <Link to={`/allFoods`}>
                        <div className="bg-orange-500 rounded-lg hover:bg-orange-600 text-white font-semibold py-3 text-center text-lg cursor-pointer">
                            Explore All Food
                        </div>
                    </Link>
                </div>

        </div>
    );
};

export default TopFood;