import React from "react";
import Box from "components/includes/Box/Box";
import Text from "components/includes/Text/Text";
import ImageBox from "components/includes/Image/ImageBox";
import { receivedTypes } from "hooks/useReceivedOrders";
import getFormattedDate from "utils/getFormattedDate";
import { colors } from "theme";

interface Props {
  receivedData: receivedTypes;
}

const ReceivedItem: React.FC<Props> = ({ receivedData }) => {
  const { name, image, recievedTime, price, quantity, total } = receivedData;
  return (
    <Box
      column
      shadow="medium"
      padding="20px"
      width="90vw"
      margin="20px auto"
      rounded="10px"
      background="#fff"
    >
      <Text
        full
        align="right"
        color={colors.textPrimary}
        size="small"
        weight="bold"
        family="Roboto-Slab"
        margin="0 0 10px 0"
      >
        {getFormattedDate(recievedTime)}
      </Text>
      <Box>
        <Box row align="center" noOverflow>
          <ImageBox
            src={image._128x128}
            alt=""
            height="50px"
            width="50px"
            fit="fill"
            rounded="10px"
            margin="0 10px 0 0"
          />
          <Box column justify="center">
            <Text weight="bold" size="small" color="#878585">
              {name}
            </Text>
            <Text size="small" color="#484545">
              {price} * {quantity} = Rs. {total}
            </Text>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ReceivedItem;
