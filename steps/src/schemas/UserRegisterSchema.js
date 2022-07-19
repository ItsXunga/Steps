import * as Yup from 'yup';

export default Yup.object().shape({
    name: Yup.string()
        .required('Username is required')
        .min(3, 'Username must be at least 3 characters')
        .max(20, 'Username must not exceed 20 characters'),
    email: Yup.string()
        .required('Email is required')
        .email('Email is invalid'),
    password: Yup.string()
        .required('Password is required')
        .min(6, 'Password must be at least 5 characters')
        .max(40, 'Password must not exceed 40 characters'),
});