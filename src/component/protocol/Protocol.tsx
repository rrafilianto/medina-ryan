import React from "react";
import { Col, Divider, Row } from "antd";

const Protocol = () => {
  return (
    <div className="px-8 py-14 bg-white">
      <Divider>HEALTH PROTOCOL</Divider>

      <p className="mt-10 text-center">
        It’s important to us that everyone stays safe, please read carefully our
        wedding day Covid-19 guidance before attending the event
      </p>

      <div className="mt-10 text-center">
        <Row gutter={[16, 32]}>
          <Col className="gutter-row" span={12}>
            <p>
              Wear a mask when you come the event/when the event takes place
            </p>
          </Col>
          <Col className="gutter-row" span={12}>
            <p>Wash hands before entering event</p>
          </Col>
          <Col className="gutter-row" span={12}>
            <p>Check body temperature first before entering the event</p>
          </Col>
          <Col className="gutter-row" span={12}>
            <p>
              Keep the distance between friends and fellow invited min. 1-2
              meters
            </p>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Protocol;
