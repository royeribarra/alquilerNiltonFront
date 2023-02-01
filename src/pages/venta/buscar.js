import React from "react";
import {
  Card,
  Button,
  Input,
  Form
} from "antd";
import "./buscar.css";

function Buscar()
{
  return(
    <Card
      bordered={false}
      className="criclebox tablespace mb-24"
      title="Buscar venta"
    >
      <div className="form-cliente">
        <Form
          layout="vertical"
          className="row-col"
        >
          <Form.Item
            className="username"
            label="Email"
            name="email"
            rules={[
              {
                required: true,
                message: "Please input your email!",
              },
            ]}
          >
            <Input placeholder="Email" />
          </Form.Item>
          <Form.Item
            className="username"
            label="Email"
            name="email"
            rules={[
              {
                required: true,
                message: "Please input your email!",
              },
            ]}
          >
            <Input placeholder="Email" />
          </Form.Item>
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
            >
              Buscar
            </Button>
          </Form.Item>
        </Form>
      </div>
    </Card>
  );
}

export default Buscar;