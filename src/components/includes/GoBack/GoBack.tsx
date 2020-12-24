import React from "react";
import { IoIosArrowBack } from "react-icons/io";
import { useHistory } from "react-router-dom";

interface Props {
  style?: React.CSSProperties;
}

export const GoBack: React.FC<Props> = ({ style }) => {
  const history = useHistory();
  return (
    <div
      style={{
        ...style,
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "10px",
        borderRadius: "50%",
        fontSize: "20px",
        width: "40px",
        height: "40px",
      }}
      onClick={() => history.goBack()}
    >
      <IoIosArrowBack />
    </div>
  );
};
