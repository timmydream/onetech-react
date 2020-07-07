import React from "react";
import { withFormik, FormikProps, ErrorMessage } from "formik";
import * as Yup from "yup";
import InputField from "../styles/InputField";
import Button from "../styles/Button";
import { Services } from "../services/Services";

interface FormValues {
    email: string;
    password: string;
}

interface MyFormProps {
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
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
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

export const LoginPage = withFormik<MyFormProps, FormValues>({
    mapPropsToValues: (props) => ({
        email: props.initialEmail || "",
        password: props.initialPassword || "",
    }),

    validationSchema: Yup.object().shape({
        email: Yup.string()
            .email("Email not valid")
            .required("Email is required!"),
        password: Yup.string().required("Password is required!"),
    }),

    handleSubmit({ email, password }: FormValues) {
        console.log({ email, password });
        const obj = { email, password };
        Services(obj, 'login').then((data) => console.log(data));
    },
})(Form);

export default LoginPage;