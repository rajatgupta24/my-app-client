// import React from "react";
import { Layout } from "antd";

import AppHeader from "../header/header";
import Sidebar from "../sidebar/sidebar";

const PrivateLayout = <T extends object>(
  WrappedComponent: React.ComponentType<T>
) => {
  const { Header, Sider } = Layout;

  const headerStyle: React.CSSProperties = {
    height: "4.125rem",
    borderBottom: "1px dashed #6c6c6e",
  };

  return (props: T) => (
    <>
      <Layout>
        <Sider width="15%">
          <Sidebar />
        </Sider>
        <Layout>
          <Header style={headerStyle}>
            <AppHeader />
          </Header>
          <WrappedComponent {...props} />
        </Layout>
      </Layout>
    </>
  );
};

export default PrivateLayout;
