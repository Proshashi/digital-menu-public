import React, { useEffect, useState } from "react";
import { RiSearch2Line } from "react-icons/ri";

import { items } from "app/config/fbConfig";
import { itemTypes } from "types";
import { useFetchFromDb } from "hooks/firebaseHooks";
import { TabsRenderProps } from "components/includes/Tabs/tabsTypes";
import TabsComponent from "components/includes/Tabs/TabsComponent";
import getFormattedItemsData from "utils/getFormattedItemsData";

interface Props {}

const Dishes: React.FC<Props> = (props) => {
  const [formattedData, setFormattedData] = useState<TabsRenderProps[]>();

  // eslint-disable-next-line
  const [data, loading, error] = useFetchFromDb<itemTypes[]>(
    items.where("meta.category", "==", "dishes")
  );

  useEffect(() => {
    if (data) {
      setFormattedData(getFormattedItemsData(data));
    }
  }, [data]);

  return (
    <div className="__cus_dishes">
      <div className="__cus_dishes-heading">
        <div className="__cus_dishes-heading--title">Dishes</div>
        <div className="__cus_dishes-heading--search">
          <RiSearch2Line />
        </div>
      </div>
      <TabsComponent tabs={formattedData} type="dishes" />
    </div>
  );
};

export default Dishes;
