import React from "react";

export const CVHeader: React.FC = () => {
    return (
        <div className="cv-header">
            <div className="cv-info">
                <img className="logo" src="./logo.png" alt="logo" />
                <div className="cv-info-flex">
                    <h1>LOUIS</h1>
                    <h1>ANDERSON</h1>
                    <h2>SOFTWARE ENGINEER</h2>
                </div>
            </div>
            <div className="cv-contacts">
                <p>Phone: 808-242-7291</p>
                <p>E-mail: andersonlouis@gmail.com</p>
                <p>Website: andersonlouis.com</p>
            </div>
        </div>
    );
};
