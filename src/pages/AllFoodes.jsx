

import { useLoaderData } from "react-router-dom";
import { useState, useEffect } from "react";
import TitleSubTitle from "./shared/TitleSubTitle";
import AllFoodsCard from "./AllFoodsCard";

const AllFoodes = () => {
    const foods = useLoaderData();
    const [searchQuery, setSearchQuery] = useState("");
    const [filteredFoods, setFilteredFoods] = useState(foods);

    useEffect(() => {
        const delayDebounceFn = setTimeout(async () => {
            if (!searchQuery.trim()) {
                setFilteredFoods(foods); 
                return;
            }

                const response = await fetch(
                    `https://taste-track-server.vercel.app/searchFoods?name=${searchQuery}`
                );
                if (response.ok) {
                    const data = await response.json();
                    setFilteredFoods(data);
                } else {
                    console.error("Error fetching search results");
                    setFilteredFoods([]); 
                }
         
        }, 300); 

        return () => clearTimeout(delayDebounceFn); // Cleanup the timeout
    }, [searchQuery, foods]);

    return (
        <div className="relative">
           <div className="w-10/12 mx-auto">
           <TitleSubTitle
                title="Explore All Items"
                subTitle="Explore our diverse collection of delicious foods! From appetizers to desserts, discover flavorful dishes, fresh ingredients, and irresistible tastes. Perfect for every craving—browse now and satisfy your hunger!"
            />
           </div>
            <div className=" flex justify-end w-10/12 mx-auto sticky top-16 z-50">
                <label className="input input-bordered flex items-center gap-2">
                    <input 
                    className=" "
                    placeholder="Write Food Name"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)} />
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                        className="h-5 w-h-5 opacity-70">
                        <path
                            fillRule="evenodd"
                            d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                            clipRule="evenodd" />
                    </svg>
                </label>

            </div>
            <h2 className="text-center mb-4">Total: {filteredFoods.length}</h2>
            <div className="w-10/12 mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                {filteredFoods.map((food) => (
                    <AllFoodsCard key={food._id} food={food} />
                ))}
            </div>
        </div>
    );
};

export default AllFoodes;
