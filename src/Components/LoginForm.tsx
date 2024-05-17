import { useState } from "react";
import "../Pages/AuthenticationPage.css";

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

  //might need to add useAuth() here

  return (
    <div className="Login">
      <h1>Login</h1>
      <form>
        <div>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            value={state.username}
            onChange={(e) => setState({ ...state, username: e.target.value })}
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={state.password}
            onChange={(e) => setState({ ...state, password: e.target.value })}
          />
        </div>
        <button className="btn btn-primary w-50" type="submit">
          Login
        </button>
      </form>
    </div>
  );
};
