import React, { useState } from "react";
import { Button, Checkbox, Form, Input, message, Select } from "antd";
import { Clipboard, CheckLg } from "react-bootstrap-icons";
import LazyLoad from "react-lazyload";

const layout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 18 },
};

const Envelope = () => {
  const [form] = Form.useForm();
  const [isAnon, setIsAnon] = useState<boolean>(false);

  const handleCopyClipboard = (type: string) => {
    type === "dana"
      ? navigator.clipboard.writeText("081322211403")
      : navigator.clipboard.writeText("4360103540");

    message.success("Account Number is copied");
  };

  const handleConfirmation = (data: any) => {
    const newData = {
      ...data,
      isAnon,
    };

    console.log(newData);

    form.resetFields();
    message.success("Success Confirmed");
  };

  const onChangeAnonymous = (e: any) => {
    setIsAnon(e.target.checked);
  };

  return (
    <div className="px-8 py-14">
      <p className="border-b border-black mx-14 pb-4 text-2xl font-medium text-center">
        ENVELOPE DIGITAL
      </p>

      <div className="mt-12">
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
            className="rounded button-black px-4 py-1"
            onClick={() => handleCopyClipboard("dana")}
          >
            <div className="flex items-center text-gray-100">
              <Clipboard className="mr-2" /> Copy Account Number
            </div>
          </button>
        </div>
      </div>

      <div className="mt-12">
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
            className="rounded button-black px-4 py-1"
            onClick={() => handleCopyClipboard("bca")}
          >
            <div className="flex items-center text-gray-100">
              <Clipboard className="mr-2" /> Copy Account Number
            </div>
          </button>
        </div>
      </div>

      <div className="rounded mt-14 p-5 bg-white">
        <p className="text-center text-base mb-3">Transfer Confirmation</p>
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
          <Checkbox onChange={onChangeAnonymous}>Show as Anonymous</Checkbox>
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
            <Button htmlType="submit" className="rounded button-black px-4">
              <div className="flex items-center text-gray-100">
                <CheckLg className="mr-2" /> Confirm
              </div>
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default Envelope;
