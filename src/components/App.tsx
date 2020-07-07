import React from "react";
import GlobalStyle from "../styles/GlobalStyle";
import { connect } from 'react-redux';
import Wrapper from "../styles/Wrapper";
import Button from "../styles/Button";
import { store } from "../store/store";
import { inc, dec } from "../store/actions";

const App = (props: any) => {
    return (
        <Wrapper>
            <GlobalStyle />           
            <h2 id="counter">{props.counter}</h2>  
            <Button onClick={() => store.dispatch({type: 'INC'})}>
                INC
            </Button>
            <Button onClick={() => store.dispatch({type: 'DEC'})}>
                DEC
            </Button>
        </Wrapper>
    );
};

const mapStateToProps = (state: any) => {
    return {
        counter: state
    };
};
  
export default connect(mapStateToProps, { inc, dec })(App);