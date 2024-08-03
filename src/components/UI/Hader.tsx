import { Button, Input } from "keep-react";
import CartLayout from "../../layout/CartLayout";
import haderBg from "../../assets/Group 1000001700.png";
import vector from "../../assets/Vector.png";

const Hader = () => {
  return (
    <CartLayout>
      <div className="flex flex-col md:flex-row gap-4 justify-between items-center">
        <div>
          <div className="space-y-3 max-w-lg">
            <h5 className="text-2xl font-semibold">
              I'm Looking for Massage Therapist Near...
            </h5>
            <p>
              <span>
                In using this site, I agree to be bound by the Terms of{" "}
              </span>
              <span className="text-blue-400 hover:underline">
                {" "}
                Service and Privacy Policy
              </span>
            </p>
          </div>
          <div className="hidden md:block">
            <form className="flex items-center relative my-4">
              <Input
                className="ps-11 bg-[#EEF2F5]"
                placeholder="ZIP code or city name"
              />

              <Button className="absolute right-[5px] py-[5px]" type="submit">
                GO
              </Button>
            </form>
          </div>
        </div>
        <div
          className="mt-8 md:mt-0 md:pl-12 lg:pl-32 bg-no-repeat"
          style={{
            backgroundImage: `url(${vector})`,
          }}
        >
          <img className="" src={haderBg} alt="" />
          <div className="mt-8 md:hidden block">
            <form className="flex items-center relative my-4">
              <Input
                className="ps-11 bg-[#EEF2F5]"
                placeholder="ZIP code or city name"
              />

              <Button className="absolute right-[5px] py-[5px]" type="submit">
                GO
              </Button>
            </form>
          </div>
        </div>
      </div>
    </CartLayout>
  );
};

export default Hader;
