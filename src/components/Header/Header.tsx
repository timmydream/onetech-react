import React from "react";
import { Link } from "react-router-dom";
import { Menu, Button } from "antd";
import { ThemeContext } from "../Context/Context";

export const Header: React.FC = (props) => {
    const state = React.useContext(ThemeContext);

    const menu = {
        backgroundColor: state.theme.primary,
    };

    const menuItem = {
        color: state.theme.text,
    };

    const toggleTheme = () => {
        state.setTheme(state.theme.type);
    };

    return (
        <Menu mode="horizontal" style={menu}>
            <Menu.Item key="1">
                <Link style={menuItem} to="/">
                    Home
                </Link>
            </Menu.Item>
            <Menu.Item key="2">
                <Link style={menuItem} to="/projects">
                    Projects
                </Link>
            </Menu.Item>
            <Menu.Item key="3">
                <Link style={menuItem} to="/contacts">
                    Contacts
                </Link>
            </Menu.Item>
            <Menu.Item>
                <input
                    onClick={() => toggleTheme()}
                    className="l"
                    type="checkbox"
                />
            </Menu.Item>
        </Menu>
    );
};
