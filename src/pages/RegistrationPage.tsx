import React from "react";
import { withFormik, FormikProps, ErrorMessage } from "formik";
import * as Yup from "yup";
import InputField from "../styles/InputField";
import Button from "../styles/Button";
import { Services } from "../services/Services";

interface FormValues {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
}

interface MyFormProps {
    initialFirstName?: string,
    initialLastName?: string,
    initialEmail?: string;
    initialPassword?: string;
}

const Form = (props: FormikProps<FormValues>) => {
    const {
        values,
        handleChange,
        handleBlur,
        handleSubmit
    } = props;
    return (
        <>
            <h1>Registration</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>First Name</label>
                    <InputField
                        type="firstName"
                        name="firstName"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.firstName}
                    />
                    <ErrorMessage component="p" name="firstName" /> 
                </div>
                <div>
                    <label>Last Name</label>
                    <InputField
                        type="lastName"
                        name="lastName"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.lastName}
                    />
                    <ErrorMessage component="p" name="lastName" /> 
                </div>
                <div>
                    <label>Email</label>
                    <InputField
                        type="email"
                        name="email"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.email}
                    />
                    <ErrorMessage component="p" name="email" /> 
                </div>
                <div>
                    <label>Password</label>
                    <InputField.Password
                        type="password"
                        name="password"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.password}
                    />
                    <ErrorMessage component="p" name="password" /> 
                </div>
                <Button type="primary" htmlType="submit">Sign In</Button>
            </form>
        </>
    );
};

export const RegistrationPage = withFormik<MyFormProps, FormValues>({
    mapPropsToValues: (props) => ({
        firstName: props.initialFirstName || "",
        lastName: props.initialLastName || "",
        email: props.initialEmail || "",
        password: props.initialPassword || "",
    }),

    validationSchema: Yup.object().shape({
        firstName: Yup.string().required("First Name is required"),
        lastName: Yup.string().required("Last Name is required"),
        email: Yup.string()
            .email("Email not valid")
            .required("Email is required"),
        password: Yup.string().required("Password is required"),
    }),

    handleSubmit({ firstName, lastName, email, password }: FormValues) {
        console.log({ firstName, lastName, email, password });
        const obj = { firstName, lastName, email, password };
        Services(obj, 'register').then((data) => console.log(data));
    },
})(Form);

export default RegistrationPage;