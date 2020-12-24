import React from "react";
import Box from "components/includes/Box/Box";
import TextArea from "antd/lib/input/TextArea";
import { Button } from "antd";
import { Arrow } from "./Icons";

interface Props {}

const CallWaiterWithMessage: React.FC<Props> = (props) => {
  return (
    <Box column>
      <TextArea
        placeholder="Type your message"
        rows={4}
        style={{ width: "80vw", margin: "0 auto" }}
      />
      <Button
        style={{
          width: "80vw",
          margin: "0 auto",
          backgroundColor: "#CA7B7B",
          padding: "10px 0",
          height: "fit-content",
          color: "#fff",
          fontWeight: "bold",
          fontFamily: "Roboto-Slab",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        Call waiter with message <Arrow />
      </Button>
    </Box>
  );
};

export default CallWaiterWithMessage;
