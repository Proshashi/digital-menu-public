import React from "react";
import styled from "styled-components";

const fontSizes = {
  small: "16px",
  medium: "20px",
  large: "24px",
  xLarge: "30px",
};

interface Props {
  style?: React.CSSProperties;
  color?: string;
  family?: string;
  width?: string;
  full?: boolean;
  inline?: boolean;
  margin?: string;
  padding?: string;
  background?: string;
  size?: "small" | "medium" | "large" | "xLarge";
  weight?: "bold" | "normal" | "lighter" | number;
  align?: "center" | "left" | "right" | "justify";
  decoration?: "underline" | "line-through" | "overline";
  lineHeight?: string;
  letterSpace?: string;
  wordSpace?: string;
  whiteSpace?: "wrap" | "no-wrap";
  transform?: "uppercase" | "lowercase" | "capitalize";
}

const TextStyled = styled.div<Props>`
  ${({ inline }) => inline && `display: inline`};
  ${({ color }) => color && `color: ${color}`};
  ${({ family }) => family && `font-family: ${family}`};
  ${({ background }) => background && `background-color: ${background}`};
  ${({ size }) => size && `font-size: ${fontSizes[size]}`};
  ${({ weight }) => weight && `font-weight: ${weight}`};
  ${({ width }) => width && `width: ${width}`};
  ${({ full }) => full && `width: 100%`};
  ${({ margin }) => margin && `margin: ${margin}`};
  ${({ padding }) => padding && `padding: ${padding}`};
  ${({ align }) => align && `text-align: ${align}`};
  ${({ decoration }) => decoration && `text-decoration: ${decoration}`};
  ${({ lineHeight }) => lineHeight && `line-height: ${lineHeight}`};
  ${({ letterSpace }) => letterSpace && `letter-spacing: ${letterSpace}`};
  ${({ wordSpace }) => wordSpace && `word-spacing: ${wordSpace}`};
  ${({ whiteSpace }) => whiteSpace && `white-space: ${whiteSpace}`};
  ${({ transform }) => transform && `text-transform: ${transform}`};
`;

const Text: React.FC<Props> = ({ children, ...otherProps }) => {
  return <TextStyled {...otherProps}>{children}</TextStyled>;
};

export default Text;
