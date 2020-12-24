import React from "react";
import styled from "styled-components";

const shadows = {
  small: "1px 1px 5px #ccc",
  medium: "3px 3px 15px #ccc",
  large: "3px 3px 25px #ccc",
};

interface Props {
  margin?: string;
  mR?: string;
  mL?: string;
  mB?: string;
  mT?: string;
  padding?: string;
  pR?: string;
  pL?: string;
  pB?: string;
  pT?: string;
  height?: string;
  width?: string;
  background?: string;
  row?: boolean;
  column?: boolean;
  justify?:
    | "center"
    | "space-between"
    | "flex-end"
    | "flex-start"
    | "space-around"
    | "space-evenly"
    | "stretch";
  align?: "center" | "start" | "end" | "flex-start" | "flex-end";
  _wrap?: boolean;
  noOverflow?: boolean;
  rounded?: string;
  style?: React.CSSProperties;
  shadow?: "small" | "medium" | "large";
}

const Container = styled.div<Props>`
  ${({ margin }) => margin && `margin: ${margin}`};
  ${({ mR }) => mR && `margin-right: ${mR}`};
  ${({ mL }) => mL && `margin-left: ${mL}`};
  ${({ mT }) => mT && `margin-top: ${mT}`};
  ${({ mB }) => mB && `margin-bottom: ${mB}`};
  ${({ padding }) => padding && `padding: ${padding}`};
  ${({ pR }) => pR && `padding-right: ${pR}`};
  ${({ pL }) => pL && `padding-left: ${pL}`};
  ${({ pT }) => pT && `padding-top: ${pT}`};
  ${({ pB }) => pB && `padding-bottom: ${pB}`};
  ${({ height }) => height && `height: ${height}`};
  ${({ width }) => width && `width: ${width}`};
  ${({ background }) => background && `background-color: ${background}`};
  ${({ rounded }) => rounded && `border-radius: ${rounded}`};
  ${({ noOverflow }) => noOverflow && `overflow: hidden`};
  ${({ row }) => row && `display: flex; flex-direction: row`};
  ${({ column }) => column && `display: flex; flex-direction: column`};
  ${({ justify }) => justify && `justify-content: ${justify}`};
  ${({ align }) => align && `align-items: ${align}`};
  ${({ _wrap }) => `flex-wrap: ${_wrap ? "wrap" : "no-wrap"}`};
  ${({ shadow }) => shadow && `box-shadow: ${shadows[shadow]}`};
`;

const Box: React.FC<Props> = (props) => {
  const { children, ...otherProps } = props;

  return <Container {...otherProps}>{children}</Container>;
};

export default Box;
