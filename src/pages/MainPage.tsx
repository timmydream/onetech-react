import React from "react";
import { CVHeader } from "../components/CVHeader/CVHeader";
import { CVMain } from "../components/CVMain/CVMain";

export const MainPage: React.FC = () => {
    return (
        <div className="content">
            <CVHeader />
            <CVMain />
        </div>
    );
};