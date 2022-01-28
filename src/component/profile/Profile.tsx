import React, { useState } from "react";
import { Col, Divider, Row } from "antd";
import LazyLoad from "react-lazyload";
import Carousel, { Modal, ModalGateway } from "react-images";
import { Instagram } from "react-bootstrap-icons";

const Profile = () => {
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
  const [image, setImage] = useState<any>();

  const handleOpenModalImage = (img: string) => {
    setImage([{ source: img }]);
    setModalIsOpen(true);
  };

  const handleCloseModalImage = () => {
    setModalIsOpen(false);
    setImage(null);
  };

  return (
    <div className="px-8 py-14">
      <Divider>WE'RE GETTING MARRIED</Divider>

      <div className="text-center mt-8">
        <p className="italic">
          "And one of His signs is that He created mates for you from yourselves
          that you may find rest in them, and He put between you love and
          compassion, most surely there are signs in this for a people who
          reflect."
        </p>
        <p className="font-medium">(Ar-Rum: 21)</p>
      </div>

      <Row align="middle" gutter={16} className="mt-12">
        <Col span={8}>
          <LazyLoad height={200}>
            <img
              alt="Medina Aulia"
              src="https://i.ibb.co/C5NKCqY/bride.png"
              className="cursor-pointer"
              onClick={() =>
                handleOpenModalImage("https://i.ibb.co/C5NKCqY/bride.png")
              }
            />
          </LazyLoad>
        </Col>
        <Col span={16}>
          <p className="text-lg font-medium font-primary font-semibold">
            MEDINA AULIA
          </p>
          <a
            href="https://www.instagram.com/medinaauliaa"
            target="_blank"
            rel="noreferrer"
            className="flex items-center mb-3"
          >
            <Instagram />
            <p className="ml-1">@medinaauliaa</p>
          </a>
          <p>Daughter of</p>
          <p>Mr. A. Alamsyah Bariji and Mrs. Sri Wahyuni</p>
        </Col>
      </Row>

      <Row align="middle" gutter={16} className="mt-12">
        <Col span={8}>
          <LazyLoad height={200}>
            <img
              alt="Ryan Rafilianto"
              src="https://i.ibb.co/3h1Nf8M/groom.png"
              className="cursor-pointer"
              onClick={() =>
                handleOpenModalImage("https://i.ibb.co/3h1Nf8M/groom.png")
              }
            />
          </LazyLoad>
        </Col>
        <Col span={16}>
          <p className="text-lg font-medium font-primary font-semibold">
            RYAN RAFILIANTO
          </p>
          <a
            href="https://www.instagram.com/rrafilianto"
            target="_blank"
            rel="noreferrer"
            className="flex items-center mb-3"
          >
            <Instagram />
            <p className="ml-1">@rrafilianto</p>
          </a>
          <p>Son of</p>
          <p>Mr. Mukiran and Mrs. Sutati</p>
        </Col>
      </Row>

      <ModalGateway>
        {modalIsOpen && (
          <Modal onClose={handleCloseModalImage}>
            <Carousel views={image} />
          </Modal>
        )}
      </ModalGateway>
    </div>
  );
};

export default Profile;
