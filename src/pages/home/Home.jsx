import Slider from "./Slider/Slider";
import Banner from "./Banner";
import TitleSubTitle from "../shared/TitleSubTitle";


const Home = () => {
    return (
        <div >
            <Banner></Banner>
            <TitleSubTitle 
              title={'Lottery'} 
              subTitle = {'For the month of victory of our motherland'}></TitleSubTitle>

            <Slider></Slider>
        </div>
    );
};

export default Home;