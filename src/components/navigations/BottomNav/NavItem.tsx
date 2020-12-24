import React from "react";
import { NavLink } from "react-router-dom";

interface Props {
  route: string;
  exact?: boolean;
  icon?: React.ReactElement;
}

const NavItem: React.FC<Props> = ({ route, exact, icon }) => {
  return (
    <NavLink
      to={route}
      exact={exact || false}
      className="__cus_bNav-item"
      activeClassName="__cus_bNav-itemActive"
    >
      {icon}
    </NavLink>
  );
};

export default NavItem;
