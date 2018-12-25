import * as Yup from 'yup';

const ValidationSchema = Yup.object().shape({
    email: Yup
        .string()
        .min(3, 'Too short')
        .max(255, 'Too long')
        .email('Invalid email address')
        .required('Email is required'),
    password: Yup
        .string()
        .min(3, 'Too short')
        .max(255, 'Too long')
        .required('Password is required'),
});

export default ValidationSchema;
