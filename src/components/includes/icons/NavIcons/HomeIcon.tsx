import React from "react";
import { Props } from "./Types";

const HomeIcon: React.FC<Props> = ({ color }) => {
  return (
    <svg
      width="23"
      height="21"
      viewBox="0 0 23 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M22.524 10.3279L12.0738 0.229981C11.9986 0.157078 11.9092 0.099239 11.8108 0.059776C11.7125 0.0203129 11.607 0 11.5005 0C11.394 0 11.2885 0.0203129 11.1901 0.059776C11.0917 0.099239 11.0023 0.157078 10.9271 0.229981L0.476967 10.3279C0.17252 10.6224 0 11.0222 0 11.4393C0 12.3053 0.728135 13.0095 1.62372 13.0095H2.7248V20.2149C2.7248 20.6492 3.0876 21 3.53666 21H9.87676V15.5045H12.7183V21H19.4643C19.9134 21 20.2762 20.6492 20.2762 20.2149V13.0095H21.3772C21.8085 13.0095 22.2221 12.8451 22.5265 12.5482C23.1582 11.9349 23.1582 10.9413 22.524 10.3279Z"
        fill={color || "#A17474"}
      />
    </svg>
  );
};

export default HomeIcon;