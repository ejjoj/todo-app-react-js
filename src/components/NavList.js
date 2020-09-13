import React from "react";
import NavItem from "./NavItem";

const NavList = (props) => {
  const { items } = props;
  const menu = items.map((item) => {
    if (item.name !== "zaloguj się" || !sessionStorage.getItem("userData")) {
      if (
        sessionStorage.getItem("userData") &&
        item.name !== "zarejestruj się"
      ) {
        return (
          <NavItem
            key={item.id}
            name={item.name}
            path={item.path}
            exact={item.exact}
          />
        );
      }
    } else if (
      item.name !== "moje konto" &&
      !sessionStorage.getItem("userData")
    ) {
      return (
        <NavItem
          key={item.id}
          name={item.name}
          path={item.path}
          exact={item.exact}
        />
      );
    }
  });

  return <ul className="header-nav__container">{menu}</ul>;
};

export default NavList;
