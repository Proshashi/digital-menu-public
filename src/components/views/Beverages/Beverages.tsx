import React, { useEffect, useState } from "react";
import { RiSearch2Line } from "react-icons/ri";

import TabsComponent from "components/includes/Tabs/TabsComponent";
import { TabsRenderProps } from "components/includes/Tabs/tabsTypes";
import { useFetchFromDb } from "hooks/firebaseHooks";
import { items } from "app/config/fbConfig";
import { itemTypes } from "types";
import getFormattedItemsData from "utils/getFormattedItemsData";

interface Props {}

const Beverages: React.FC<Props> = (props) => {
  const [formattedData, setFormattedData] = useState<TabsRenderProps[]>();

  // eslint-disable-next-line
  const [data, loading, error] = useFetchFromDb<itemTypes[]>(
    items.where("meta.category", "==", "beverages")
  );

  useEffect(() => {
    if (data) {
      setFormattedData(getFormattedItemsData(data));
    }
  }, [data]);

  return (
    <div className="__cus_beverages">
      <div className="__cus_beverages-heading">
        <div className="__cus_beverages-heading--title">Beverages</div>
        <div className="__cus_beverages-heading--search">
          <RiSearch2Line />
        </div>
      </div>
      <TabsComponent tabs={formattedData} type="beverages" />
    </div>
  );
};

export default Beverages;
