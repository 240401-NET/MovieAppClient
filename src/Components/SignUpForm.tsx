import { useState } from "react";

interface SignupFormState {
  username: string;
  email: string;
  password: string;
}

/**
 * SignUpForm component represents a form for user sign up.
 */
export const SignUpForm: React.FC = () => {
  const [state, setState] = useState<SignupFormState>({
    username: "",
    email: "",
    password: "",
  });

  return (
    <div>
      <h1>Sign Up</h1>
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
          <label htmlFor="email">Email</label>
          <input
            type="email"
            value={state.email}
            onChange={(e) => setState({ ...state, email: e.target.value })}
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
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};
