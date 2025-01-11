


import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import TitleSubTitle from "../shared/TitleSubTitle";

const AddFoods = () => {
    const { user } = useAuth();

    const handleAddFood = (e) => {
        e.preventDefault();

        const form = e.target;
        const foodData = {
            foodName: form.foodName.value,
            foodImage: form.foodImage.value,
            foodCategory: form.foodCategory.value,
            quantity: parseInt(form.quantity.value,10),
            price: parseFloat(form.price.value),
            addedByName: form.addedByName.value,
            addedByEmail: form.addedByEmail.value,
            foodOrigin: form.foodOrigin.value,
            description: form.description.value,
            totalSold: parseInt(0),
        };

        // console.log(foodData);

    //
        fetch("https://taste-track-server.vercel.app/addFoods", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(foodData),
        })
        .then(res => res.json())
        .then(data => {
            // console.log(data)
            if (data.insertedId) {
                Swal.fire({
                    title: "Food has been added",
                    icon: "success"
                });
               
            }
        })
          
    };

    return (
        <div className="w-10/12 mx-auto">
            <form onSubmit={handleAddFood} className="max-w-3xl mx-auto shadow-lg rounded-lg p-8 space-y-1">
                {/* Form Header */}
              <TitleSubTitle title={'Add a New Food Item'} subTitle={'Fill in the details below to add a new food item to the menu.'}></TitleSubTitle>
                {/* Food Name */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text  font-semibold">Food Name</span>
                    </label>
                    <input
                        name="foodName"
                        type="text"
                        placeholder="Enter Food Name"
                        className="input input-bordered w-full glass"
                        required
                    />
                </div>

                {/* Food Image */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text  font-semibold">Food Image URL</span>
                    </label>
                    <input
                        name="foodImage"
                        type="text"
                        placeholder="Enter Food Image URL"
                        className="input input-bordered w-full glass"
                        required
                    />
                </div>

                {/* Food Category */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text  font-semibold">Food Category</span>
                    </label>
                    <select
                        name="foodCategory"
                        defaultValue="Pick a Category"
                        className="select select-bordered w-full glass"
                        required
                    >
                        <option disabled>Pick a Category</option>
                        <option>Appetizer</option>
                        <option>Main Course</option>
                        <option>Dessert</option>
                        <option>Beverage</option>
                    </select>
                </div>

                {/* Extra sold */}
                {/* <div className="form-control">
                    <label className="label">
                        <span className="label-text  font-semibold">Total Sold</span>
                    </label>
                    <input
                        name="totalSold"
                        type="number"
                        placeholder="Enter totalSold"
                        className="input input-bordered w-full glass"
                        min="0"
                        readOnly
                        
                        required
                    />
                </div> */}
                {/* Quantity  */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text  font-semibold">Stock</span>
                    </label>
                    <input
                        name="quantity"
                        type="number"
                        placeholder="Enter Quantity"
                        className="input input-bordered w-full glass"
                        min="1"
                        
                        required
                    />
                </div>

                {/* Price */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text  font-semibold">Price</span>
                    </label>
                    <input
                        name="price"
                        type="number"
                        placeholder="Enter Price"
                        className="input input-bordered w-full glass"
                        min="0"
                        required
                    />
                </div>

                {/* Added By */}
                <fieldset className="border border-gray-200 rounded-lg p-4 glass">
                    <legend className="text-gray-600 font-semibold px-2">Added By</legend>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="form-control">
                            <input
                                name="addedByName"
                                type="text"
                                defaultValue={user?.displayName}
                                placeholder="Your Name"
                                className="input input-bordered glass"
                                readOnly
                            />
                        </div>
                        <div className="form-control">
                            <input
                                name="addedByEmail"
                                type="email"
                                defaultValue={user?.email}
                                placeholder="Your Email"
                                className="input input-bordered glass"
                                readOnly
                            />
                        </div>
                    </div>
                </fieldset>

                {/* Food Origin */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text  font-semibold">Food Origin</span>
                    </label>
                    <input
                        name="foodOrigin"
                        type="text"
                        placeholder="Enter Country of Origin"
                        className="input input-bordered w-full glass"
                        required
                    />
                </div>

                {/* Description */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text  font-semibold">Description</span>
                    </label>
                    <textarea
                        name="description"
                        placeholder="Ingredients, making procedure, etc."
                        className="textarea textarea-bordered w-full glass"
                        required
                    ></textarea>
                </div>

                {/* Submit Button */}
                <div className="form-control mt-6">
                    <button className="btn btn-accent text-lg btn-outline w-full text-lg hover:shadow-lg transition-shadow duration-300 mt-4">
                        Add Food Item
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AddFoods;
