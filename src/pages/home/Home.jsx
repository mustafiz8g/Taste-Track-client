import Slider from "./Slider/Slider";
import Banner from "./Banner";
import TitleSubTitle from "../shared/TitleSubTitle";
import Booking from "./Booking";


const Home = () => {
    return (
        <div >
            <Banner></Banner>
            <TitleSubTitle 
              title={'Lottery'} 
              subTitle = {'For the month of victory of our motherland'}></TitleSubTitle>
            <Slider></Slider>
            <Booking></Booking>
        </div>
    );
};

export default Home;