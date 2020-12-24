import React from "react";
import Skeleton from "react-loading-skeleton";

interface Props {}

const PendingSkeleton: React.FC = (props: Props) => {
  return (
    <div style={{ height: "fit-content", width: "100vw" }}>
      <Skeleton height="25vh" width="90vw" style={{ margin: "2rem 5vw" }} />
      <Skeleton height="25vh" width="90vw" style={{ margin: "2rem 5vw" }} />
    </div>
  );
};

export default PendingSkeleton;
