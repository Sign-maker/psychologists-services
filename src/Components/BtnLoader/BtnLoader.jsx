import { RotatingLines } from "react-loader-spinner";

export const BtnLoader = ({ color = "#191a15" }) => {
  return (
    <RotatingLines
      visible={true}
      height="30"
      width="30"
      color="grey"
      strokeColor={color}
      strokeWidth="3"
      animationDuration="0.75"
      ariaLabel="rotating-lines-loading"
      wrapperStyle={{}}
      wrapperClass=""
    />
  );
};
