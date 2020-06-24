import React, { useState } from "react";
import ContactList from "./ContactList";
import Search from "./Search";
import ContactAddForm from "./ContactAddForm";
import "./App.css";
import "antd/dist/antd.css";

const App = () => {
    const [search, setSearch] = useState("");
    const [users, setUsers] = useState([
        { id: 1, name: "Alex", phone: "+1234584" },
        { id: 2, name: "Jack", phone: "+6846846" },
        { id: 3, name: "Arman", phone: "+7984849" },
        { id: 4, name: "Fedor", phone: "+1234584" },
        { id: 5, name: "Lebron", phone: "+6846846" },
        { id: 6, name: "Messi", phone: "+7984849" },
    ]);

    const onItemAdded = (name, phone) => {
        setUsers(() => {
            const newArr = [...users, { id: 7, name: name, phone: phone }];
            return newArr;
        });
    };

    const onSearchChange = (search) => {
        setSearch(search);
    };

    const onDelete = (id) => {
        setUsers(() => {
            const idx = users.findIndex((item) => item.id === id);
            const newArr = [...users.slice(0, idx), ...users.slice(idx + 1)];
            return newArr;
        });
    };

    const searchItems = (items, search) => {
        if (search.length === 0) {
            return items;
        }

        return items.filter((item) => {
            return item.name.toLowerCase().indexOf(search.toLowerCase()) > -1;
        });
    };

    const filteredList = searchItems(users, search);
    return (
        <div className="app">
            <div className="content">
                <Search onSearchChange={onSearchChange} />
                <ContactList users={filteredList} onDelete={onDelete} />
                <ContactAddForm onItemAdded={onItemAdded} />
            </div>
        </div>
    );
};

export default App;
