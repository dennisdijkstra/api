import React, { Component } from 'react';
import { Field } from 'formik';
import classNames from 'classnames';
import s from './Field.css';

class InputField extends Component {
    render() {
        const { name, label, placeholder } = this.props;

        return (
            <Field
                name={name}
                render={({ field, form: { touched, errors } }) => {
                    const className = classNames({
                        [`${s.label}`]: true,
                        [`${s.error}`]: touched[field.name] && errors[field.name],
                    });

                    return (
                        <label htmlFor={name} className={className}>{label}
                            <input {...field} type={name} id={name} placeholder={placeholder} />
                            {touched[field.name]
                                && errors[field.name]
                                && <div>{errors[field.name]}</div>
                            }
                        </label>
                    );
                }}
            />
        );
    }
}

export default InputField;
