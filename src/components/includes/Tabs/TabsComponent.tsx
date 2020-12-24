import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import "antd-mobile/dist/antd-mobile.css";
import { Tabs, WhiteSpace } from "antd-mobile";

import { storeTypes } from "types";
import { setIndex as setCurrentIndex } from "./tabsSlice";
import TabsItem from "./TabsItem";
import { TabItemProps } from "./tabsTypes";

interface Props {
  tabs:
    | {
        title: string;
        category: string;
        items: TabItemProps[];
      }[]
    | undefined;
  type: string;
}
const TabsComponent: React.FC<Props> = ({ tabs, type }) => {
  const itemType = type === "dishes" ? "dishesIndex" : "beveragesIndex";
  const currentIndex: any = useSelector<storeTypes>((state) => state.tabs);
  const [index, setIndex] = useState<number>(currentIndex[itemType] | 0);
  const dispatch = useDispatch();

  const history = useHistory();
  const handleItemClick = (path: string) => {
    history.push(path);
    dispatch(
      setCurrentIndex({
        type: itemType,
        index,
      })
    );
  };

  return (
    <div className="__cus_tabsComponent">
      <WhiteSpace />
      <Tabs
        tabs={tabs !== undefined ? tabs : []}
        tabBarUnderlineStyle={{
          border: "none",
          outline: "none",
          height: "0.25rem",
          backgroundColor: "#d37272",
        }}
        tabBarBackgroundColor="#fafafa"
        tabBarActiveTextColor="red"
        onChange={(data, index: number) => {
          setIndex(index);
        }}
        renderTabBar={(props) => <Tabs.DefaultTabBar {...props} page={3} />}
        page={index}
      >
        {(content: any) => {
          return (
            <TabsItem
              content={{ ...content, type }}
              handleItemClick={handleItemClick}
            />
          );
        }}
      </Tabs>
      <WhiteSpace />
    </div>
  );
};

export default TabsComponent;
