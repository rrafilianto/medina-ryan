import React from "react";
import LazyLoad from "react-lazyload";

const Forum = () => {
  return (
    <div className="px-8 py-14 text-center">
      <p className="border-b-2 border-green mx-14 pb-4 text-2xl font-medium text-center">
        WEDDING WISHES
      </p>

      <LazyLoad height={200}>
        <div className="mt-12">
          <p>APA ITU</p>
        </div>
      </LazyLoad>
    </div>
  );
};

export default Forum;
