import { Envelope, Lock, User } from "phosphor-react";
import { Button, Checkbox, Input, InputIcon, Label } from "keep-react";
import { Link } from "react-router-dom";

const SignupForms = ({ handleDrawer }: any) => {
  const handleSignup = (event: any) => {
    event.preventDefault();
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
            />
            <InputIcon>
              <User size={19} color="#AFBACA" />
            </InputIcon>
          </div>
        </fieldset>
        <fieldset className="space-y-1">
          <Label htmlFor="name">Email</Label>
          <div className="relative">
            <Input
              placeholder="Enter your email"
              className="ps-11 bg-white outline-none focus:border-none"
              name="email"
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
              id="password"
              placeholder="Re-type password"
              type="password"
              className="ps-11 outline-none focus:border-none"
              name="confirmPassword"
            />
            <InputIcon>
              <Lock size={19} color="#AFBACA" />
            </InputIcon>
          </div>
        </fieldset>{" "}
        <fieldset className="flex items-center gap-2">
          <Checkbox id="checkbox" />
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
      <p className="text-center mt-3 ">
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
