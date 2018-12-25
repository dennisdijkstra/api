import React, { Component } from 'react';
import { Field } from 'formik';
import s from './Field.css';

class InputField extends Component {
    render() {
        const { name, label, placeholder } = this.props;

        return (
            <Field
                name={name}
                render={({ field, form: { touched, errors } }) => (
                    <label htmlFor={name} className={s.label}>{label}
                        <input {...field} type={name} id={name} placeholder={placeholder} />
                        {touched[field.name]
                            && errors[field.name]
                            && <div className={s.error}>{errors[field.name]}</div>
                        }
                    </label>
                )}
            />
        );
    }
}

export default InputField;
