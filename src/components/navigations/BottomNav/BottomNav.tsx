import React from "react";
import { items } from "app/config/fbConfig";
import { useFetchFromDb } from "hooks/firebaseHooks";
import { itemTypes } from "types";
import BaverageIcon from "components/includes/icons/NavIcons/BaverageIcon";
import BellIcon from "components/includes/icons/NavIcons/BellIcon";
import FoodIcon from "components/includes/icons/NavIcons/FoodIcon";
import HomeIcon from "components/includes/icons/NavIcons/HomeIcon";
import OrderIcon from "components/includes/icons/NavIcons/OrderIcon";
import NavItem from "./NavItem";

const BottomNav: React.FC = (props) => {
  // eslint-disable-next-line
  const [data, loading, error] = useFetchFromDb<itemTypes>(items);

  return (
    <div className="__cus_bNav">
      <NavItem exact={true} route="/" icon={<HomeIcon color="white" />} />
      <NavItem route="/beverages" icon={<BaverageIcon />} />
      <NavItem route="/dishes" icon={<FoodIcon />} />
      <NavItem route="/orders" icon={<OrderIcon />} />
      <NavItem route="/waiter" icon={<BellIcon />} />
    </div>
  );
};

export default BottomNav;
