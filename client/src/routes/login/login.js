import React, { Component } from 'react';
import { Formik, Form, Field } from 'formik';

class Register extends Component {
    submit = (values, { setSubmitting, setStatus }) => {
        if (values) {
            console.log(values);
            setSubmitting(false);
            setStatus({ submitSucceeded: true });
        }
    };

    render() {
        return (
            <Formik
                initialValues={{
                    email: '',
                    password: '',
                }}
                onSubmit={this.submit}
            >
                {({ dirty, isSubmitting }) => {
                    return (
                        <Form>
                            <Field type="text" name="email" placeholder="Email" />
                            <Field type="password" name="password" placeholder="Password" />
                            <button disabled={!dirty || isSubmitting} type="submit">Login</button>
                        </Form>
                    );
                }}
            </Formik>
        );
    }
}

export default Register;
