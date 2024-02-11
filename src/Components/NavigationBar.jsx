import { useState } from "react";
import { Center, Tooltip, UnstyledButton, Stack, rem } from "@mantine/core";
import {
  IconHome2,
  IconShoppingCart,
  IconBuildingStore,
} from "@tabler/icons-react";
import { NavLink } from "react-router-dom"; // Import Link from React Router

import classes from "../sass/NavigationBar.module.scss";

function NavbarLink({ Icon, label, active, onClick, index, des }) {
  return (
    <Tooltip label={label} position="right" transitionProps={{ duration: 0 }}>
      <UnstyledButton
        onClick={onClick}
        className={classes.link}
        data-active={active || undefined}>
        <NavLink to={des}>
          <Icon style={{ width: rem(20), height: rem(20) }} stroke={1.5} />
        </NavLink>
      </UnstyledButton>
    </Tooltip>
  );
}

const mockdata = [
  { icon: IconHome2, label: "Home", des: "/" },
  { icon: IconBuildingStore, label: "Shopping", des: "/shopping" },
  { icon: IconShoppingCart, label: "Cart", des: "/cart" },
];

export default function NavigationBar() {
  const [active, setActive] = useState(0);

  const links = mockdata.map((link, index) => (
    <NavbarLink
      Icon={link.icon}
      label={link.label}
      key={link.label}
      active={index === active}
      onClick={() => setActive(index)}
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
