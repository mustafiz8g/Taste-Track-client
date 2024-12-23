import { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";

const PurchaseForm = () => {
    const { user } = useAuth();
    const { id } = useParams();
    const [food, setFood] = useState([])
    const navigate = useNavigate();
    const [conditon , setCondition] = useState([])
    const [newPrice , setNewPrice] = useState([])

    

    const [currentTime, setCurrentTime] = useState(new Date().toLocaleString());

    // Update time in real time
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTime(new Date().toLocaleString());
        }, 1000); // Update every second
        return () => clearInterval(interval); // Cleanup
    }, []);

    //
    useEffect( () => {
        fetch(`http://localhost:3800/allFoods/${id}`)
        .then(res => res.json())
        .then(data => {
            setFood(data)
        })
    } ,[id])

    const handleQuantity = e => {
        const newQunatity = parseInt(e.target.value,10);
        const newPrice = newQunatity * food.price ;
        setNewPrice(newPrice)

    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const purchaseQuantity = parseInt(form.purchaseQuantity.value,10)
        if (purchaseQuantity > food.quantity){
            return setCondition(`We have ${food.quantity} ${food.foodName} in stock`)
        }

        const purchaseFood = {
            food_id: id,
            foodImage: food.foodImage,
            foodName: form.foodName.value,
            purchaseQuantity,
            price: parseFloat(form.price.value),
            Owner:food.addedByName,
            buyerName: user.displayName,
            buyerEmail: user.email,
            buyingDate: currentTime,
        };

        fetch('http://localhost:3800/purchaseFoods', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(purchaseFood)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.insertedId) {
                    Swal.fire({
                        title: "Purchase has been confired",
                        icon: "success"
                    });
                    navigate('/myOrders')

                }
            })


    };


    return (
        <div className="container mx-auto p-4 md:p-8">
            <div className="max-w-2xl mx-auto bg-white shadow-md rounded-lg p-6">
                <h1 className="text-2xl font-bold text-gray-800 mb-6">Purchase Food</h1>
                <form onSubmit={handleSubmit} className="space-y-4">

                    <div>
                        <label className="block text-sm font-medium text-gray-600">
                            Food Name
                        </label>
                        <input
                            type="text"
                            name="foodName"
                            value={food.foodName}
                            required
                            className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500"
                        />
                    </div>


                    <div>
                        <label className="block text-sm font-medium text-gray-600">
                            Price
                        </label>
                        <input
                            type="number"
                            name="price"
                            value={newPrice}
                            required
                            className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500"
                        />
                    </div>


                    <div>
                        <label className="block text-sm font-medium text-gray-600">
                           Purchase Quantity (between 1 and 20)
                        </label>
                        <input
                            type="number"
                            name="purchaseQuantity"
                            required
                            min={1}
                            max={20}
                            onChange={handleQuantity}
                            
                            className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500"
                        />
                    </div>
                    <p>{conditon}</p>


                    <div>
                        <label className="block text-sm font-medium text-gray-600">
                            Buyer Name
                        </label>
                        <input
                            type="text"
                            name="buyerName"
                            value={user.displayName}
                            readOnly
                            className="w-full mt-1 px-4 py-2 bg-gray-100 border border-gray-300 rounded-md shadow-sm"
                        />
                    </div>


                    <div>
                        <label className="block text-sm font-medium text-gray-600">
                            Buyer Email
                        </label>
                        <input
                            type="email"
                            name="buyerEmail"
                            value={user.email}
                            readOnly
                            className="w-full mt-1 px-4 py-2 bg-gray-100 border border-gray-300 rounded-md shadow-sm"
                        />
                    </div>


                    <div>
                        <label className="block text-sm font-medium text-gray-600">
                            Buying Time
                        </label>
                        <input
                            type="text"
                            name="buyingTime"
                            value={currentTime}
                            readOnly
                            className="w-full mt-1 px-4 py-2 bg-gray-100 border border-gray-300 rounded-md shadow-sm"
                        />
                    </div>


                    <div>
                       
                       <button 
                            type="submit"
                            className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold px-4 py-2 rounded-md shadow-lg hover:shadow-xl transition-shadow duration-300"
                        >
                            Purchase Confirm
                        </button>
                      
                    </div>
                </form>
            </div>
        </div>
    );
};

export default PurchaseForm;
