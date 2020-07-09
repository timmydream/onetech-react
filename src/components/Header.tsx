import React from "react";
import { bindActionCreators } from "redux";
import { Input } from "antd";
import * as actions from "../store/actions";
import { store } from "../store/store";
import Form from "../styles/Form";
import Wrapper from "../styles/Wrapper";
import Button from "../styles/Button";
import { PlusOutlined } from "@ant-design/icons";

const Header = () => {
    const { dispatch } = store;
    const { add, all, active, complete } = bindActionCreators(
        actions,
        dispatch
    );
    const onFinish = (values: any) => {
        add(values.text);
    };
    return (
        <>
            <Form onFinish={onFinish}>
                <Form.Item
                    name="text"
                    rules={[{ required: true, message: "Empty form!" }]}
                >
                    <Input />
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit" block>
                        <PlusOutlined />Add field
                    </Button>
                </Form.Item>
            </Form>
            <Wrapper>
                <Button onClick={() => all()}>All</Button>
                <Button onClick={() => active()}>Active</Button>
                <Button onClick={() => complete()}>Complete</Button>
            </Wrapper>
        </>
    );
};

export default Header;
