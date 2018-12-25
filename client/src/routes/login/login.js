import React, { Component } from 'react';
import { Formik, Form } from 'formik';
import Field from '../../components/formik/Field';

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
                {({ dirty, isSubmitting }) => (
                    <Form>
                        <Field name="email" label="E-mail" />
                        <Field name="password" label="" />
                        <button disabled={!dirty || isSubmitting} type="submit">Login</button>
                    </Form>
                )}
            </Formik>
        );
    }
}

export default Register;
