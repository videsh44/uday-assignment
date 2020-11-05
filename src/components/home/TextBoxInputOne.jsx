import React from "react";
import { Input, message } from "antd";
import { useDispatch } from "react-redux";
import { textBoxOne } from "../../actions/authActions";

const { Search } = Input;

const TextBoxInputOne = () => {
  const dispatch = useDispatch();

  const validURL = (str) => {
    var pattern = new RegExp(
      "^(https?:\\/\\/)?" + // protocol
        "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" + // domain name
        "((\\d{1,3}\\.){3}\\d{1,3}))" + // OR ip (v4) address
        "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" + // port and path
        "(\\?[;&a-z\\d%_.~+=-]*)?" + // query string
        "(\\#[-a-z\\d_]*)?$",
      "i"
    ); // fragment locator
    return !!pattern.test(str);
  };

  const onSearch = (value) => {
    if (validURL(value)) {
      dispatch(textBoxOne(value));
      console.log(value);
    } else {
      message.warning("please Enter Valid Url");
    }
  };
  return (
    <div>
      <Search
        placeholder="input search text Box 1"
        onSearch={onSearch}
        enterButton
      />
    </div>
  );
};

export default TextBoxInputOne;
