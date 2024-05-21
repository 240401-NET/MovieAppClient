import { useState } from "react";
import "../Pages/AuthenticationPage.css";
import { useAuthentication } from "../contexts/AuthenticationContext";

interface SignupFormState {
  name: string;
  username: string;
  email: string;
  password: string;
}

/**
 * SignUpForm component represents a form for user sign up.
 */
export const SignUpForm: React.FC = () => {
  const [state, setState] = useState<SignupFormState>({
    name: "",
    username: "",
    email: "",
    password: "",
  });
  const { registerUser } = useAuthentication();

  const handleSignupSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    registerUser(state.name, state.username, state.email, state.password);
  };

  return (
    <div className="Signup">
      <h1>Sign Up</h1>
      <form onClick={handleSignupSubmit}>
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            value={state.name}
            onChange={(e) => setState({ ...state, name: e.target.value })}
            className="form-control rounded"
          />
        </div>
        <div>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            value={state.username}
            onChange={(e) => setState({ ...state, username: e.target.value })}
            className="form-control rounded"
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={state.email}
            onChange={(e) => setState({ ...state, email: e.target.value })}
            className="form-control rounded"
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={state.password}
            onChange={(e) => setState({ ...state, password: e.target.value })}
            className="form-control rounded"
          />
        </div>
        <button className="btn btn-primary w-50" type="submit">
          Sign Up
        </button>
      </form>
    </div>
  );
};
