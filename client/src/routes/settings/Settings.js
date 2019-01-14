import React, { Component } from 'react';
import { Formik, Form } from 'formik';
import Field from '../../components/atoms/formik/Field';
import { RegisterValidation } from '../../validation/ValidationSchema';


class Settings extends Component {
    render() {
        return (
            <>
                <h1>User settings</h1>
                <Formik
                    initialValues={{
                        firstname: '',
                        lastname: '',
                        email: '',
                    }}
                    onSubmit={this.submit}
                    validationSchema={RegisterValidation}
                >
                    {({ dirty, isSubmitting }) => (
                        <>
                            <Form>
                                <Field name="firstname" label="First name" placeholder="First name" />
                                <Field name="lastname" label="Last name" placeholder="Last name" />
                                <Field name="email" label="E-mail" placeholder="E-mail" />
                                <button disabled={!dirty || isSubmitting} type="submit">Save</button>
                            </Form>
                        </>
                    )}
                </Formik>
            </>
        );
    }
}

export default Settings;
