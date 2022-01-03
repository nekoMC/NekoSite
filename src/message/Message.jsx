import { Base64 } from "js-base64";
import { React, useEffect, useState } from "react";
import { paramsParse } from "../utils";
import "./less/message.less";

export default function Message() {
  const [title, setTitle] = useState(" ");
  const [content, setContent] = useState(" ");
  //issue#1 弃用前端判定，使用后台base64加密参数
  // useEffect(() => {
  //   let paramObj = paramsParse();
  //   console.log(paramObj);
  //   if (!!paramObj.status && !!paramObj.content) {
  //     setStatus(paramObj.status);
  //     setContent(paramObj.content);
  //     // console.log("1", typeof paramObj.status);
  //   } else {
  //     console.log("Error params");
  //   }
  // }, []);
  useEffect(() => {
    let paramObj = paramsParse();
    let data = Base64.decode(paramObj.data);
    let dataObj = JSON.parse(data);
    if (dataObj.title && dataObj.message) {
      setTitle(dataObj.title);
      setContent(dataObj.message);
    }
  }, []);
  return (
    <div className="msgcontent-color">
      <div className="msgcontent">
        <div className="msgcard">
          <p className="msgcard-title">喵服 - 邮箱验证</p>
          <p className="msgcard-content">
            {/* {status === "0" ? "恭喜你!" : "很抱歉,"} */}
            {title}
          </p>
          <p className="msgcard-content-main">{content}</p>
        </div>
      </div>
    </div>
  );
}
