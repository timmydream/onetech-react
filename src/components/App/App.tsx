import React from "react";
import { Header } from "../Header/Header";
import { MainPage } from "../../pages/MainPage";
import { ProjectsPage } from "../../pages/ProjectsPage";
import { ContactPage } from "../../pages/ContactPage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ThemeContext, ThemeContextProvider } from "../Context/Context";
import { Layout } from "antd";
import "./App.css";
import "antd/dist/antd.css";

export const App: React.FC = () => {
    const state = React.useContext(ThemeContext);
    const toggleTheme = () => {
        state.setTheme(state.theme.type);
    };
    const layout = {
        backgroundColor: state.theme.primary,
    };
    console.log(state);

    return (
        <ThemeContextProvider>
            <Router>
                <Layout style={layout}>
                    <Layout.Header style={layout}>
                        <Header />
                    </Layout.Header>
                    <Layout.Content>
                        <Switch>
                            <Route exact path="/" component={MainPage} />
                            <Route path="/projects" component={ProjectsPage} />
                            <Route path="/contacts" component={ContactPage} />
                        </Switch>
                    </Layout.Content>
                </Layout>
            </Router>
        </ThemeContextProvider>
    );
};
