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
            <TitleSubTitle 
              title={'Lottery'} 
              subTitle = {'For the month of victory of our motherland'}></TitleSubTitle>
            <Slider></Slider>
            <Booking></Booking>
        </div>
    );
};

export default Home;