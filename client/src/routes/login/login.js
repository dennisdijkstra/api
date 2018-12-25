import React, { Component } from 'react';
import { Formik, Form } from 'formik';
import ValidationSchema from '../../validation/ValidationSchema';
import Field from '../../components/formik/Field';
import s from './login.css';


class Register extends Component {
    submit = (values, { setSubmitting, setStatus }) => {
        if (values) {
            setSubmitting(false);
            setStatus({ submitSucceeded: true });
        }
    };

    render() {
        return (
            <div className={s.login}>
                <h1>Log into your account</h1>
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
                            <Field name="email" label="E-mail" placeholder="E-mail" />
                            <Field name="password" label="Password" placeholder="Password" />
                            <button disabled={!dirty || isSubmitting} type="submit">Login</button>
                        </Form>
                    )}
                </Formik>
            </div>
        );
    }
}

export default Register;
