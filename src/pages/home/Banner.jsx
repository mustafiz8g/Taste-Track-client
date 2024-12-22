import { Link } from "react-router-dom";

// import banner from '../../../src/assets/banner2.png'
const Banner = () => {
    return (
        <div className='
        
        bg-banner bg-no-repeat  bg-cover h-[760px] bottom-[74px] relative flex flex-col items-center justify-center *:text-white space-y-3 *:text-center' 
        style={{
            backgroundImage: `linear-gradient(
              0deg, rgba(19, 19, 24, 0.8), rgba(19, 19, 24, 0) 100%
            ), url('../../../src/assets/banner.png')`, // Add your banner image URL here
          }}>
         
          <h3 className="text-4xl font-medium">Hello , We are TastyTrack</h3>
             <h2 className="text-6xl font-medium">Real Cooking , Perfect Taste</h2>
             <p>Granney is a restaurant , bar and the most talentedf chefs in town!</p>
             <Link to= '/allFoods' className="text-lg font-bold btn btn-outline btn-accent">Explore All Items</Link>
          </div>
      
    );
};

export default Banner;