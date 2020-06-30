import React from "react";
import { Input } from "antd";

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
                className="search-panel"
            />
        </>
    );
};
export default Search;
