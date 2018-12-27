import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Formik, Form } from 'formik';
import { connect } from 'react-redux';
import * as actions from '../../actions/user';
import { LoginValidation } from '../../validation/ValidationSchema';
import Field from '../../components/formik/Field';
import s from './login.css';


class Login extends Component {
    static propTypes = {
        loginUser: PropTypes.func.isRequired,
    };

    submit = (values, { setSubmitting, setStatus }) => {
        const { loginUser } = this.props;

        if (values) {
            loginUser(values);
            setSubmitting(false);
            setStatus({ submitSucceeded: true });
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

export default connect(mapStateToProps, actions)(Login);
