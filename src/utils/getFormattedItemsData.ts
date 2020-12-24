import { TabsRenderProps } from "components/includes/Tabs/tabsTypes";
import { itemTypes } from "types";

function getFormattedItemsData(data: itemTypes[]): TabsRenderProps[] {
  let obj: any = {};

  data.forEach(({ id, name, description, price, image, meta }) => {
    meta &&
      meta.type.forEach((t) => {
        if (!obj[t.toLowerCase()]) {
          obj[t.toLowerCase()] = {
            title: t.toUpperCase(),
            category: t.toLowerCase(),
            items: [
              {
                id,
                description,
                name,
                price,
                image: image,
              },
            ],
          };
        } else {
          obj[t.toLowerCase()].items = [
            ...obj[t.toLowerCase()].items,
            {
              id,
              description,
              name,
              price,
              image: image,
            },
          ];
        }
      });
  });

  return Object.values(obj);
}

export default getFormattedItemsData;
