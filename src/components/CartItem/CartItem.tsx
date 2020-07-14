import React from "react";
import { List, Avatar, Button } from "antd";
import { PlusOutlined, MinusOutlined, CloseOutlined } from "@ant-design/icons";

export const CartItem = (props: any) => {
    return (
        <List.Item>
            <List.Item.Meta
                className="list-item"
                avatar={
                    <Avatar src={props.image} shape="square" size="large" />
                }
                title={props.title}
                description={props.price + ` USD`}
            />
            <div className="list-item-actions">
                <Button
                    onClick={() => props.addToCart(props.id)}
                    ghost
                    size="small"
                    shape="circle"
                    icon={<PlusOutlined className="icon-style" />}
                />
                <h2>{props.count}</h2>
                <Button
                    onClick={() => props.delFromCart(props.id)}
                    ghost
                    size="small"
                    shape="circle"
                    icon={<MinusOutlined className="icon-style" />}
                />
            </div>
            <Button
                ghost
                size="small"
                onClick={() => props.delAllFromCart(props.id)}
                icon={<CloseOutlined />}
            />
        </List.Item>
    );
};
