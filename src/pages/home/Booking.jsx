import TitleSubTitle from "../shared/TitleSubTitle";
import booking_bg from '../../../src/assets/banner.png'
import './Booking.css' ;
const Booking = () => {

    return (
        <div className="booking bg-cover bg-no-repeat bg-fixed" 
        style={{
            backgroundImage:`linear-gradient(
              0deg, rgba(19, 19, 24, 0.8), rgba(19, 19, 24, 0) 100%
            ),  url(${booking_bg})`
        }}
        >
           
            <div className=" flex items-center justify-center px-4">
      <div className=" pb-20  max-w-4xl rounded-md shadow-md">

            <TitleSubTitle title={"MAKE A RESERVATION"} subTitle={"COME AND ENJOY THE HOSPITALITY & FOOD AT TASTETRACK"}></TitleSubTitle>

        <form className="border p-10 rounded-lg ">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
            {/* Left Side Inputs */}
            <div className="flex flex-col">
              <label className="text-sm font-semibold text-gray-700 mb-2">
                When would you like to book?
              </label>
              <input
                type="date" 
                required
                className="border border-gray-300 rounded-md p-2 focus:ring-yellow-500 focus:border-yellow-500"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-sm font-semibold text-gray-700 mb-2">
                Party Size
              </label>
              <select className="border border-gray-300 rounded-md p-2 focus:ring-yellow-500 focus:border-yellow-500">
                {[...Array(20)].map((_, i) => (
                  <option key={i} value={i + 1}>
                    {i + 1}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex flex-col">
            
              <select className="border border-gray-300 rounded-md p-2 focus:ring-yellow-500 focus:border-yellow-500">
                <option>Select Time</option>
                <option>Morning</option>
                <option>Afternoon</option>
                <option>Evening</option>
              </select>
            </div>
            {/* Right Side Inputs */}
            <div className="flex flex-col">
            
              <input
                type="text"
                placeholder="Your Name"
                className="border border-gray-300 rounded-md p-2 focus:ring-yellow-500 focus:border-yellow-500"
              />
            </div>
            <div className="flex flex-col">
            
              <input
                type="email"
                placeholder="Your Email"
                required
                className="border border-gray-300 rounded-md p-2 focus:ring-yellow-500 focus:border-yellow-500"
              />
            </div>
            <div className="flex flex-col">
             
              <input
                type="tel"
                placeholder="Your Phone Number"
                required
                className="border border-gray-300 rounded-md p-2 focus:ring-yellow-500 focus:border-yellow-500"
              />
            </div>
          
          </div>
          <button
            type="submit"
            required
            className="btn btn-accent text-lg mt-6 btn-sm w-full btn-outline"
          >
            Book My Table
          </button>
          <p className="text-sm text-gray-300 mt-4 text-center">
            Please submit your reservation details and we will contact you to
            confirm your booking.
          </p>
        </form>
      </div>
             </div>

        </div>
    );
};

export default Booking;