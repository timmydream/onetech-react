import React from "react";
import { Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";

const Search = ({ onSearchChange }) => {
    const [term, setTerm] = React.useState("");

    const onTermChange = (e) => {
        setTerm(e.target.value);
        onSearchChange(e.target.value);
    };

    return (
        <>
            <Input
                placeholder="Search"
                onChange={onTermChange}
                value={term}
                suffix={<SearchOutlined />}
            />
        </>
    );
};
export default Search;
