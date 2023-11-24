import Slider from "../../Header/Slider";
import About from "../../components/About";
import FeaturedClasses from "../../components/FeaturedClasses/FeaturedClasses";
import Features from "../../components/Features/Features";


const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <Features></Features>
            <About></About>
            <FeaturedClasses></FeaturedClasses>
        </div>
    );
};

export default Home;