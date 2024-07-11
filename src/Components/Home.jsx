
import BannerSlider from "./Bannner";
import Feddback from "./Feddback";
import Gallery from "./Gallery";
import PopularCountry from "./PopularCountry";
import ServiceCard from "./ServiceCard";
import TouristSpotsSection from "./TouristSpotsSection";






const Home = () => {
    return (
        <div className="max-w-7xl mx-auto" >
        <BannerSlider></BannerSlider>
        <ServiceCard></ServiceCard>
          <TouristSpotsSection></TouristSpotsSection>  
          <Feddback></Feddback>
          <PopularCountry></PopularCountry>
          {/* <WhyChose></WhyChose> */}
          <Gallery></Gallery>
         
             
        </div>
    );
};

export default Home;