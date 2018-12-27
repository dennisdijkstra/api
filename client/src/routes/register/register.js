import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Formik, Form } from 'formik';
import { connect } from 'react-redux';
import * as actions from '../../actions/user';
import ValidationSchema from '../../validation/ValidationSchema';
import Field from '../../components/formik/Field';


class Register extends Component {
    static propTypes = {
        registerUser: PropTypes.func.isRequired,
    };

    submit = (values, { setSubmitting, setStatus }) => {
        const { registerUser } = this.props;

        if (values) {
            registerUser(values);
            setSubmitting(false);
            setStatus({ submitSucceeded: true });
        }
    };

    render() {
        return (
            <div>
                <h1>Register for an account.</h1>
                <Formik
                    initialValues={{
                        firstname: '',
                        lastname: '',
                        email: '',
                        password: '',
                    }}
                    onSubmit={this.submit}
                    validationSchema={ValidationSchema}
                >
                    {({ dirty, isSubmitting }) => (
                        <Form>
                            <Field name="firstname" label="First name" placeholder="First name" />
                            <Field name="lastname" label="Last name" placeholder="Last name" />
                            <Field name="email" label="E-mail" placeholder="E-mail" />
                            <Field name="password" label="Password" placeholder="Password" />
                            <button disabled={!dirty || isSubmitting} type="submit">Register</button>
                        </Form>
                    )}
                </Formik>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    user: state.user,
});

export default connect(mapStateToProps, actions)(Register);
