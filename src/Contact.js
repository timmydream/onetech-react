import React from 'react';

const Contact = ({ name, phone }) => {
    return (
        <div className="contact">
            <p>{name}</p>
            <span>{phone}</span>
        </div>
    );
}
export default Contact;