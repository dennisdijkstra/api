import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Formik, Form } from 'formik';
import { connect } from 'react-redux';
import jwtDecode from 'jwt-decode';
import setCurrentUser from '../../actions/user';
import { LoginValidation } from '../../validation/ValidationSchema';
import history from '../../history';
import Field from '../../components/formik/Field';
import s from './login.css';


class Login extends Component {
    static propTypes = {
        setCurrentUser: PropTypes.func.isRequired,
    };

    submit = async (values, { setErrors }) => {
        const { setCurrentUser: setUser } = this.props;

        if (values) {
            const response = await fetch('/api/users/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(values),
            });
            const json = await response.json();

            if (response.status !== 200) {
                setErrors({ [json.field]: json.message });
            } else {
                const { token } = json;
                const decoded = jwtDecode(token);

                localStorage.setItem('jwtToken', token);
                setUser(decoded);
                history.push('/dashboard');
            }
        }
    };

    render() {
        return (
            <div className={s.login}>
                <div className={s.form}>
                    <h1>Log into your account</h1>
                    <Formik
                        initialValues={{
                            email: '',
                            password: '',
                        }}
                        onSubmit={this.submit}
                        validationSchema={LoginValidation}
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
            </div>
        );
    }
}

const mapStateToProps = state => ({
    user: state.user,
});

export default connect(mapStateToProps, { setCurrentUser })(Login);
