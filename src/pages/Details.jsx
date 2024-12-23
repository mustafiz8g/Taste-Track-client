// import { useLoaderData } from "react-router-dom";

// const Details = () => {
//     const {
//         foodName,
//         foodImage,
//         foodCategory,
//         quantity,
//         price,
//         addedByName,
//         addedByEmail,
//         foodOrigin,
//         description,
//     } = useLoaderData();

//     return (
//         <div className="container mx-auto p-4">
//             {/* Details Container */}
//             <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
//                 {/* Food Image */}
//                 <div className="relative">
//                     <img
//                         src={foodImage}
//                         alt={foodName}
//                         className="w-full h-80 object-cover"
//                     />
//                     <span className="absolute top-4 left-4 bg-orange-500 text-white px-4 py-1 text-xs font-semibold rounded-lg">
//                         {foodCategory}
//                     </span>
//                 </div>

//                 {/* Content Section */}
//                 <div className="p-6">
//                     {/* Title and Price */}
//                     <div className="flex items-center justify-between mb-4">
//                         <h1 className="text-2xl font-bold text-gray-800">{foodName}</h1>
//                         <span className="text-xl font-semibold text-orange-500">${price}</span>
//                     </div>

//                     {/* Description */}
//                     <p className="text-gray-600 leading-relaxed mb-4">{description}</p>

//                     {/* Additional Information */}
//                     <div className="grid grid-cols-2 gap-4">
//                         <div>
//                             <h3 className="text-sm text-gray-500 font-semibold">Category</h3>
//                             <p className="text-gray-800">{foodCategory}</p>
//                         </div>
//                         <div>
//                             <h3 className="text-sm text-gray-500 font-semibold">Quantity</h3>
//                             <p className="text-gray-800">{quantity}</p>
//                         </div>
//                         <div>
//                             <h3 className="text-sm text-gray-500 font-semibold">Added By</h3>
//                             <p className="text-gray-800">{addedByName}</p>
//                         </div>
//                         <div>
//                             <h3 className="text-sm text-gray-500 font-semibold">Email</h3>
//                             <p className="text-gray-800">{addedByEmail}</p>
//                         </div>
//                         <div>
//                             <h3 className="text-sm text-gray-500 font-semibold">Origin</h3>
//                             <p className="text-gray-800">{foodOrigin}</p>
//                         </div>
//                     </div>
//                 </div>

//                 {/* Buttons */}
//                 <div className="flex justify-between p-6 bg-gray-50 border-t">
//                     <button className="btn btn-accent w-5/12 text-white font-semibold px-4 py-2 rounded-lg hover:bg-accent-focus">
//                         Purchase
//                     </button>
//                     <button className="btn btn-outline w-5/12 text-orange-500 border-orange-500 font-semibold px-4 py-2 rounded-lg hover:bg-orange-500 hover:text-white">
//                         Add to Cart
//                     </button>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Details;








// import { useLoaderData } from "react-router-dom";

// const Details = () => {
//     const {
//         foodName,
//         foodImage,
//         foodCategory,
//         quantity,
//         price,
//         addedByName,
//         addedByEmail,
//         foodOrigin,
//         description,
//     } = useLoaderData();

//     return (
//         <div className="container mx-auto p-6">
//             {/* Details Card */}
//             <div className="max-w-4xl mx-auto bg-white shadow-xl rounded-lg overflow-hidden">
//                 {/* Food Image */}
//                 <div className="relative">
//                     <img
//                         src={foodImage}
//                         alt={foodName}
//                         className="w-full h-96 object-cover transition-transform duration-300 hover:scale-105"
//                     />
//                     <span className="absolute top-4 left-4 bg-gradient-to-r from-orange-400 to-red-500 text-white px-4 py-1 text-xs font-semibold rounded-full shadow-lg">
//                         {foodCategory}
//                     </span>
//                 </div>

//                 {/* Content Section */}
//                 <div className="p-8">
//                     {/* Title and Price */}
//                     <div className="flex items-center justify-between mb-6">
//                         <h1 className="text-3xl font-bold text-gray-800">{foodName}</h1>
//                         <span className="text-2xl font-semibold text-orange-500">${price}</span>
//                     </div>

//                     {/* Description */}
//                     <p className="text-gray-600 leading-relaxed mb-6 text-justify">{description}</p>

