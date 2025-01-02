import { useEffect, useState } from "react";
import TopFoodCard from "./TopFoodCard";
import { Link } from "react-router-dom";
import TitleSubTitle from "../shared/TitleSubTitle";



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

            <div className="grid grid-cols-12 w-10/12 mx-auto">
                <div className="col-span-3 hidden md:block">
                    Aside extra layout
                </div>
                <div className="col-span-12 md:col-span-9 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-4 ">
                    <div className="col-span-1 md:col-span-2 lg:col-span-3">
                        <TitleSubTitle title={'Most Loved Dishes'} subTitle={'These are customer favorites, known for their exceptional taste, quality, and popularity, driving consistent demand and sales'}></TitleSubTitle>
                    </div>

                    {
                        foods.map(food => <TopFoodCard key={food._id} food={food}></TopFoodCard>)
                    }



                    <Link className=" col-span-1 md:col-span-2 lg:col-span-3" to={`/allFoods`}>
                        <div className="bg-orange-500 w-full rounded-lg hover:bg-orange-600 text-white font-semibold py-3 text-center text-lg cursor-pointer">
                            See All
                        </div>
                    </Link>


                </div>

            </div>




        </div>
    );
};

export default TopFood;