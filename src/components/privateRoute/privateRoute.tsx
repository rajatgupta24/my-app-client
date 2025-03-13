import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

import { Layout } from "antd";

import AppHeader from "../header/header";
import Sidebar from "../sidebar/sidebar";

const PrivateRoute = () => {
  const { token } = useAuth();
  const location = useLocation();
  const isAuthenticated = !!token;
  const { Header, Sider } = Layout;
  const headerStyle: React.CSSProperties = {
    height: "4.125rem",
    padding: "0",
    borderBottom: "1px dashed #6c6c6e",
  };

  return (
    <>
      {isAuthenticated ? (
        <Layout>
          <Sider width="15%">
            <Sidebar />
          </Sider>
          <Layout>
            <Header style={headerStyle}>
              <AppHeader />
            </Header>
            <Outlet />
          </Layout>
        </Layout>
      ) : (
        <Navigate to="/login" state={{ from: location }} replace />
      )}
    </>
  );
};

export default PrivateRoute;
