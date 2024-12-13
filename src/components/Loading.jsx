import Lottie from "lottie-react";
import loading from "../../src/assets/lottie/loading.json";

const Loading = () => {
  return (
    <div className="mt-16 flex min-h-screen items-center justify-center">
      <Lottie animationData={loading}></Lottie>
    </div>
  );
};

export default Loading;
