import React, { useState, useEffect } from "react";
import NotesList from "../components/NotesList/NotesList";
import Search from "../components/Search/Search";
import AddNote from "../components/AddNote/AddNote";
import { getPosts } from "../service/api";
import { Form } from "antd";
import "./App.css";
import "antd/dist/antd.css";

const App = () => {
    const [search, setSearch] = useState("");
    const [notes, setNotes] = useState([]);

    useEffect(() => {
        getPosts().then((json) => setNotes(json));
    }, []);

    const onSearchChange = (search) => {
        setSearch(search);
    };

    const searchItems = (items, search) => {
        if (search.length === 0) {
            return items;
        }

        return items.filter((item) => {
            return (
                item.title.indexOf(search) > -1 ||
                item.body.indexOf(search) > -1
            );
        });
    };

    const filteredList = searchItems(notes, search);
    return (
        <div className="app">
            <div className="header">
                <Search onSearchChange={onSearchChange} />
                <Form>
                    <AddNote />
                </Form>
            </div>
            <div className="notes">
                <NotesList notes={filteredList} />
            </div>
        </div>
    );
};

export default App;
