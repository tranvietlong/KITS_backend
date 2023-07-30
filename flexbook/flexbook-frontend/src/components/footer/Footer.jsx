import { Space, Typography, Divider } from "antd";

const { Text } = Typography;

function Footer() {
  const languages = [
    "English (US)",
    "Tiếng Việt",
    "中文(台灣)",
    "한국어",
    "日本語",
  ];

  const actions = ["Sign Up", "Login", "Messenger", "Facebook Lite", "Watch"];
  return (
    <>
      <Space style={Styles.container} direction="vertical">
        <Space style={Styles.list}>
          {languages.map((lang, i) => (
            <li key={i}>
              <a href="#" style={{ color: "rgba(33, 37, 41, 0.75)" }}>
                {lang}
              </a>
            </li>
          ))}
        </Space>
        <Divider style={Styles.divider} />
        <Space style={Styles.list}>
          {actions.map((item, i) => (
            <li key={i}>
              <a href="#" style={{ color: "rgba(33, 37, 41, 0.75)" }}>
                {item}
              </a>
            </li>
          ))}
        </Space>
        <Space style={Styles.list}>
          <Text style={{ color: "rgba(33, 37, 41, 0.75)" }}>
            Flexbook &#169; 2023
          </Text>
        </Space>
      </Space>
    </>
  );
}

const Styles = {
  container: {
    padding: "20px 60px",
    textAlign: "left",
  },
  divider: {
    width: "90vw",
    margin: 10,
  },
  list: {
    textDecoration: "none",
    listStyle: "none",
  },
};

export default Footer;
