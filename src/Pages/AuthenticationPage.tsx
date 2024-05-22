import React, { useEffect, useState } from "react";
import { LoginForm } from "../Components/LoginForm";
import { SignUpForm } from "../Components/SignUpForm";
import "./AuthenticationPage.css";
import { useLocation } from "react-router";

interface AuthenticationPageProps {
  initialMode: "login" | "signup";
}
/**
 * Renders the authentication page.
 * @param {AuthenticationPageProps} props - The component props.
 * @param {string} props.initialMode - The initial mode of the authentication page, either "login" or "signup".
 * @returns {JSX.Element} The rendered authentication page.
 */
export const AuthenticationPage: React.FC<AuthenticationPageProps> = ({
  initialMode,
}) => {
  const [mode, setMode] = useState<"login" | "signup">(initialMode);
  const location = useLocation();
  console.log("location: ", typeof location)

  useEffect(() => {
    const path = location.pathname;
    if (path.includes("login")) {
      setMode("login");
    } else if (path.includes("signup")) {
      setMode("signup")
    }
  }, [location])
  /**
   * Toggles the mode between "login" and "signup".
   */
  console.log("mode outside toggle: ", mode)
  const toggleMode = () => {
    console.log("toggleMode", mode)
    setMode(mode === "login" ? "signup" : "login");
  };

  return (
    <div className="container-fluid">
      <div className="auth_container">
        {/* <h1>{mode === "login" ? "Login" : "Sign Up"}</h1> */}
        {mode === "login" ? <LoginForm /> : <SignUpForm />}
        <p onClick={toggleMode} className="text-center cursor-pointer">
          {mode === "login" ? (
            <>
              Don't have an account?{" "}
              <span className="text-primary">Sign up here.</span>
            </>
          ) : (
            <>
              Already have an account?{" "}
              <span className="text-primary">Login here.</span>
            </>
          )}
        </p>
      </div>
    </div>
  );
};