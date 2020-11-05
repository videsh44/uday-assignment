import React, { useState, useEffect } from "react";
import { message, Input, Button } from "antd";
import { connect } from "react-redux";
import { loginUser, logoutUser } from "../src/actions/authActions";
import { LockOutlined, LoginOutlined, UserOutlined } from "@ant-design/icons";

import history from "./history";

import "antd/dist/antd.css";

const Login = (props) => {
  //const [isLoged, setIsLoged] = useState(false);
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  // console.log(props.cookies);
  //  console.log(props.userAuth.isSignedIn);

  const setCookies = () => {
    if (props.userAuth.isSignedIn) {
      const { cookies } = props;
      if (cookies) {
        const { isSignedIn, userName } = props.userAuth;
        cookies.set("isSignedIn", isSignedIn, { path: "/" });
        cookies.set("userName", userName, { path: "/" });
      }
      // console.log("yes");

      //  history.push("/");
    }
  };

  useEffect(() => {
    if (props.userAuth.isSignedIn) {
      history.push("/uday-assignment");
    }
    setCookies();
  }, [props.userAuth.isSignedIn]);

  const handleLogin = async () => {
    if (userName === "" || userName === null || userName === undefined) {
      message.warning("Please Enter Username");
      return;
    }
    if (password === "" || password === null || password === undefined) {
      message.warning("Please Enter password");
      return;
    }

    let formValues = {
      userName,
      password,
    };

    props.loginUser(formValues);
  };

  const onUserNameChange = (e) => {
    setUserName(e.target.value);
  };

  const onPassChange = (e) => {
    setPassword(e.target.value);
  };

  return (
    <div
      style={{
        backgroundImage:
          "url('https://i.pinimg.com/originals/bc/27/60/bc27609dca848b8853968d5cf11e6692.jpg')",
        width: "100%",
        backgroundRepeat: "repeat-x",
        backgroundSize: "cover",
        minHeight: "100vh",
      }}
    >
      <div className="container">
        <div
          style={{
            maxWidth: "520px",
            margin: "0px auto",
            padding: "30px",
            background: "#fff",
            boxShadow: "-1px 4px 28px 0px rgba(0,0,0,0.75)",
            marginTop: "15%",
            color: "#000",
          }}
        >
          <div>
            <div style={{ textAlign: "center" }}>
              <img
                src="https://img.icons8.com/carbon-copy/2x/login-rounded-right.png"
                width="100px"
              />
            </div>
            <div style={{ margin: "30px" }}>
              <label>Username</label>
              <Input
                onChange={onUserNameChange}
                prefix={<UserOutlined style={{ color: "rgba(0,0,0,.25)" }} />}
                placeholder="username "
              />
            </div>
            <div style={{ margin: "30px" }}>
              <label>Password</label>
              <Input
                onChange={onPassChange}
                prefix={<LockOutlined style={{ color: "rgba(0,0,0,.25)" }} />}
                type="password"
                placeholder="Password"
              />
            </div>
            <div style={{ textAlign: "center" }}>
              <Button
                onClick={handleLogin}
                type="primary"
                className="login-form-btn"
              >
                <LoginOutlined />
                Log in
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  return { userAuth: state.userAuth, cookies: ownProps.cookies };
};
export default connect(mapStateToProps, { loginUser, logoutUser })(Login);
