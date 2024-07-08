
import BannerSlider from "./Bannner";
import Feddback from "./Feddback";
import PopularCountry from "./PopularCountry";
import ServiceCard from "./ServiceCard";
import TouristSpotsSection from "./TouristSpotsSection";
import WhyChose from "./WhyChose";





const Home = () => {
    return (
        <div >
        <BannerSlider></BannerSlider>
        <ServiceCard></ServiceCard>
          <TouristSpotsSection></TouristSpotsSection>  
          <Feddback></Feddback>
          <PopularCountry></PopularCountry>
          <WhyChose></WhyChose>
         
             
        </div>
    );
};

export default Home;