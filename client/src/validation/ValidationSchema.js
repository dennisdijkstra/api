import * as Yup from 'yup';

export const LoginValidation = Yup.object().shape({
    email: Yup
        .string()
        .min(3, 'Too short')
        .max(255, 'Too long')
        .email('Invalid e-mail address')
        .required('E-mail is required'),
    password: Yup
        .string()
        .min(3, 'Too short')
        .max(255, 'Too long')
        .required('Password is required'),
});

export const RegisterValidation = Yup.object().shape({
    firstname: Yup
        .string()
        .required('First name is required'),
    lastname: Yup
        .string()
        .required('Last name is required'),
    email: Yup
        .string()
        .min(3, 'Too short')
        .max(255, 'Too long')
        .email('Invalid e-mail address')
        .required('E-mail is required'),
    password: Yup
        .string()
        .min(3, 'Too short')
        .max(255, 'Too long')
        .required('Password is required'),
});

export const SettingsValidation = Yup.object().shape({
    firstname: Yup
        .string()
        .required('First name is required'),
    lastname: Yup
        .string()
        .required('Last name is required'),
    email: Yup
        .string()
        .min(3, 'Too short')
        .max(255, 'Too long')
        .email('Invalid e-mail address')
        .required('E-mail is required'),
});
