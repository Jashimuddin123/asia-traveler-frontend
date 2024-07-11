
import { Helmet } from "react-helmet";
import BannerSlider from "./Bannner";
import Feddback from "./Feddback";
import Gallery from "./Gallery";
import PopularCountry from "./PopularCountry";
import ServiceCard from "./ServiceCard";
import TouristSpotsSection from "./TouristSpotsSection";






const Home = () => {
    return (
         <div>
          <Helmet>
            <title className="text-xl font-semiboldbold">
              Home
            </title>
          </Helmet>
           <div className="max-w-7xl mx-auto" >
        <BannerSlider></BannerSlider>
        <ServiceCard></ServiceCard>
          <TouristSpotsSection></TouristSpotsSection>  
          <Feddback></Feddback>
          <PopularCountry></PopularCountry>
          {/* <WhyChose></WhyChose> */}
          <Gallery></Gallery>
         
             
        </div>
         </div>
    );
};

export default Home;