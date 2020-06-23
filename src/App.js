import React from "react";
import Contact from "./Contact";
import './App.css';

const App = ({ users }) => {
    const elements = users.map((item) => {
        const { name, phone } = item;
        return (
            <li key={1} className="list-item">
                <p className="user-image"></p>
                <Contact name={name} phone={phone} />
            </li>
        );
    });
    return (
        <div className="App">
            <input type="search" placeholder="Search..." />
            <div>
                {elements}
            </div>
        </div>
    );
};

export default App;
