import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/authContext";

import Home from "./pages/home/home";
import Login from "./pages/auth/login/login";
import Signup from "./pages/auth/signup/signup";
import PublicLayout from "./layouts/publicLayout/publicLayout";
import PrivateRoute from "./components/privateRoute/privateRoute";
import ResetPassword from "./pages/auth/resetPassword/resetPassword";
import ForgotPassword from "./pages/auth/forgotPassword/forgotPassword";

import LoginIcon from "./assets/login.svg";
import SignupIcon from "./assets/signup.svg";

import "./App.scss";

function App() {
  const LoginPage = PublicLayout(Login, LoginIcon);
  const SignupPage = PublicLayout(Signup, SignupIcon);
  const ForgotPasswordPage = PublicLayout(ForgotPassword, LoginIcon);
  const ResetPasswordPage = PublicLayout(ResetPassword, LoginIcon);

  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/forgot-password" element={<ForgotPasswordPage />} />
          <Route path="/reset-password" element={<ResetPasswordPage />} />

          <Route element={<PrivateRoute />}>
            <Route path="/" element={<Home />} />
          </Route>
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
