import React from "react";

const Note = ({ title, body }) => {
    return (
        <>
            <div className="note">
                <h4>{title}</h4>
                <p>{body}</p>
            </div>
        </>
    );
};

export default Note;
