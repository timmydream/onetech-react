import React from 'react';
import { Wrapper } from "../../styles/Wrapper";
import { Skeleton, Card } from 'antd';

export const SkeletonLoading = () => {
    const arr = [1, 2, 3, 4]
    const skeletons = arr.map((item: any, index: number) => {
        return (
            <Card style={{ width: 300, marginTop: 16 }} key={index}>
                <Skeleton active>
                    <Card.Meta />
                </Skeleton>
            </Card> 
        );
    });
    return (
        <Wrapper>
            {skeletons}
        </Wrapper>
    );
}