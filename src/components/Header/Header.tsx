import React from "react";
import { Menu } from "../../styles/Menu";

export const Header = () => {
    return (
        <Menu mode="horizontal">
            <Menu.Item key="1">Men</Menu.Item>
            <Menu.Item key="2">Women</Menu.Item>
            <Menu.Item key="3">Kids</Menu.Item>
        </Menu>
    );
};