//                     {/* Additional Information */}
//                     <div className="grid grid-cols-2 gap-6">
//                         <div className="flex flex-col">
//                             <h3 className="text-sm text-gray-500 font-semibold uppercase">Category</h3>
//                             <p className="text-gray-800">{foodCategory}</p>
//                         </div>
//                         <div className="flex flex-col">
//                             <h3 className="text-sm text-gray-500 font-semibold uppercase">Quantity</h3>
//                             <p className="text-gray-800">{quantity}</p>
//                         </div>
//                         <div className="flex flex-col">
//                             <h3 className="text-sm text-gray-500 font-semibold uppercase">Added By</h3>
//                             <p className="text-gray-800">{addedByName}</p>
//                         </div>
//                         <div className="flex flex-col">
//                             <h3 className="text-sm text-gray-500 font-semibold uppercase">Email</h3>
//                             <p className="text-gray-800">{addedByEmail}</p>
//                         </div>
//                         <div className="flex flex-col col-span-2">
//                             <h3 className="text-sm text-gray-500 font-semibold uppercase">Food Origin</h3>
//                             <p className="text-gray-800">{foodOrigin}</p>
//                         </div>
//                     </div>
//                 </div>

//                 {/* Buttons */}
//                 <div className="flex justify-between p-6 bg-gray-100 border-t">
//                     <button className="btn w-5/12 bg-gradient-to-r from-green-400 to-teal-500 text-white font-semibold px-6 py-3 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
//                         Purchase
//                     </button>
//                     <button className="btn w-5/12 border border-orange-500 text-orange-500 font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-orange-500 hover:text-white hover:shadow-xl transition-shadow duration-300">
//                         Add to Cart
//                     </button>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Details;










import { useLoaderData } from "react-router-dom";

const Details = () => {
    const {
        foodName,
        foodImage,
        foodCategory,
        quantity,
        price,
        addedByName,
        addedByEmail,
        foodOrigin,
        description,
    } = useLoaderData();

    return (
        <div className="container mx-auto p-4 md:p-8">
            {/* Details Card */}
            <div className="max-w-4xl mx-auto bg-white shadow-xl rounded-lg overflow-hidden">
                {/* Food Image */}
                <div className="relative">
                    <img
                        src={foodImage}
                        alt={foodName}
                        className="w-full h-64 sm:h-80 md:h-96 object-cover transition-transform duration-300 hover:scale-105"
                    />
                    <span className="absolute top-4 left-4 bg-gradient-to-r from-orange-400 to-red-500 text-white px-4 py-1 text-xs font-semibold rounded-full shadow-lg">
                        {foodCategory}
                    </span>
                </div>

                {/* Content Section */}
                <div className="p-6 sm:p-8">
                    {/* Title and Price */}
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6">
                        <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 sm:mb-0">
                            {foodName}
                        </h1>
                        <span className="text-xl md:text-2xl font-semibold text-orange-500">
                            ${price}
                        </span>
                    </div>

                    {/* Description */}
                    <p className="text-gray-600 leading-relaxed mb-6 text-justify">
                        {description}
                    </p>

                    {/* Additional Information */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div className="flex flex-col">
                            <h3 className="text-sm text-gray-500 font-semibold uppercase">
                                Category
                            </h3>
                            <p className="text-gray-800">{foodCategory}</p>
                        </div>
                        <div className="flex flex-col">
                            <h3 className="text-sm text-gray-500 font-semibold uppercase">
                                Quantity
                            </h3>
                            <p className="text-gray-800">{quantity}</p>
                        </div>
                        <div className="flex flex-col">
                            <h3 className="text-sm text-gray-500 font-semibold uppercase">
                                Added By
                            </h3>
                            <p className="text-gray-800">{addedByName}</p>
                        </div>
                        <div className="flex flex-col">
                            <h3 className="text-sm text-gray-500 font-semibold uppercase">
                                Email
                            </h3>
                            <p className="text-gray-800">{addedByEmail}</p>
                        </div>
                        <div className="flex flex-col sm:col-span-2">
                            <h3 className="text-sm text-gray-500 font-semibold uppercase">
                                Food Origin
                            </h3>
                            <p className="text-gray-800">{foodOrigin}</p>
                        </div>
                    </div>
                </div>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 p-6 bg-gray-100 border-t">
                    <button className="w-full sm:w-auto bg-gradient-to-r from-green-400 to-teal-500 text-white font-semibold px-6 py-3 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                        Purchase
                    </button>
                    <button className="w-full sm:w-auto border border-orange-500 text-orange-500 font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-orange-500 hover:text-white hover:shadow-lg transition-shadow duration-300">
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Details;
