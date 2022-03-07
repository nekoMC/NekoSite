import { React, useState } from "react";
import { Popover, Card, Col, Row } from "antd";
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
      alt="wechat3"
    />
    <img
      className="donateQR"
      src={require("../img/alipay3.jpg").default}
      alt="alipay3"
    />
  </div>
);
const donate_four = (
  <div>
    <img
      className="donateQR"
      src={require("../img/wechat4.jpg").default}
      alt="wechat4"
    />
    <img
      className="donateQR"
      src={require("../img/alipay4.jpg").default}
      alt="alipay4"
    />
  </div>
);
export default function Donate(props) {
  const ismobile = props.isMobile;
  const [isChecked, setIsChecked] = useState([false, false, false, false]);
  const checkedChange = function (e, n) {
    switch (n) {
      case 0:
        setIsChecked([true, false, false, false]);
        e.stopPropagation();
        break;
      case 1:
        setIsChecked([false, true, false, false]);
        e.stopPropagation();
        break;
      case 2:
        setIsChecked([false, false, true, false]);
        e.stopPropagation();
        break;
      case 3:
        setIsChecked([false, false, false, true]);
        e.stopPropagation();
        break;
      default:
        setIsChecked([false, false, false, false]);
        e.stopPropagation();
        break;
    }
  };

  console.log(11111111111111111, ismobile);
  console.log(22222222222222222, props);

  return (
    <div className="content-color">
      <div
        onClick={(e) => {
          checkedChange(e, 4);
        }}
        className="content content-color cards"
      >
        <Row gutter={32}>
          <Col span={ismobile ? 32 : 6}>
            <Popover content={donate_one} trigger="click">
              <Card
                onClick={(e) => {
                  checkedChange(e, 0);
                }}
                className={isChecked[0] ? "cards-test-active cards-font" : ""}
                title="点击捐赠一个苹果 "
                extra={
                  <p className="theme-link">
                    <b> ￥2 </b>
                  </p>
                }
                bordered={false}
              >
                <span className=" sprite inv-sprite content-apple"> </span>
              </Card>
            </Popover>
          </Col>
          {ismobile ? (
            <Col>
              <div className="blank"></div>
            </Col>
          ) : (
            ""
          )}
          <Col span={ismobile ? 32 : 6}>
            <Popover content={donate_two} trigger="click">
              <Card
                onClick={(e) => {
                  checkedChange(e, 1);
                }}
                className={isChecked[1] ? "cards-test-active cards-font" : ""}
                title=" 点击捐赠一块铁锭  "
                extra={
                  <p className="theme-link">
                    <b> ￥8 </b>
                  </p>
                }
                bordered={false}
              >
                <span className=" sprite inv-sprite content-iron"> </span>
              </Card>
            </Popover>
          </Col>
          {ismobile ? (
            <Col>
              <div className="blank"></div>
            </Col>
          ) : (
            ""
          )}
          <Col span={ismobile ? 32 : 6}>
            <Popover content={donate_three} trigger="click">
              <Card
                onClick={(e) => {
                  checkedChange(e, 2);
                }}
                className={isChecked[2] ? "cards-test-active cards-font" : ""}
                title=" 点击捐赠一块金锭  "
                extra={
                  <p className="theme-link">
                    <b>￥20</b>
                  </p>
                }
                bordered={false}
              >
                <span className=" sprite inv-sprite content-gold"> </span>
              </Card>
            </Popover>
          </Col>
          {ismobile ? (
            <Col>
              <div className="blank"></div>
            </Col>
          ) : (
            ""
          )}
          <Col span={ismobile ? 32 : 6}>
            <Popover content={donate_four} trigger="click">
              <Card
                onClick={(e) => {
                  checkedChange(e, 3);
                }}
                className={isChecked[3] ? "cards-test-active cards-font" : ""}
                title="点击捐赠一颗钻石  "
                extra={
                  <p className="theme-link">
                    <b>￥???</b>
                  </p>
                }
                bordered={false}
              >
                <span className=" sprite inv-sprite content-diamond"> </span>
              </Card>
            </Popover>
          </Col>
        </Row>
      </div>
    </div>
  );
}
