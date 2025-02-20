import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Main from "./components/main/main";
import Login from "./components/auth/login/login";
import MainLayout from "./components/layout/layout";
import Signup from "./components/auth/signup/signup";
import Reporting from "./components/reporting/reporting";
import ForgotPassword from "./components/auth/forgotPassword/forgotPassword";

import "./App.css";

function App() {
  const MainWithLayout = MainLayout(Main);
  const ReportingWithLayout = MainLayout(Reporting);

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<MainWithLayout />} />
          <Route path="/reporting" element={<ReportingWithLayout />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />

          {/* <Route path="*" element={<NotFound />} /> */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
