import React from "react";
import { CopyFilled } from "@ant-design/icons";
import LazyLoad from "react-lazyload";

const Envelope = () => {
  return (
    <div className="px-8 py-14">
      <p className="border-b border-red mx-14 pb-4 text-2xl font-medium text-center">
        ENVELOPE DIGITAL
      </p>

      <LazyLoad height={200}>
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
            <div className="ml-4">
              <button>
                <CopyFilled />
                <span className="text-mini ml-1">Copy Code</span>
              </button>
            </div>
          </div>

          {/* <Row gutter={16} className="mt-4">
            <Col span={10} className="text-right">
              <p>Account Number :</p>
              <p>Account Name :</p>
            </Col>
            <Col span={8}>
              <p>081322211403</p>
              <p>Dina Aulia</p>
            </Col>
            <Col span={4}>
              <button className="rounded">
                <CopyOutlined />
              </button>
            </Col>
          </Row> */}

          {/* <Row gutter={24} className="mt-4">
            <Col span={12} className="text-right">
              <p>Account Number :</p>
              <p>Account Name :</p>
            </Col>
            <Col span={12}>
              <p>085723056463</p>
              <p>Ryan Rafilianto</p>
            </Col>
          </Row> */}
        </div>

        {/* <div className="mt-12">
          <p>BCA</p>
          <p>4360103540</p>
          <p>A/N Ryan Rafilianto</p>
        </div> */}
      </LazyLoad>
    </div>
  );
};

export default Envelope;
