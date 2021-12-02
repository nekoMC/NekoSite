import { React, useState } from "react";
import { Popover, Button, Card, Col, Row } from "antd";
import "./less/donate.less";

const donate_one = (
  <div>
    <img
      className="donateQR"
      src={require("../img/wechat1.jpg").default}
      alt="wechat1"
    />
    <img
      className="donateQR"
      src={require("../img/alipay1.jpg").default}
      alt="alipay1"
    />
  </div>
);
const donate_two = (
  <div>
    <img
      className="donateQR"
      src={require("../img/wechat2.jpg").default}
      alt="wechat2"
    />
    <img
      className="donateQR"
      src={require("../img/alipay2.jpg").default}
      alt="alipay2"
    />
  </div>
);

const donate_three = (
  <div>
    <img
      className="donateQR"
      src={require("../img/wechat3.jpg").default}
      al3="wechat3"
    />
    <img
      className="donateQR"
      src={require("../img/alipay3.jpg").default}
      alt="alipay3"
    />
  </div>
);
export default function Donate() {
  const [isChecked, setIsChecked] = useState([false, false, false]);
  const checkedChange = function (e, n) {
    switch (n) {
      case 0:
        setIsChecked([true, false, false]);
        e.stopPropagation();
        break;
      case 1:
        setIsChecked([false, true, false]);
        e.stopPropagation();
        break;
      case 2:
        setIsChecked([false, false, true]);
        e.stopPropagation();
        break;
      case 3:
        setIsChecked([false, false, false]);
        e.stopPropagation();
        break;
    }
  };
  return (
    <div className="content-color">
      <div
        onClick={(e) => {
          checkedChange(e, 3);
        }}
        className="content content-color cards"
      >
        <Row gutter={32}>
          <Col span={8}>
            <Popover content={donate_one} trigger="click">
              <Card
                onClick={(e) => {
                  checkedChange(e, 0);
                }}
                className={isChecked[0] ? "cards-test-active cards-font" : ""}
                title="喂腐竹吃苹果 ￥2"
                bordered={false}
              >
                <span className=" sprite inv-sprite content-apple"> </span>
                <span className=" sprite inv-sprite content-apple"> </span>
              </Card>
            </Popover>
          </Col>
          <Col span={8}>
            <Popover content={donate_two} trigger="click">
              <Card
                onClick={(e) => {
                  checkedChange(e, 1);
                }}
                className={isChecked[1] ? "cards-test-active cards-font" : ""}
                title="请腐竹吃大蛋糕 ￥8"
                bordered={false}
              >
                <span className=" sprite inv-sprite content-cake"> </span>
                <span className=" sprite inv-sprite content-cake"> </span>
              </Card>
            </Popover>
          </Col>
          <Col span={8}>
            <Popover content={donate_three} trigger="click">
              <Card
                onClick={(e) => {
                  checkedChange(e, 2);
                }}
                className={isChecked[2] ? "cards-test-active cards-font" : ""}
                title="这是？钻石！ ￥20"
                bordered={false}
              >
                <span className=" sprite inv-sprite content-diamond"> </span>
                <span className=" sprite inv-sprite content-diamond"> </span>
              </Card>
            </Popover>
          </Col>
        </Row>
      </div>
    </div>
  );
}
