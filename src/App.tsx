// import Button from "react-bootstrap/Button";
// import { useState } from "react";
import "./App.css";
import { AuthenticationPage } from "./Pages/AuthenticationPage";
import LandingPage from "./Pages/LandingPage";
import { BrowserRouter as Router, Routes, Route, Navigate} from "react-router-dom";

function App() {
  return (
    <div className="app">
      <Router>
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
      </Router>
    </div>
  );
}

export default App;
