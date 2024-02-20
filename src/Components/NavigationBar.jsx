import { useState, useEffect, useContext } from "react";
import { DataContext } from "../App";
import { Center, Tooltip, UnstyledButton, Stack, rem } from "@mantine/core";
import {
  IconHome2,
  IconShoppingCart,
  IconBuildingStore,
} from "@tabler/icons-react";
import { NavLink } from "react-router-dom";

import classes from "../sass/NavigationBar.module.scss";

function NavbarLink({ Icon, label, active, onClick, index, des }) {
  return (
    <NavLink to={des}>
      <Tooltip label={label} position="right" transitionProps={{ duration: 0 }}>
        <UnstyledButton
          onClick={onClick}
          className={classes.link}
          data-active={active || undefined}
        >
          <Icon style={{ width: rem(20), height: rem(20) }} stroke={1.5} />
        </UnstyledButton>
      </Tooltip>
    </NavLink>
  );
}

const mockdata = [
  { icon: IconHome2, label: "Home", des: "/" },
  { icon: IconBuildingStore, label: "Shopping", des: "/shopping" },
  { icon: IconShoppingCart, label: "Cart", des: "/cart" },
];

export default function NavigationBar() {
  const { pageActive, setPageActive } = useContext(DataContext);
  console.log(pageActive);
  const links = mockdata.map((link, index) => (
    <NavbarLink
      Icon={link.icon}
      label={link.label}
      key={link.label}
      active={index === pageActive}
      onClick={() => setPageActive(index)}
      des={link.des}
    />
  ));

  return (
    <nav className={classes.navbar}>
      <div className={classes.navbarMain}>
        <Stack justify="center" gap={0}>
          {links}
        </Stack>
      </div>
    </nav>
  );
}
