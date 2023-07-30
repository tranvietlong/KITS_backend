import { useState } from "react";
import {
  Space,
  Input,
  Typography,
  Form,
  Button,
  Divider,
  Modal,
  Radio,
  DatePicker,
  Alert,
} from "antd";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const { Title, Text } = Typography;
function Login() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [firstName, setFisrtName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const showModal = () => {
    setIsModalOpen(true);
  };

  const onSignUp = async () => {
    console.log("onSignUp");
    try {
      const response = await axios.post("http://localhost:8080/api/v1/user", {
        username: firstName + " " + lastName,
        email: email,
        password: password,
        bio: "create new account " + lastName,
        created_at: new Date().toISOString(),
      });
      if (response.status === 200) {
        navigate("/home");
      } else {
        setError("An error occurred during login.");
      }
    } catch (e) {
      console.error(e);
      setError("An error occurred during login.");
    }
  };

  const onLogin = async () => {
    try {
      const response = await axios.post(
        "http://localhost:8080/api/v1/user/login",
        {
          email: email,
          password: password,
        }
      );
      console.log(response.data);
      if (response.status === 200) {
        navigate("/home");
      } else {
        setError("An error occurred during login.");
      }
    } catch (e) {
      console.error(e);
      setError("An error occurred during login.");
    }
  };

  const onClose = () => {
    setError(null);
  };

  return (
    <Space style={styles.container} align="center">
      {error && (
        <Alert
          message="Error"
          description={error}
          type="error"
          closable
          onClose={onClose}
          style={{position: 'absolute', top: 0, right: "45vw"}}
        />
      )}
      <Space direction="vertical" style={styles.leftSide}>
        <Title style={styles.title}>FlexBook</Title>
        <Text style={{ fontSize: 24 }}>
          Flexbook helps you connect and share with the people in your life.
        </Text>
      </Space>
      <Space style={styles.form}>
        <Form layout="vertical">
          <Form.Item name="username">
            <Input
              placeholder="Email address or phone number"
              style={{ height: 40 }}
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Item>
          <Form.Item name="password">
            <Input
              style={{ width: 416, height: 40 }}
              placeholder="Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Item>
          <Button type="primary" onClick={onLogin} style={styles.btnLogIn}>
            Login
          </Button>
          <Button type="link" href="#">
            Forgotten password
          </Button>
          <Divider style={{ margin: 20 }} />
          <Button style={styles.btnCreate} onClick={showModal}>
            Create New Account
          </Button>

          <Modal title="Login" open={isModalOpen} footer="">
            <Space
              align="center"
              direction="vertical"
              style={styles.formSignUp}
            >
              <Space>
                <Space>
                  <Input
                    type="text"
                    placeholder="First Name"
                    style={styles.input2}
                    value={firstName}
                    onChange={(e) => setFisrtName(e.target.value)}
                  />
                </Space>
                <Space>
                  <Input
                    type="text"
                    placeholder="Surname"
                    style={styles.input2}
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </Space>
              </Space>
              <Space>
                <Input
                  type="text"
                  placeholder="Mobile number or email address"
                  style={styles.input}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Space>
              <Space>
                <Input
                  type="text"
                  placeholder="New password"
                  style={styles.input}
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
              </Space>
              <Space>
                <Text>Date of Birth</Text>
              </Space>
              <Space>
                <DatePicker />
              </Space>
              <Space>
                <Text>Gender</Text>
              </Space>
              <Space>
                <Radio.Group name="gender">
                  <Radio value="male">Male</Radio>
                  <Radio value="female">Female</Radio>
                  <Radio value="other">Other</Radio>
                </Radio.Group>
              </Space>
              By clicking Sign Up, you agree to our Terms, Data Policy....
              <Space>
                <Button type="primary" onClick={onSignUp}>
                  Sign Up
                </Button>
              </Space>
            </Space>
          </Modal>
        </Form>
      </Space>
    </Space>
  );
}

const styles = {
  container: {
    minHeight: "75vh",
    width: "100vw",
    backgroundColor: "#F0F2F5",
  },
  title: {
    color: "#0D6EFD",
    fontSize: 64,
    marginBottom: 0,
  },
  form: {
    padding: 20,
    height: 350,
    backgroundColor: "#fff",
    textAlign: "center",
    boxShadow: "0 .5rem 1rem rgba(0,0,0,.15)",
    borderRadius: 10,
  },
  btnCreate: {
    width: "70%",
    backgroundColor: "#198754",
    height: 50,
    alignItems: "center",
    color: "#FFFFFF",
    fontSize: 20,
  },
  btnLogIn: {
    width: "100%",
    margin: "16px 0",
    height: 40,
    alignItems: "center",
    fontSize: 16,
  },
  leftSide: {
    width: "55%",
    padding: "40px 100px",
  },
  formSignUp: {
    width: 500,
  },
  input: {
    width: 450,
  },
  input2: {
    width: 450 / 2 - 5,
  },
};
export default Login;
