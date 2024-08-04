import { Envelope, Lock } from "phosphor-react";
import { Button, Checkbox, Input, InputIcon, Label } from "keep-react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { firebaseAuthEmailPasswordSignIn } from "../../lib/authentication";

const LoginForms = ({ handleDrawer }: any) => {
  const navigate = useNavigate();
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });

  const handleChange = (event: any) => {
    const { name, value, type, checked } = event.target;
    setFormValues({
      ...formValues,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSignin = async (event: any) => {
    event.preventDefault();
    const { email, password, rememberMe } = formValues;
    const data = await firebaseAuthEmailPasswordSignIn(
      email,
      password,
      rememberMe
    );

    if (data?.user?.email) {
      navigate("/");
    }

    handleDrawer;
  };

  return (
    <div className="my-5">
      <form onSubmit={handleSignin} className="space-y-5">
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
        <fieldset className="flex items-center gap-2">
          <Checkbox
            id="checkbox"
            name="rememberMe"
            checked={formValues.rememberMe}
            onChange={handleChange}
          />
          <div className="flex justify-between w-full">
            <Label htmlFor="checkbox">Remember me</Label>
            <a className="text-sm text-blue-400 hover:underline" href="#">
              Forgot password?
            </a>
          </div>
        </fieldset>
        <Button
          className="mx-auto text-center bg-blue-500 w-[271px]"
          size="sm"
          type="submit"
        >
          Sign In
        </Button>
      </form>
      <p className="text-center mt-3">
        <span>Don't Have an Account?</span>
        <span>
          <Link to={"/signup"} className="text-blue-400 hover:underline">
            Create Account
          </Link>
        </span>
      </p>
    </div>
  );
};

export default LoginForms;
