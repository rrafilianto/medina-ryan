import React, { useEffect, useState } from "react";
import {
  Button,
  Col,
  Divider,
  Empty,
  Form,
  Input,
  message,
  Row,
  Select,
  Spin,
} from "antd";
import { ClockHistory, Heart, HeartFill } from "react-bootstrap-icons";
import { v4 as uuidv4 } from "uuid";

import firebase from "../../utils/firebase";
import timeSince from "../../utils/timeSince";
import "./_Forum.css";

const layout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 18 },
};

const Forum = () => {
  const dbUsers = firebase.collection("users");
  const [form] = Form.useForm();

  const [wishesList, setWishesList] = useState<any[]>([]);
  const [isLoadingChat, setIsLoadingChat] = useState<boolean>(false);
  const [isLoadingButton, setIsLoadingButton] = useState<boolean>(false);

  useEffect(() => {
    fetchWishes();
    // eslint-disable-next-line
  }, []);

  const fetchWishes = async () => {
    setIsLoadingChat(true);

    const data: any[] = [];

    await dbUsers
      .orderBy("time", "desc")
      .get()
      .then((item) => item.docs.map((doc) => data.push(doc.data())))
      .catch(() => {
        message.error("Error server, please contact admin");
      });

    setWishesList(data);
    setIsLoadingChat(false);
  };

  const handleSubmit = async (dataForm: any) => {
    setIsLoadingButton(true);

    const id = uuidv4();
    const data = {
      id,
      ...dataForm,
      time: new Date().toISOString(),
      love: 0,
    };

    await dbUsers
      .doc(id)
      .set(data)
      .then(() => {
        message.success("Thank you for your wishes");
        setIsLoadingButton(false);
      })
      .catch(() => {
        message.error("Error server, please contact admin");
        setIsLoadingButton(false);
      })
      .finally(() => {
        form.resetFields();
        fetchWishes();
      });
  };

  const handleLove = (id: string) => {
    let love = 0;

    const newData = wishesList.map((data) => {
      if (data.id === id) {
        love = data.love + 1;
        data.isLove = true;
        data.love = data.love + 1;
      }

      return data;
    });

    setWishesList(newData);

    dbUsers
      .doc(id)
      .update({ love })
      .catch(() => message.error("Error server, please contact admin"));
  };

  return (
    <div className="px-8 py-14">
      <Divider>WEDDING WISHES</Divider>

      <Spin spinning={isLoadingChat}>
        <div className="border-gray-300 border bg-white bg-opacity-90 mt-14">
          <div
            className="pt-2 overflow-y-scroll"
            style={{ maxHeight: "45rem" }}
          >
            {wishesList.length > 0 ? (
              wishesList.map(({ id, name, message, time, love, isLove }) => {
                return (
                  <div key={id} className="border-b">
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
                          <ClockHistory className="mr-1" /> {timeSince(time)}
                        </div>
                        <p className="mt-2">{message}</p>
                        <button
                          className="flex items-center text-mini mt-2 button"
                          onClick={() => handleLove(id)}
                        >
                          {isLove ? (
                            <HeartFill className="mr-1 color-red" />
                          ) : (
                            <Heart className="mr-1" />
                          )}{" "}
                          {love || 0}
                        </button>
                      </Col>
                    </Row>
                  </div>
                );
              })
            ) : (
              <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
            )}
          </div>
        </div>
      </Spin>

      <div className="border-gray-300 border p-5 bg-white bg-opacity-90 mt-5">
        <p className="text-center mb-5">Leave your wishes for us</p>
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
              className="button-black text-gray-100 px-5"
              disabled={isLoadingButton}
            >
              <div className="text-gray-100">
                {isLoadingButton ? <Spin size="small" /> : "Send"}
              </div>
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default Forum;
