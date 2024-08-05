import destopBg from "../assets/singup.png";
import mobileBg from "../assets/mobileBg.png";
import SignupForms from "../components/Forms/SignupForms";
import { Drawer, DrawerBody, DrawerContent } from "keep-react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const SignupPage = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const navigate = useNavigate();

  const handleDrawer = () => {
    setIsOpen(!isOpen);
  };

  const token = localStorage.getItem("accessToken");

  useEffect(() => {
    if (token) {
      navigate("/");
    }
  }, [token]);
  return (
    <div>
      {/* for web  */}
      <div className="hidden max-w-5xl h-screen mx-auto md:flex justify-center items-center">
        <div className="grid grid-cols-2 gap-24 justify-center items-center md:mx-2">
          <div>
            <div className=" space-y-3">
              <h2 className="uppercase text-[40px] font-semibold text-[#4285F3]">
                Logo
              </h2>
              <h3 className="font-semibold text-3xl">
                Sign Up To Your Account
              </h3>
              <p>
                <span>
                  Welcome Back! By click the sign up button, you're agree to
                  Zenitood Terms and Service and acknlowledge the
                </span>
                <span className="text-blue-400 hover:underline">
                  <a href="#"> Privacy and Policy</a>
                </span>
              </p>
            </div>
            <div>
              <SignupForms />
            </div>
          </div>
          <div
            className=" h-[720px] xl:w-[648px] rounded-2xl grid place-items-center"
            style={{ backgroundImage: `url(${destopBg})` }}
          >
            <div className="text-center p-8 bg-[#152A16]/65 backdrop-blur-lg max-w-[341px] rounded-xl max-h-[143px]">
              <h5 className="text-blue-400 text-2xl">Create Account</h5>
              <h5 className="text-2xl text-white">Fill in Your Information</h5>
            </div>
          </div>
        </div>
      </div>
      {/* for mobile  */}
      <div
        className="block md:hidden h-screen w-dvw px-7 pt-16"
        style={{ backgroundImage: `url(${mobileBg})` }}
      >
        <div className=" space-y-3">
          <h2 className="text-center uppercase text-[40px] font-semibold text-[#4285F3]">
            Logo
          </h2>
          <h3 className="text-center text-[#1A2531] font-semibold text-3xl">
            Sign Up To Your Account
          </h3>
          <p className="text-white">
            <span>
              Welcome Back! By click the sign up button, you're agree to
              Zenitood Terms and Service and acknlowledge the
            </span>
            <span className="text-blue-400 hover:underline">
              <a href="#"> Privacy and Policy</a>
            </span>
          </p>
        </div>
        <div
          onClick={handleDrawer}
          className="text-center p-8 my-20 mx-auto bg-[#152A16]/65 backdrop-blur-lg max-w-[341px] rounded-xl max-h-[143px]"
        >
          <h5 className="text-blue-400 text-2xl underline">Create Account</h5>
          <h5 className="text-2xl text-white">Fill in Your Information</h5>
        </div>
        {/* drawer  */}
        <Drawer isOpen={isOpen} onOpenChange={setIsOpen}>
          <DrawerBody>
            <DrawerContent>
              <div className="h-[75vh] w-full mx-auto font-semibold space-y-3 px-4 pt-12">
                <h2 className="text-center font-semibold text-3xl">Sing Up</h2>
                <SignupForms handleDrawer={handleDrawer} />
              </div>
            </DrawerContent>
          </DrawerBody>
        </Drawer>
      </div>
    </div>
  );
};

export default SignupPage;
