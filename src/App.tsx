import "./App.css";

import { Layout } from "antd";

const { Header, Footer, Sider, Content } = Layout;

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Reporting from "./components/reporting/reporting";
import Sidebar from "./components/sidebar/sidebar";
import Main from "./components/main/main";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <Router>
        <Layout>
          <Sider width="15%">
            <Sidebar />
          </Sider>
          <Layout>
            {/* <Header>Header</Header> */}
            <Routes>
              <Route path="/" element={<Main />} />
              <Route path="/reporting" element={<Reporting />} />
              {/* <Route path="/about" element={<About />} />
            <Route path="*" element={<NotFound />} /> */}
            </Routes>

            {/* <Footer>Footer</Footer> */}
          </Layout>
        </Layout>
      </Router>
    </>
  );
}

export default App;
