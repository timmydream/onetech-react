import React from "react";
import { connect } from "react-redux";
import { getItems } from "../../services/getItems";
import { itemsLoad, addToCart } from "../../store/actions";
import { ListItem } from "../ListItem/ListItem";
import { Wrapper } from "../../styles/Wrapper";
import { SkeletonLoading } from "../SkeletonLoading/SkeletonLoading";

const ListItems = (props: any) => {
    React.useEffect(() => {
        getItems().then((data: any) => props.itemsLoad(data));
    }, []);

    const listItems = props.items.map((item: any) => {
        return (
            <ListItem
                key={item.id}
                addToCart={() => props.addToCart(item.id)}
                {...item}
            />
        );
    });

    if (props.loading) {
        return <SkeletonLoading />;
    }

    return (
        <Wrapper>{listItems}</Wrapper>
    );
};

const mapStateToProps = ({ itemList: { items, loading } } : { itemList: { items: any, loading: any } }) => {
    return {
        items: items,
        loading: loading
    };
};

const mapDispatchToProps = {
    itemsLoad,
    addToCart,
};

export default connect(mapStateToProps, mapDispatchToProps)(ListItems);
