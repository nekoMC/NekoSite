import { React, useState } from "react";
import { Form, Input, Button, Card, message, Select } from "antd";
import "./less/register.less";
import axios from "axios";
const { Option } = Select;
export default function Register() {
  const onFinish = (values) => {
    values.username =
      values.username.edition === "BE"
        ? "[BE]" + values.username.id
        : values.username.id;
    // console.log("Success:", values);
    // console.log(typeof values);
    myrequest("https://api.nekomc.fun/neko/users/register", values);
  };
  const myrequest = (url, data) => {
    axios
      .post(url, data)
      .then((res) => {
        message.success("创建成功", 2);
        // console.log(res);
      })
      .catch(function (error) {
        if (error.response) {
          // 请求已发出，但服务器响应的状态码不在 2xx 范围内
          message.error("Error: " + error.response.data.msg, 2);
          // console.log("error_res", error.response);
          // console.log(error.response.status);
          // console.log(error.response.headers);
        } else {
          // Something happened in setting up the request that triggered an Error

          message.error("Error: " + error.message, 2);
          // console.log("Error" + error.message, 2);
        }
        // console.log(error.config);
      });
  };
  const onFinishFailed = (errorInfo) => {
    // console.log("Failed:", errorInfo);
  };

  return (
    <div className="mycontent-color">
      <div className="mycontent">
        <Form
          name="basic"
          className="down"
          labelCol={{
            span: 8,
          }}
          wrapperCol={{
            span: 8,
          }}
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="用户名"
            name="username"
            rules={[{ required: true, message: " " }]} //此处只是为了加个*号 故不作message
          >
            <Input.Group compact>
              <Form.Item
                name={["username", "edition"]}
                noStyle
                rules={[{ required: true, message: "还没有选择平台喵~" }]}
              >
                <Select style={{ width: "23%" }} placeholder="选择平台">
                  <Option value="Java">Java</Option>
                  <Option value="BE">BE</Option>
                </Select>
              </Form.Item>
              <Form.Item
                name={["username", "id"]}
                noStyle
                rules={[{ required: true, message: "还没输入用户名喵~" }]}
              >
                <Input style={{ width: "77%" }} placeholder="这里输入用户名" />
              </Form.Item>
            </Input.Group>
          </Form.Item>

          <Form.Item
            label="密码"
            name="password"
            rules={[
              {
                required: true,
                message: "还没输入密码喵~",
              },
            ]}
          >
            <Input.Password placeholder="这里输入密码" />
          </Form.Item>
          <Form.Item
            label="邮箱"
            name="email"
            rules={[
              {
                type: "email",
                message: "要输入正确的邮箱喵",
              },
              {
                required: true,
                message: "还没输入邮箱喵~",
              },
            ]}
          >
            <Input placeholder="这里输入邮箱" />
          </Form.Item>
          <Form.Item
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Button type="primary" htmlType="submit">
              立即注册
            </Button>
          </Form.Item>
        </Form>
        <Card bordered={true} className="mycard">
          <p>
            <b>关于注册猫服账号的说明</b>
          </p>
          <p>😼猫服账号用于登录猫服客户端，后续会解锁更多功能</p>
          <p>😃注册账号需要进行邮箱验证，验证成功后可使用邮箱或用户名登录</p>
          <p>💡基岩版、JAVA版账号不互通，如需要请分别注册</p>
          <p>🕹️.......</p>
        </Card>
      </div>
    </div>
  );
}
