import "./App.css";
import Footer from "./components/footer/Footer";
import Login from "./components/login/Login";
import { Space } from "antd";

function App() {
  return (
    <>
      <Space direction="vertical">
        <Login />
        <Footer />
      </Space>
    </>
  );
}

export default App;
