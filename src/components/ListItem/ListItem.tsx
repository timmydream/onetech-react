import React from "react";
import { Card } from "../../styles/Card";
import { Button } from "../../styles/Button";

export const ListItem = (props: any) => {
    return (
        <Card
            hoverable
            cover={
                <img
                    src={props.image}
                    alt="img"
                    style={{
                        width: "140px",
                        height: "200px",
                        objectFit: "scale-down",
                        margin: "0 auto",
                        padding: "3%",
                    }}
                />
            }
        >
            <h4>{props.title}</h4>
            <p>{props.price} USD</p>
            <Button onClick={() => props.addToCart(props.id)}>
                Add to Cart
            </Button>
        </Card>
    );
};
