import React from "react";
import styled from "styled-components";

const shadows = {
  small: "1px 1px 5px #ccc",
  medium: "3px 3px 15px #ccc",
  large: "3px 3px 25px #ccc",
};

interface Props extends React.ComponentPropsWithRef<"img"> {
  fit?: "cover" | "contain" | "fill";
  rounded?: string;
  shadow?: "small" | "medium" | "large";
  margin?: string;
  padding?: string;
}

const ImageBox: React.FC<Props> = ({ ...otherProps }) => {
  return <StyledImage {...otherProps} />;
};

export default ImageBox;

const StyledImage = styled.img<Props>`
  ${({ fit }) => fit && `object-fit: ${fit}`};
  ${({ margin }) => margin && `margin: ${margin}`};
  ${({ padding }) => padding && `padding: ${padding}`};
  ${({ rounded }) => rounded && `border-radius: ${rounded}`};
  ${({ shadow }) => shadow && `box-shadow: ${shadows[shadow]}`};
`;
