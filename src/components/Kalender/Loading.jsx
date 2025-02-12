"use client";

import Lottie from "lottie-react";
import loadingLottie from "/public/lottiefiles/loading.json";

const Loading = ({ loadingBesked }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center flex-col gap-4">
      <p className="text-lg text-white mb-4"> {loadingBesked} </p>
      <div className="w-40 h-40">
        <Lottie animationData={loadingLottie} loop={true} autoplay={true} />
      </div>
    </div>
  );
};

export default Loading;