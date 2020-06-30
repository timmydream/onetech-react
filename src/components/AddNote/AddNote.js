import React from "react";
import { Input, Form, Button } from "antd";
import { postNote } from "../../service/api";

const AddNote = () => {
    return (
        <Form.Item size={"large"}>
            <Input.TextArea className="txt-area" style={{ display: "flex" }} />
            <Button
                type="primary"
                htmlType="submit"
                className="add-button"
                onClick={() => postNote().then((json) => console.log(json))}
            >
                Add
            </Button>
        </Form.Item>
    );
};

export default AddNote;
