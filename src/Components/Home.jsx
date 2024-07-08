
import BannerSlider from "./Bannner";
import Feddback from "./Feddback";
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
          <WhyChose></WhyChose>
         
             
        </div>
    );
};

export default Home;