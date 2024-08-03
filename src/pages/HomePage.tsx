import FeaturedTestimonial from "../components/UI/FeaturedTestimonial";
import FeaturedTherapist from "../components/UI/FeaturedTherapist";
import Hader from "../components/UI/Hader";
import PopularCities from "../components/UI/PopularCities";

const HomePage = () => {
  return (
    <div className="w-full">
      <div>
        <Hader />
      </div>
      <div>
        <h5 className="text-xl font-semibold">Featured Therapist</h5>
        <FeaturedTherapist />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-7">
        <FeaturedTestimonial />
        <PopularCities />
      </div>
    </div>
  );
};

export default HomePage;
