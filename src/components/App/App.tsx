import React from "react";
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom";

import GlobalStyle from "../../styles/GlobalStyle";
import Navbar from "../../styles/Navbar";
import Wrapper from "../../styles/Wrapper";
import LoginPage from "../../pages/LoginPage";
import RegistrationPage from "../../pages/RegistrationPage";

export const App = () => {
    return (
        <Router>
            <Navbar mode="horizontal">
                <Navbar.Item key="1"><Link to="/login">Login</Link></Navbar.Item>
                <Navbar.Item key="2"><Link to="/registration">Registration</Link></Navbar.Item>
            </Navbar>
            <Wrapper>
                <GlobalStyle />
                <Switch>
                    <Redirect exact from="/" to="login" />
                    <Route path="/login" >
                        <LoginPage />
                    </Route>
                    <Route path="/registration" >
                        <RegistrationPage />
                    </Route>
                </Switch>
            </Wrapper>
        </Router>
    );
};