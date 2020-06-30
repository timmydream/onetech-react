import React from "react";
import Note from "../Note/Note";

const NotesList = ({ notes }) => {
    const elements = notes.map((e) => {
        return (
            <div key={e.id}>
                <Note title={e.title} body={e.body} />
            </div>
        );
    });
    return <>{elements}</>;
};

export default NotesList;
