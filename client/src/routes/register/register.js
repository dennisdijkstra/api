import React from 'react';
import { Formik, Form } from 'formik';
import { connect } from 'react-redux';
import { setCurrentUser } from '../../actions/user';
import { RegisterValidation } from '../../validation/ValidationSchema';
import Field from '../../components/atoms/formik/Field';
import history from '../../history';
import Link from '../../components/atoms/link/Link';


const Register = () => {
    const submit = async (values, { setErrors, setSubmitting }) => {
        if (values) {
            const response = await fetch('/api/user/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(values),
            });
            const json = await response.json();

            if (response.status !== 200) {
                setSubmitting(false);
                setErrors({ email: json.message });
            } else {
                history.push('/');
            }
        }
    };

    return (
        <>
            <h1>Register for an account</h1>
            <Formik
                initialValues={{
                    firstname: '',
                    lastname: '',
                    email: '',
                    password: '',
                }}
                onSubmit={submit}
                validationSchema={RegisterValidation}
            >
                {({ dirty, isSubmitting }) => (
                    <>
                        <Form>
                            <Field name="firstname" label="First name" placeholder="First name" />
                            <Field name="lastname" label="Last name" placeholder="Last name" />
                            <Field name="email" label="E-mail" placeholder="E-mail" />
                            <Field name="password" label="Password" placeholder="Password" />
                            <button disabled={!dirty || isSubmitting} type="submit">Register</button>
                        </Form>
                        <Link to="/">Login to your account</Link>
                    </>
                )}
            </Formik>
        </>
    );
};

const mapStateToProps = state => ({
    user: state.user,
});

export default connect(mapStateToProps, { setCurrentUser })(Register);
