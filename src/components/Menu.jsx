import React from "react";
import { connect } from "react-redux";
import { logoutUser } from "../actions/authActions";
import { withCookies } from "react-cookie";
import ResponsiveMenu from "react-responsive-navbar";
import { Button, Popconfirm } from "antd";
import {
  CloseCircleOutlined,
  LogoutOutlined,
  MenuOutlined,
} from "@ant-design/icons";
import TextBoxInputOne from "./home/TextBoxInputOne";
import TextBoxInputTwo from "./home/TextBoxInputTwo";

const MenuIndex = (props) => {
  // console.log("props.userAuth", props.user);

  const onLogOutUser = () => {
    const { cookies } = props;
    cookies.remove("isSignedIn", { path: "/" });
    cookies.remove("userName", { path: "/" });
    props.logoutUser();
  };

  return (
    <div>
      <div>
        <ResponsiveMenu
          menuOpenButton={
            <div className="small-menu-container">
              <div className="menu-brand-name">{props.user.userName}</div>
              <div>
                <MenuOutlined className="menu-icon-close-open" />{" "}
              </div>
            </div>
          }
          menuCloseButton={
            <div className="small-menu-container">
              <div className="menu-brand-name">{props.user.userName}</div>

              <div>
                <CloseCircleOutlined className="menu-icon-close-open" />
              </div>
            </div>
          }
          changeMenuOn="900px"
          largeMenuClassName="large-menu-classname"
          smallMenuClassName="small-menu-classname"
          menu={
            <div className="main-menu-container">
              <div className="menu-brand-name">{props.user.userName}</div>
              <div className="menu-input-container">
                <TextBoxInputOne />
              </div>
              <div className="menu-input-container">
                <TextBoxInputTwo />
              </div>
              <div>
                <Popconfirm
                  placement="bottomRight"
                  title="Log Out ?"
                  onConfirm={onLogOutUser}
                  okText="Yes"
                  cancelText="No"
                >
                  <Button type="danger" shape="round">
                    {" "}
                    <LogoutOutlined />
                    Logout
                  </Button>
                </Popconfirm>
              </div>
            </div>
          }
        />
      </div>
      <div>{props.children}</div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.userAuth,
  };
};

export default withCookies(connect(mapStateToProps, { logoutUser })(MenuIndex));
