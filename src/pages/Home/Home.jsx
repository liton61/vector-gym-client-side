import Slider from "../../Header/Slider";
import About from "../../components/About";
import Blogs from "../../components/Blogs/Blogs";
import FeaturedClasses from "../../components/FeaturedClasses/FeaturedClasses";
import Features from "../../components/Features/Features";
import SubscribeForm from "../../components/SubscribeForm";
import Team from "../../components/Team/Team";
import Testimonials from "../../components/Testimonials/Testimonials";


const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <Features></Features>
            <About></About>
            <FeaturedClasses></FeaturedClasses>
            <Testimonials></Testimonials>
            <SubscribeForm></SubscribeForm>
            <Team></Team>
            <Blogs></Blogs>
        </div>
    );
};

export default Home;