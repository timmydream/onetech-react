import styled from "styled-components";
import { List as AntList } from 'antd';

export const List = styled(AntList)`
    width: 100%;
    height: 80vh;
    overflow: auto;

    .list-item {
        padding: 0!important;
        margin: 0!important;
        h4 {
            text-align: left;
        }
    }

    .list-item-actions {
        width: 50px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin: 0 4% 0 0;
        h2 {
            font-weight: 100;
            font-size: .8rem;
        } 
        .icon-style {
            font-size: .7rem;
        }
    }
`;