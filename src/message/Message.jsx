import { React, useEffect, useState } from "react";
import { paramsParse } from "../utils";
import "./less/message.less";

export default function Message() {
  let a = {
    state: 1,
    title: "验证成功",
    message: "太棒了,您的账号已绑定正版授权",
  };
  const [status, setStatus] = useState(0);
  const [content, setContent] = useState(" ");
  useEffect(() => {
    let paramObj = paramsParse();
    if (!!paramObj.status && !!paramObj.content) {
      setStatus(paramObj.status);
      setContent(paramObj.content);
      // console.log("1", typeof paramObj.status);
    } else {
      console.log("Error params");
    }
  }, []);
  return (
    <div className="msgcontent-color">
      <div className="msgcontent">
        <div className="msgcard">
          <p className="msgcard-title">喵服 - 邮箱验证</p>
          <p className="msgcard-content">
            {status === "0" ? "恭喜你!" : "很抱歉,"}
          </p>
          <p className="msgcard-content-main">{content}</p>
        </div>
      </div>
    </div>
  );
}
