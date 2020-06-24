import React from "react";
import Contact from "./Contact";

const ContactList = ({ users, onDelete }) => {
    const elements = users.map((item) => {
        const { id, name, phone } = item;
        return (
            <li key={id} className="contact-list-item">
                <Contact
                    name={name}
                    phone={phone}
                    onDelete={() => onDelete(id)}
                />
            </li>
        );
    });

    return <ul className="contact-list">{elements}</ul>;
};
export default ContactList;
