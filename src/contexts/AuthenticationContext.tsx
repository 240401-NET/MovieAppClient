import React, { useState, useEffect, createContext, useContext } from "react";
import { useNavigate } from "react-router-dom";
import {
  UserLogin,
  UserLogout,
  UserRegistration,
} from "../services/UserServices";

interface AuthenticationContextType {
  // this will be dependent on the authentication method we are using--either tokens or cookies; adjust as necessary
  user: string | null;
  token: string;
  loginUser: (username: string, password: string) => void;
  registerUser: (
    name: string,
    username: string,
    email: string,
    password: string
  ) => void;
  logoutUser: () => void;
  isLoggedIn: () => boolean;
}

type Props = { children: React.ReactNode };

const AuthenticationContext = createContext<AuthenticationContextType>(
  {} as AuthenticationContextType
);

export const AuthenticationProvider = ({ children }: Props) => {
  // call useNavigate from React-Router to allow navigation between pages
  const navigate = useNavigate();

  // these variables can change depending on how identity authentication is set up (cookies/token return)
  const [user, setUser] = useState<string | null>(null);
  const [token, setToken] = useState<string>("");

  // this state variable lets all components that use this context know if user is currently logged in
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  // if using a cookie based authentication system, call this useEffect on initial page load; if not just comment out
  useEffect(() => {
    // depending on cookie configuration is set up properly we might not have direct access to the response cookie
    // therefore, we set our own temp token to let the browser know that we got a successful login response and can
    // render pages that we normally wouldn't show to a user thats not logged in
    const user = localStorage.getItem("user");
    const token = localStorage.getItem("token");
    if (user && token) {
      setUser(user);
      setToken(token);
    }
    setIsAuthenticated(true);
  }, []);

  // async function to resgister user
  const registerUser = async (
    name: string,
    username: string,
    email: string,
    password: string
  ) => {
    await UserRegistration(name, username, email, password)
      .then((res) => {
        if (res) {
          // else, do something else--change as necessary
          navigate("/login");
        }
      })
      .catch((error) => console.error(error));
  };

  const loginUser = async (username: string, password: string) => {
    await UserLogin(username, password)
      .then((res) => {
        if (res) {
          // sets custom token in local storage can get rid of based off how we implemented identity
          localStorage.setItem("user", username);
          localStorage.setItem(
            "token",
            "customToken" + res.statusText + res.url
          );
          setUser(username);
          setToken("customToken" + res.statusText + res.url);

          // redirect user on successful login and gives user an alert as well
          navigate("/movielandingpage");
          window.alert("Login successful. Redirecting to landing page.");
        }
      })
      .catch((error) => console.error(error));
  };
 
  const logoutUser = async() => {

          // remove items from local storage--once again remove or change once we know how identity was implemented
          localStorage.removeItem("user");
          localStorage.removeItem("token");
          setUser(null);
          setToken("");

          // navigate user to login page
          await navigate("/login");
          window.alert("Logout successful");
  };

  // just checks if user is null then returns a boolean value associated with that check
  const isLoggedIn = () => {
    return !!user;
  };

  return (
    <AuthenticationContext.Provider
      value={{ loginUser, isLoggedIn, user, token, registerUser, logoutUser }}
    >
      {isAuthenticated ? children : null}
    </AuthenticationContext.Provider>
  );
};

// export useAuthentication so any child component can call this and have access to the methods and states
export const useAuthentication = () => useContext(AuthenticationContext);
