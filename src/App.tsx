// import Button from "react-bootstrap/Button";
// import { useState } from "react";
import "./App.css";
import { AuthenticationPage } from "./Pages/AuthenticationPage";
import LandingPage from "./Pages/LandingPage";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { AuthenticationProvider } from "./contexts/AuthenticationContext";

function App() {
  return (
    <div className="App">
      <Router>
        <AuthenticationProvider>
        <Routes>
          <Route
            path="/login"
            element={<AuthenticationPage initialMode="login" />}
          />
          <Route
            path="/signup"
            element={<AuthenticationPage initialMode="signup" />}
          />
          <Route path="/" element={<Navigate to="/signup" />} />
          <Route path="*" element={<LandingPage />} />
        </Routes>
        </AuthenticationProvider>
      </Router>
    </div>
  );
}

export default App;
