import React, { Component } from 'react';
import { Field } from 'formik';
import s from './Field.css';

class InputField extends Component {
    render() {
        const { name, label } = this.props;

        return (
            <Field
                name={name}
                render={({ field, form: { touched, errors } }) => {
                    return (
                        <label htmlFor={name} className={s.label}>{label}
                            <input {...field} type={name} id={name} />
                            {touched[field.name]
                                && errors[field.name]
                                && <div className={s.error}>{errors[field.name]}</div>}
                        </label>
                    );
                }}
            />
        );
    }
}

export default InputField;
