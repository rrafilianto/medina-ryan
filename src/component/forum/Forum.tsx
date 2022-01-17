import React from "react";
import { Button, Col, Form, Input, Pagination, Row, Select } from "antd";
import { ClockHistory, Heart } from "react-bootstrap-icons";

import "./_Forum.css";
import { MESSAGE } from "./Example";

const layout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 18 },
};

const Forum = () => {
  const [form] = Form.useForm();

  const handleSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <div className="px-8 py-14">
      <p className="border-b border-t border-black py-4 text-2xl font-medium text-center">
        WEDDING WISHES
      </p>

      <div className="border border-gray-300 rounded mt-14 bg-white bg-opacity-75">
        <div className="border-b p-5">
          <Form {...layout} form={form} onFinish={handleSubmit}>
            <Form.Item
              name="name"
              label="Name"
              rules={[{ required: true, message: "Name is required" }]}
              className="mb-3"
            >
              <Input placeholder="Input Name" />
            </Form.Item>
            <Form.Item
              name="message"
              label="Message"
              rules={[{ required: true, message: "Message is required" }]}
              className="mb-3"
            >
              <Input placeholder="Say something..." />
            </Form.Item>
            <Form.Item
              name="attendance"
              label="Attendance"
              rules={[{ required: true, message: "Attendance is required" }]}
            >
              <Select placeholder="Select attendance">
                <Select.Option value="yes">Yes</Select.Option>
                <Select.Option value="no">No</Select.Option>
              </Select>
            </Form.Item>
            <Form.Item className="text-center">
              <Button
                htmlType="submit"
                className="rounded button-black text-gray-100 px-4"
              >
                <div className="text-gray-100">Send</div>
              </Button>
            </Form.Item>
          </Form>
        </div>

        <div className="mt-2">
          {MESSAGE.map(({ name, message, time, like }, i) => {
            return (
              <div key={i} className="border-b">
                <Row className="mx-5 my-2">
                  <Col span={6}>
                    <div className="rounded-full circle bg-gray-300 text-lg font-medium text-center uppercase">
                      {name.split(" ")[0]?.charAt(0)}
                      {name.split(" ")[1]?.charAt(0)}
                    </div>
                  </Col>
                  <Col span={18}>
                    <p className="font-medium capitalize">{name}</p>
                    <div className="flex items-center text-mini">
                      <ClockHistory className="mr-1" /> {time}
                    </div>
                    <p className="mt-2">{message}</p>
                    <div className="flex items-center text-mini mt-2">
                      <Heart className="mr-1" /> {like || 0}
                    </div>
                  </Col>
                </Row>
              </div>
            );
          })}

          <Pagination className="text-center my-5" size="small" total={50} />
        </div>
      </div>
    </div>
  );
};

export default Forum;
