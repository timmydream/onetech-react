import React from "react";
import { Input, Button } from "antd";

const ContactAddForm = (props) => {
    const [name, setName] = React.useState("");
    const [phone, setPhone] = React.useState("");

    const onNameChange = (e) => {
        setName(e.target.value);
    };

    const onPhoneChange = (e) => {
        setPhone(e.target.value);
    };

    const onSubmit = (e) => {
        e.preventDefault();
        setName("");
        setPhone("");
        const f = props.onItemAdded || (() => {});
        f(name, phone);
    };

    return (
        <form id="form" onSubmit={onSubmit}>
            <div className="add-form">
                <Input
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={onNameChange}
                    className="add-form-input"
                />
                <Input
                    type="text"
                    placeholder="Phone"
                    value={phone}
                    onChange={onPhoneChange}
                    className="add-form-input"
                />
            </div>
            <Button
                className="add-form-button"
                form="form"
                htmlType="submit"
                key="submit"
                block
            >
                Add
            </Button>
        </form>
    );
};
export default ContactAddForm;
