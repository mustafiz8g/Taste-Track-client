import { useLoaderData } from "react-router-dom";
import TitleSubTitle from "./shared/TitleSubTitle";
import AllFoodsCard from "./AllFoodsCard";

const AllFoodes = () => {
    const foods  =useLoaderData();
   
    return (
        <div>
            <TitleSubTitle title={"Explore All Items"}
            subTitle={"Explore our diverse collection of delicious foods! From appetizers to desserts, discover flavorful dishes, fresh ingredients, and irresistible tastes. Perfect for every craving—browse now and satisfy your hunger!"}
            ></TitleSubTitle>
            <h2 className="text-center mb-4"> Total : {foods.length}</h2>
            <div className="w-10/12 mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                {
                 foods.map(food => <AllFoodsCard key={food._id} food={food}></AllFoodsCard>)
                }
            </div>
        </div>
    );
};

export default AllFoodes;