import React, { useState } from "react";
import {
  Button,
  Checkbox,
  Form,
  Input,
  message,
  Modal,
  Select,
  Spin,
} from "antd";
import { Clipboard, CheckLg } from "react-bootstrap-icons";
import LazyLoad from "react-lazyload";
import { v4 as uuidv4 } from "uuid";

import firebase from "../../utils/firebase";
import "./_Envelope.css";

const layout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 18 },
};

const Envelope = () => {
  const dbEnvelope = firebase.collection("envelope");
  const [form] = Form.useForm();

  const [isAnon, setIsAnon] = useState<boolean>(false);
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleCopyClipboard = (type: string) => {
    type === "dana"
      ? navigator.clipboard.writeText("081322211403")
      : navigator.clipboard.writeText("4360103540");

    message.success("Account Number is copied");
  };

  const handleConfirmation = async (dataForm: any) => {
    setIsLoading(true);

    const id = uuidv4();
    const data = {
      ...dataForm,
      id,
      isAnon,
    };

    await dbEnvelope
      .doc(id)
      .set(data)
      .then(() => {
        message.success("Thank you");
        setIsLoading(false);
        setIsModalVisible(false);
      })
      .catch(() => {
        message.error("Error server, please contact admin");
        setIsLoading(false);
        setIsModalVisible(false);
      })
      .finally(() => {
        form.resetFields();
        setIsAnon(false);
      });
  };

  const onChangeAnonymous = (e: any) => {
    setIsAnon(e.target.checked);
  };

  return (
    <div className="px-8 py-14 background-envelope text-gray-100">
      <p className="text-center">
        Your presence and prayer for our wedding is the greatest gift we could
        ask for. No other gifts are needed or expected. Nevertheless, we would
        be honored to receive any gift and have provided the means to make it
        easier for you. Thank you.
      </p>

      <div className="text-center mt-8">
        <button
          className="button-white px-4 py-2"
          onClick={() => setIsModalVisible(true)}
        >
          <div className="flex items-center text-gray-800 text-xs">
            View Account Number
          </div>
        </button>
      </div>

      <Modal
        footer={null}
        visible={isModalVisible}
        onCancel={() => setIsModalVisible(false)}
        style={{ top: "19%" }}
      >
        <div className="my-12">
          <div>
            <div className="flex justify-center">
              <LazyLoad height={200}>
                <img
                  alt="Dana"
                  src="https://i.ibb.co/LhWqXkx/dana.png"
                  className="w-28"
                />
              </LazyLoad>
            </div>

            <div className="flex justify-center mt-3">
              <div className="text-right mr-3">
                <p>Account Number :</p>
                <p>Account Name :</p>
              </div>
              <div>
                <p>081322211403</p>
                <p>Dina Aulia</p>
              </div>
            </div>

            <div className="text-center mt-3">
              <button
                className="button-black px-4 py-2"
                onClick={() => handleCopyClipboard("dana")}
              >
                <div className="flex items-center text-gray-100 text-xs">
                  <Clipboard className="mr-2" /> Copy Account Number
                </div>
              </button>
            </div>
          </div>

          <div className="mt-10">
            <div className="flex justify-center">
              <LazyLoad height={200}>
                <img
                  alt="BCA"
                  src="https://i.ibb.co/cvjJYyk/bca.png"
                  className="w-28"
                />
              </LazyLoad>
            </div>

            <div className="flex justify-center mt-3">
              <div className="text-right mr-3">
                <p>Account Number :</p>
                <p>Account Name :</p>
              </div>
              <div>
                <p>4360103540</p>
                <p>Ryan Rafilianto</p>
              </div>
            </div>

            <div className="text-center mt-3">
              <button
                className="button-black px-4 py-2"
                onClick={() => handleCopyClipboard("bca")}
              >
                <div className="flex items-center text-gray-100 text-xs">
                  <Clipboard className="mr-2" /> Copy Account Number
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* <div className="border border-gray-300 mt-14 p-5 bg-white bg-opacity-75">
          <p className="text-center mb-3">Transfer Confirmation</p>
          <Form {...layout} form={form} onFinish={handleConfirmation}>
            <Form.Item
              name="name"
              label="Name"
              rules={
                !isAnon ? [{ required: true, message: "Name is required" }] : []
              }
              className="mb-3"
            >
              <Input placeholder="Input Name" disabled={isAnon} />
            </Form.Item>
            <Checkbox
              className="text-xs"
              checked={isAnon}
              onChange={onChangeAnonymous}
            >
              <p className="text-xs">Show as Anonymous</p>
            </Checkbox>
            <Form.Item
              name="amount"
              label="Amount"
              rules={[{ required: true, message: "Amount is required" }]}
              className="mb-3"
            >
              <Input type="number" placeholder="Input Amount" />
            </Form.Item>
            <Form.Item
              name="bankName"
              label="Bank Name"
              rules={[{ required: true, message: "Bank Name is required" }]}
            >
              <Select placeholder="Select Bank Name">
                <Select.Option value="DANA">DANA</Select.Option>
                <Select.Option value="BCA">BCA</Select.Option>
              </Select>
            </Form.Item>
            <Form.Item className="text-center">
              <Button
                htmlType="submit"
                className="button-black px-4"
                disabled={isLoading}
              >
                {isLoading ? (
                  <Spin size="small" />
                ) : (
                  <div className="flex items-center text-gray-100">
                    <CheckLg className="mr-2" /> Confirm
                  </div>
                )}
              </Button>
            </Form.Item>
          </Form>
        </div> */}
      </Modal>
    </div>
  );
};

export default Envelope;
