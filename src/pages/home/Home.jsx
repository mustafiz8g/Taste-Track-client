import Slider from "./Slider/Slider";
import Banner from "./Banner";
import TitleSubTitle from "../shared/TitleSubTitle";
import Booking from "./Booking";
import TopFood from "./TopFood";


const Home = () => {
    return (
        <div >
            <Banner></Banner>
            <TopFood></TopFood>
          <div className="w-11/12 mx-auto">
          <TitleSubTitle 
              title={'Lottery'} 
              subTitle = {'For the month of victory of our motherland . We arranged a program where you have oportunity to conquor huge .'}></TitleSubTitle>
          </div>
            <Slider></Slider>
            <Booking></Booking>
        </div>
    );
};

export default Home;