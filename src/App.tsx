import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from "./pages/auth/login/login";
import Signup from "./pages/auth/signup/signup";
import ForgotPassword from "./pages/auth/forgotPassword/forgotPassword";
import ResetPassword from "./pages/auth/resetPassword/resetPassword";

import Main from "./pages/main/main";
import Reporting from "./pages/reporting/reporting";

import PublicLayout from "./components/layouts/publicLayout";
import PrivateLayout from "./components/layouts/privateLayout";

import LoginIcon from "./assets/login.svg";
import SignupIcon from "./assets/signup.svg";

import "./App.css";

function App() {
  const LoginPage = PublicLayout(Login, LoginIcon);
  const SignupPage = PublicLayout(Signup, SignupIcon);
  const ForgotPasswordPage = PublicLayout(ForgotPassword, LoginIcon);
  const ResetPasswordPage = PublicLayout(ResetPassword, LoginIcon);

  const MainWithLayout = PrivateLayout(Main);
  const ReportingWithLayout = PrivateLayout(Reporting);

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<MainWithLayout />} />
          <Route path="/reporting" element={<ReportingWithLayout />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/forgot-password" element={<ForgotPasswordPage />} />
          <Route path="/reset-password" element={<ResetPasswordPage />} />

          {/* <Route path="*" element={<NotFound />} /> */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
