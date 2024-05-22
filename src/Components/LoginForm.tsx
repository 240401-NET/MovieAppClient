import { useState } from "react";
import "../Pages/AuthenticationPage.css";
import { useAuthentication } from "../contexts/AuthenticationContext";

interface LoginFormState {
  username: string;
  password: string;
}

/**
 * LoginForm component represents a form for user login.
 */
export const LoginForm: React.FC = () => {
  const [state, setState] = useState<LoginFormState>({
    username: "",
    password: "",
  });
  
  const { loginUser } = useAuthentication();

  const handleLoginSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    loginUser(state.username, state.password);
  };

  return (
    <div className="Login">
      <h1>Login</h1>
      <form onSubmit={handleLoginSubmit}>
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
          Login
        </button>
      </form>
    </div>
  );
};
