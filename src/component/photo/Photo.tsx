import React, { useState } from "react";
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";
import { Divider } from "antd";

import { image } from "./Image";
import LazyLoad from "react-lazyload";

const Photo = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightBox = (_: any, { index }: any) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  };

  const closeLightBox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

  return (
    <div className="px-8 py-14 text-center">
      <Divider>OUR PHOTO</Divider>

      <LazyLoad height={200}>
        <div className="mt-12">
          <Gallery photos={image} onClick={openLightBox} />
          <ModalGateway>
            {viewerIsOpen && (
              <Modal onClose={closeLightBox} allowFullscreen={false}>
                <Carousel
                  views={image.map((img) => ({ source: img.src }))}
                  currentIndex={currentImage}
                />
              </Modal>
            )}
          </ModalGateway>
        </div>
      </LazyLoad>
    </div>
  );
};

export default Photo;
