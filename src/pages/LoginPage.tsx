import { Button, Divider } from "keep-react";
import destopBg from "../assets/singup.png";
import mobileBg from "../assets/mobileBg.png";
import LoginForms from "../components/Forms/LoginForms";
import { GoogleLogo, FacebookLogo } from "phosphor-react";
import { Drawer, DrawerBody, DrawerContent } from "keep-react";
import { useState } from "react";
import {
  FacebookAuthProvider,
  GoogleAuthProvider,
  signInWithPopup,
  UserCredential,
} from "firebase/auth";
import { auth } from "../lib/firebase.init";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const googleSignIn = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const data: UserCredential = await signInWithPopup(auth, provider);

      if (data?.user?.email) {
        const token = await data.user.getIdToken();
        localStorage.setItem("accessToken", token);
        localStorage.setItem("email", data.user.email);
        localStorage.setItem("name", data.user.displayName as string);
        navigate("/");
        window.location.reload();
      }
    } catch (error: any) {
      console.log(error);
      console.error(error.message);
    }
  };
  const facebookSignIn = async () => {
    try {
      const provider = new FacebookAuthProvider();
      const data = await signInWithPopup(auth, provider);

      if (data?.user?.email) {
        const token = await data.user.getIdToken();
        localStorage.setItem("accessToken", token);
        localStorage.setItem("email", data.user.email);
        localStorage.setItem("name", data.user.displayName as string);
        navigate("/");
        window.location.reload();
      }
    } catch (error: any) {
      console.log(error);
      console.error(error.message);
    }
  };

  const handleDrawer = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      <div className="hidden max-w-5xl h-screen mx-auto md:flex justify-center items-center">
        <div className="grid grid-cols-2 gap-24 justify-center items-center md:mx-2">
          <div>
            <div className=" space-y-3">
              <h2 className="uppercase text-[40px] font-semibold text-[#4285F3]">
                Logo
              </h2>
              <h3 className="font-semibold text-3xl">Log In To Your Account</h3>
              <p>Welcome Back! Select a method to log in </p>
            </div>
            <div className="my-7 flex justify-between">
              <Button
                onClick={googleSignIn}
                className="px-7 text-black shadow-md bg-gradient-to-r from-[#E4E4E4] to-[#FFFFFF]"
              >
                <GoogleLogo size={20} className="mr-3" />
                Google
              </Button>
              <Button
                onClick={facebookSignIn}
                className="shadow-md px-7 bg-gradient-to-r from-[#298FFF] to-[#0778F5]"
              >
                <FacebookLogo size={20} className="mr-5 " />
                Facebook
              </Button>
            </div>
            <div>
              <Divider variant="center">Or Continue with Email</Divider>
            </div>
            <div>
              <LoginForms />
            </div>
          </div>
          <div
            className=" h-[720px] xl:w-[648px] rounded-2xl grid place-items-center"
            style={{ backgroundImage: `url(${destopBg})` }}
          >
            <div className="text-center p-8 bg-[#152A16]/65 backdrop-blur-lg w-[341px] rounded-xl h-[143px]">
              <h5 className="text-2xl text-white">
                <span className="text-blue-400">Sign In</span>{" "}
                <span> to view all the massage therapists</span>
              </h5>
            </div>
          </div>
        </div>
      </div>
      <div
        className="block md:hidden h-screen w-screen px-7 pt-16"
        style={{ backgroundImage: `url(${mobileBg})` }}
      >
        <div className=" space-y-3">
          <h2 className="text-center uppercase text-[40px] font-semibold text-[#4285F3]">
            Logo
          </h2>
          <h3 className="text-center text-[#1A2531] font-semibold text-3xl">
            Sign In To Your Account
          </h3>
          <p className="text-white text-center pt-3">
            Welcome Back! Select a method to log in{" "}
          </p>
        </div>
        <div className="mx-auto text-center mt-20 p-8 bg-[#152A16]/65 backdrop-blur-lg w-[341px] rounded-xl h-[143px]">
          <h5 onClick={handleDrawer} className="text-2xl text-white">
            <span className="text-blue-400 underline">Sign In</span>{" "}
            <span> to view all the massage therapists</span>
          </h5>
        </div>
        {/* drawer  */}
        <Drawer isOpen={isOpen} onOpenChange={setIsOpen}>
          <DrawerBody>
            <DrawerContent>
              <div className="h-[70vh] w-full mx-auto font-semibold space-y-3 px-4 pt-12">
                <div className=" space-y-3">
                  <h2 className="uppercase text-[40px] font-semibold text-[#4285F3]">
                    Logo
                  </h2>
                  <h3 className="font-semibold text-3xl">
                    Log In To Your Account
                  </h3>
                  <p>Welcome Back! Select a method to log in </p>
                </div>
                <div className="my-7 flex justify-between">
                  <Button className="px-7 text-black shadow-md bg-gradient-to-r from-[#E4E4E4] to-[#FFFFFF]">
                    <GoogleLogo size={20} className="mr-3" />
                    Google
                  </Button>
                  <Button className="shadow-md px-7 bg-gradient-to-r from-[#298FFF] to-[#0778F5]">
                    <FacebookLogo size={20} className="mr-5 " />
                    Facebook
                  </Button>
                </div>
                <div>
                  <Divider variant="center">Or Continue with Email</Divider>
                </div>
                <LoginForms handleDrawer={handleDrawer} />
              </div>
            </DrawerContent>
          </DrawerBody>
        </Drawer>
      </div>
    </div>
  );
};

export default LoginPage;
