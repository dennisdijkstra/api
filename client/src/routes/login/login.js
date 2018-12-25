import React, { Component } from 'react';
import { Formik, Form } from 'formik';
import ValidationSchema from '../../validation/ValidationSchema';
import Field from '../../components/formik/Field';

class Register extends Component {
    submit = (values, { setSubmitting, setStatus }) => {
        if (values) {
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
                validationSchema={ValidationSchema}
            >
                {({ dirty, isSubmitting }) => (
                    <Form>
                        <Field name="email" label="E-mail" />
                        <Field name="password" label="Password" />
                        <button disabled={!dirty || isSubmitting} type="submit">Login</button>
                    </Form>
                )}
            </Formik>
        );
    }
}

export default Register;
