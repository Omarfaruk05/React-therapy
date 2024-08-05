import { Envelope, Lock, User } from "phosphor-react";
import { Button, Checkbox, Input, InputIcon, Label } from "keep-react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { FirebaseAuthEmailPasswordCreateUser } from "../../lib/authentication";

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
  const isPasswordMatched =
    (formValues.password || formValues.confirmPassword) &&
    formValues.password !== formValues.confirmPassword;
  console.log(isPasswordMatched);
  const disabled = !formValues?.acceptTerms || isPasswordMatched;

  const handleSignup = async (event: any) => {
    event.preventDefault();
    const { name, email, password, acceptTerms } = formValues;

    const data = await FirebaseAuthEmailPasswordCreateUser(
      name,
      email,
      password,
      acceptTerms
    );

    if (data?.user?.email) {
      handleDrawer;
      navigate("/");
      window.location.reload();
    }
  };

  return (
    <div className="my-5">
      <form onSubmit={handleSignup} className="space-y-5">
        <fieldset className="space-y-3">
          <Label htmlFor="name">Name</Label>
          <div className="relative">
            <Input
              required
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
              required
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
              required
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
              required
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
            {isPasswordMatched && (
              <small className="text-red-500 mx-2">
                Password and confirm password is not matched.
              </small>
            )}
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
          {...({ disabled } as any)}
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
