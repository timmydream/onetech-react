import React from "react";
import { connect } from "react-redux";
import {
    itemsLoad,
    addToCart,
    delFromCart,
    delAllFromCart,
} from "../../store/actions";

import ListItems from "../ListItems/ListItems";
import CartItems from "../CartItems/CartItems";
import { Header } from "../Header/Header";

import GlobalStyle from "../../styles/GlobalStyle";

const App = (props: any) => {
    return (
        <>
            <GlobalStyle />
            <Header />
            <CartItems />
            <ListItems />
        </>
    );
};

const mapStateToProps = (state: any) => {
    return {
        items: state.items,
        shoppingCart: state.shoppingCart,
    };
};

const mapDispatchToProps = {
    itemsLoad,
    addToCart,
    delFromCart,
    delAllFromCart,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
