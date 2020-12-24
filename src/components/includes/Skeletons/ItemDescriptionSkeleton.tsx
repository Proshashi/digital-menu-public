import React from "react";
import Skeleton from "react-loading-skeleton";

interface Props {}

const ItemDescriptionSkeleton: React.FC = (props: Props) => {
  return (
    <div style={{ height: "100vh", width: "100vw" }}>
      <Skeleton height="40vh" width="100vw" />
      <Skeleton height="5vh" width="100vw" style={{ margin: "2rem 0" }} />
      <Skeleton height="20vh" width="100vw" />
      <Skeleton height="5vh" width="100vw" style={{ margin: "2rem 0" }} />
    </div>
  );
};

export default ItemDescriptionSkeleton;
