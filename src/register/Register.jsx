import { React,useState} from "react";
import { Form, Input, Button, Card } from "antd";
import "./less/register.less";
import axios from "axios";  
export default function Register() {
  const 
  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
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
            label="用户名（邮箱）"
            name="username"
            rules={[
              {
                required: true,
                message: "Please input your username!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="密码"
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
          >
            <Input.Password />
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
          <p>😼 construction</p>
          <p>😃construction</p>
          <p>💡construction</p>
          <p>🕹️construction</p>
        </Card>
      </div>
    </div>
  );
}
