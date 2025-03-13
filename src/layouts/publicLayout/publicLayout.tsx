import { Layout } from "antd";

const PublicLayout = <T extends object>(
  AuthPage: React.ComponentType<T>,
  SvgIcon: string
) => {
  const { Sider } = Layout;

  const layoutStyle: React.CSSProperties = {
    height: "100vh",
    overflow: "hidden",
  };

  const siderStyle: React.CSSProperties = {
    padding: "20vh 0",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    background: "#23242D",
  };

  const iconStyle: React.CSSProperties = {
    width: "90%",
  };

  return (props: T) => (
    <>
      <Layout style={layoutStyle}>
        <Sider style={siderStyle} width="65%">
          <img style={iconStyle} src={SvgIcon} alt="" />
        </Sider>
        <AuthPage {...props} />
      </Layout>
    </>
  );
};

export default PublicLayout;
