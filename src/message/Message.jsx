import React from "react";
import { Card } from "antd";
import "./less/message.less";
export default function Message() {
  return (
    <div className="mycontent-color">
      <div className="mycontent">
        <Card title="恭喜" bordered={false}>
          <p>邮箱验证成功</p>
        </Card>
      </div>
    </div>
  );
}
