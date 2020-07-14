import React from "react";
import { connect } from "react-redux";
import { addToCart, delFromCart, delAllFromCart } from "../../store/actions";
import { CartItem } from "../CartItem/CartItem";
import { List } from "../../styles/List";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { Drawer, Button, Divider, Typography } from "antd";

const CartItems = (props: any) => {
    const [visible, setVisible] = React.useState(false);

    const showDrawer = () => {
        setVisible(true);
    };

    const onClose = () => {
        setVisible(false);
    };

    var total = 0;
    props.shoppingCart.map((item: any) => {
        total = (Math.round((total + item.price) * 100) / 100);
    });

    return (
        <>
            <Button
                className="cart-but"
                shape="circle"
                icon={<ShoppingCartOutlined className="cart-icon" />}
                onClick={showDrawer}
            />
            <Drawer
                className="custom-drawer"
                width={540}
                placement="right"
                closable={false}
                onClose={onClose}
                visible={visible}
            >
                <List
                    dataSource={props.shoppingCart}
                    renderItem={(item: any) => (
                        <CartItem
                            {...item}
                            addToCart={() => props.addToCart(item.id)}
                            delFromCart={() => props.delFromCart(item.id)}
                            delAllFromCart={() => props.delAllFromCart(item.id)}
                        />
                    )}
                />
                <Divider />
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Typography.Text strong>Total</Typography.Text>
                    <Typography.Text strong>{total} USD</Typography.Text>
                </div>
            </Drawer>
        </>
    );
};

const mapStateToProps = ({ shoppingCartList: { shoppingCart } } : { shoppingCartList: { shoppingCart: any } }) => {
    return {
        shoppingCart: shoppingCart,
    };
};

const mapDispatchToProps = {
    addToCart,
    delFromCart,
    delAllFromCart,
};

export default connect(mapStateToProps, mapDispatchToProps)(CartItems);
