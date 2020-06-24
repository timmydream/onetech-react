import React from "react";
import { Avatar } from "antd";
import { UserOutlined, DeleteOutlined } from "@ant-design/icons";

const Contact = ({ name, phone, onDelete }) => {
    return (
        <span className="contact-container">
            <div className="contact-info">
                <Avatar
                    size={56}
                    style={{ backgroundColor: "rgba(59, 60, 82, 1)" }}
                    icon={<UserOutlined style={{ color: "#08c" }} />}
                />
                <div className="contact-text">
                    <h3>{name}</h3>
                    <span>{phone}</span>
                </div>
            </div>
            <button className="contact-delete-but" onClick={onDelete}>
                <DeleteOutlined onClick={onDelete} style={{ color: "#08c" }} />
            </button>
        </span>
    );
};

export default Contact;
