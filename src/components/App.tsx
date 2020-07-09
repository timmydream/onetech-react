import React from "react";
import { connect } from "react-redux";
import GlobalStyle from "../styles/GlobalStyle";
import Span from "../styles/Span";
import List from "../styles/List";
import { filters } from "../store/filters";
import Header from "./Header";
import * as actions from "../store/actions";

const App = ({ items, toggle }: { items: object[], toggle: any }) => {
    console.log(items);
    return (
        <>
            <GlobalStyle />
            <List
                header={<Header />}
                bordered
                dataSource={items}
                renderItem={(item: any, index: number) => (
                    <List.Item>
                        <Span
                            complete={item.complete}
                            onClick={() => {
                                toggle(index);
                                console.log(index);
                            }}
                        >
                            {item.text}
                        </Span>
                    </List.Item>
                )}
            />
        </>
    );
};

const filtering = (items: any, filter: any) => {
    switch (filter) {
        case filters.ALL_ITEMS:
            return items;
        case filters.ACTIVE_ITEMS:
            return items.filter((item: any) => !item.complete);
        case filters.COMPLETE_ITEMS:
            return items.filter((item: any) => item.complete);
        default:
            return items;
    }
};

const mapStateToProps = (state: any) => {
    return {
        items: filtering(state.list, state.visibility),
    };
};

export default connect(mapStateToProps, actions)(App);
