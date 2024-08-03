import FeaturedTherapist from "../components/UI/FeaturedTherapist";
import Hader from "../components/UI/Hader";

const HomePage = () => {
  return (
    <div>
      <div>
        <Hader />
      </div>
      <div>
        <h5 className="text-xl font-semibold">Featured Therapist</h5>
        <FeaturedTherapist />
      </div>
    </div>
  );
};

export default HomePage;
