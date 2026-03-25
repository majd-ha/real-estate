import Contact from "../components/contact/Contact";
import Services from "../components/services/Services";
import Hero from '../components/home/Hero'
import About from "../components/about/About";

const Home = () => {
    return (
        <div>
            <Hero />
            <About />
            <Services />
            <Contact />
            {/* <FeaturedProperties /> */}
            {/* <Statistics /> */}
        </div>
    );
};

export default Home;