import React from 'react';
import PropTypes from 'prop-types';
import { Formik, Form } from 'formik';
import { connect } from 'react-redux';
import jwtDecode from 'jwt-decode';
import setAuthToken from '../../utils/setAuthToken';
import { setCurrentUser } from '../../actions/user';
import { LoginValidation } from '../../validation/ValidationSchema';
import history from '../../history';
import Field from '../../components/atoms/formik/Field';
import Link from '../../components/atoms/link/Link';

const Login = ({ setCurrentUser: setUser }) => {
    const submit = async (values, { setErrors, setSubmitting }) => {
        if (values) {
            const response = await fetch('/api/user/login', {
                method: 'POST',
                headers: setAuthToken({
                    'Content-Type': 'application/json',
                }),
                body: JSON.stringify(values),
            });
            const json = await response.json();

            if (response.status !== 200) {
                setSubmitting(false);
                setErrors({ [json.field]: json.message });
            } else {
                const { token } = json;
                const decoded = jwtDecode(token);

                localStorage.setItem('jwtToken', token);
                setUser(decoded);
                history.push('/');
            }
        }
    };

    return (
        <>
            <h1>Log into your account</h1>
            <Formik
                initialValues={{
                    email: '',
                    password: '',
                }}
                onSubmit={submit}
                validationSchema={LoginValidation}
            >
                {({ dirty, isSubmitting }) => (
                    <>
                        <Form>
                            <Field name="email" label="E-mail" placeholder="E-mail" />
                            <Field name="password" label="Password" placeholder="Password" />
                            <button disabled={!dirty || isSubmitting} type="submit">Login</button>
                        </Form>
                        <Link to="/register">Register for an account</Link>
                    </>
                )}
            </Formik>
        </>
    );
};

const mapStateToProps = state => ({
    user: state.user,
});

Login.propTypes = {
    setCurrentUser: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, { setCurrentUser })(Login);
