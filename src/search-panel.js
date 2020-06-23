import React from "react";

const SearchPanel = () => {
    const [term, setTerm] = React.useState("");

    const onTermChange = (e) => {
        const { onSearchChange = () => {} } = this.props;
        setTerm(e.target.value);
    };

    return (
        <input
            type="search"
            onChange={this.onTermChange}
        />
    );
}
export default SearchPanel;