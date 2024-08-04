import { Envelope, Lock, User } from "phosphor-react";
import { Button, Checkbox, Input, InputIcon, Label } from "keep-react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import {
  createUserWithEmailAndPassword,
  updateProfile,
  UserCredential,
} from "firebase/auth";
import { auth } from "../../lib/firebase.init";

const SignupForms = ({ handleDrawer }: any) => {
  const navigate = useNavigate();
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    acceptTerms: false,
  });

  const handleChange = (event: any) => {
    const { name, value, type, checked } = event.target;
    setFormValues({
      ...formValues,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSignup = async (event: any) => {
    event.preventDefault();
    const { name, email, password, acceptTerms } = formValues;

    if (acceptTerms) {
      try {
        const data: UserCredential = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );

        if (data?.user?.email) {
          await updateProfile(data.user, {
            displayName: name,
          });

          const token = await data.user.getIdToken();

          console.log(data.user);
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
    }
  };

  return (
    <div className="my-5">
      <form onSubmit={handleSignup} className="space-y-5">
        <fieldset className="space-y-3">
          <Label htmlFor="name">Name</Label>
          <div className="relative">
            <Input
              placeholder="@username"
              className="ps-11 bg-white outline-none focus:border-none"
              name="name"
              value={formValues.name}
              onChange={handleChange}
            />
            <InputIcon>
              <User size={19} color="#AFBACA" />
            </InputIcon>
          </div>
        </fieldset>
        <fieldset className="space-y-1">
          <Label htmlFor="email">Email</Label>
          <div className="relative">
            <Input
              placeholder="Enter your email"
              className="ps-11 bg-white outline-none focus:border-none"
              name="email"
              value={formValues.email}
              onChange={handleChange}
            />
            <InputIcon>
              <Envelope size={19} color="#AFBACA" />
            </InputIcon>
          </div>
        </fieldset>
        <fieldset className="space-y-1">
          <Label htmlFor="password">Password</Label>
          <div className="relative">
            <Input
              id="password"
              placeholder="Enter password"
              type="password"
              className="ps-11 outline-none focus:border-none"
              name="password"
              value={formValues.password}
              onChange={handleChange}
            />
            <InputIcon>
              <Lock size={19} color="#AFBACA" />
            </InputIcon>
          </div>
        </fieldset>
        <fieldset className="space-y-1">
          <Label htmlFor="confirm-password">Confirm Password</Label>
          <div className="relative">
            <Input
              id="confirmPassword"
              placeholder="Re-type password"
              type="password"
              className="ps-11 outline-none focus:border-none"
              name="confirmPassword"
              value={formValues.confirmPassword}
              onChange={handleChange}
            />
            <InputIcon>
              <Lock size={19} color="#AFBACA" />
            </InputIcon>
          </div>
        </fieldset>
        <fieldset className="flex items-center gap-2">
          <Checkbox
            id="checkbox"
            name="acceptTerms"
            checked={formValues.acceptTerms}
            onChange={handleChange}
          />
          <Label className="text-blue-400" htmlFor="checkbox">
            Accept Terms of Service
          </Label>
        </fieldset>
        <Button
          onClick={handleDrawer}
          className="mx-auto text-center bg-blue-500 w-[271px]"
          size="sm"
          type="submit"
        >
          Sign Up
        </Button>
      </form>
      <p className="text-center mt-3">
        <span>Already Have an Account?</span>
        <span>
          <Link to={"/login"} className="text-blue-400 hover:underline">
            Log in
          </Link>
        </span>
      </p>
    </div>
  );
};

export default SignupForms;
