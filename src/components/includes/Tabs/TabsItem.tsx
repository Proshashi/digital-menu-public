import React from "react";
import { TabsRenderProps } from "./tabsTypes";

interface Props {
  content: TabsRenderProps;
  handleItemClick: any;
}

const TabsItem: React.FC<Props> = ({ content, handleItemClick }) => {
  const { title, items, type } = content;
  return (
    <div className="__cus_tabsComponent-wrapper">
      {items.map((item) => {
        return (
          <div
            key={item.id}
            className="__cus_tabsComponent-wrapper--item"
            onClick={() => handleItemClick(`/${type}/${item.id}`)}
          >
            <div className="__cus_tabsComponent-wrapper--item__image">
              <img src={item.image && item.image._128x128} alt={item.name} />
            </div>
            <div className="__cus_tabsComponent-wrapper--item__info">
              <div className="__cus_tabsComponent-wrapper--item__info_top">
                <div className="title">{item.name}</div>
                <div className="price">Rs. {item.price}</div>
              </div>
              <div
                className="__cus_tabsComponent-wrapper--item__info_description"
                dangerouslySetInnerHTML={{ __html: item.description! }}
              />
            </div>
          </div>
        );
      })}
      {!items[0] && <p>Content of {title} </p>}
    </div>
  );
};

export default TabsItem;
