import React from "react";

const ThemeContext = React.createContext({
    theme: {
        type: "light",
        primary: "#FFF",
        text: "#black",
    },
    setTheme: (type: string) => {},
});

const ThemeContextProvider: React.FC = ({ children }) => {
    const theme = {
        light: {
            type: "light",
            primary: "#000",
            text: "#FFF",
        },
        dark: {
            type: "dark",
            primary: "#FFF",
            text: "#000",
        },
    };

    const setTheme = (type: string) => {
        setState({
            ...state,
            theme: type === "dark" ? theme.light : theme.dark,
        });
    };

    const initState = {
        theme: theme.light,
        setTheme: setTheme,
    };

    const [state, setState] = React.useState(initState);

    return (
        <ThemeContext.Provider value={state}>{children}</ThemeContext.Provider>
    );
};

export { ThemeContext, ThemeContextProvider };
