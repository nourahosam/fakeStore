import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { AppDispatch, RootState } from '../Services/store';
import { signupUser } from '../Services/Reducers/userReducer';
import { userType } from "../Services/Types";
//import { createUser } from '../Services/Reducers/userReducer';

interface formValues {
    fullName: string,
    email: string,
    password: string,
    confirmPassword: string
}

const Signup = () => {
    const users = useSelector((state: RootState) => state.userList);
    const dispatch = useDispatch<AppDispatch>();
    
    // interface usersTypes {
    //     fullName: string,
    //     email: string,
    //     password: string,
    //     shoppingCart: object
    // }

    const initialValues: formValues = {
        fullName: '',
        email: '',
        password: '',
        confirmPassword: ''
    }

    useEffect(() => {
        
    }, []);

    return (
        <div className='w-screen h-screen bg-[#f7f8fd] flex justify-center'>
            <div className='my-auto w-1/3'>
                <Formik
                initialValues={initialValues}
                onSubmit= {(values, actions) => {
                    console.log('users',users)
                    const newUser:userType = {isLogged: false, fullName: values.fullName, email:values.email, password: values.password}
                    dispatch(signupUser(newUser));
                    console.log('usersafter',users)

                    console.log('values',values.fullName);
                    //actions.setSubmitting(false);
                }}
        >
                <Form className='bg-white p-5 shadow-md'>
                        <h2 className='text-2xl font-bold'>Sign Up</h2>
                        <div className='py-3'>
                            <Field type='text' id='fullName' name='fullName' placeholder='Full Name' className='appearance-none border border-gray-200 p-2 rounded w-full' />
                        </div>
                        <div className='py-3'>
                            <Field type='text' id='email' name='email' placeholder='Email' className='appearance-none border border-gray-200 p-2 rounded w-full' />
                        </div>
                        <div className='py-3'>
                            <Field type='password' id='password' name='password' placeholder='Password' className='appearance-none border border-gray-200 p-2 rounded w-full' />
                        </div>
                        <div className='py-3'>
                            <Field type='password' id='confirmPassword' name='confirmPassword' placeholder='Confirm Password' className='appearance-none border border-gray-200 p-2 rounded w-full' />
                        </div>
                        <button type='submit' className='bg-green-500 hover:bg-green-600 text-white w-full p-2 rounded '>Create Account</button>
                        <p className='text-gray-500 mt-3 mb-4'>By Signing up, you agree to the <span className='underline underline-offset-4 cursor-pointer'>Terms of Service</span> and <span className='underline underline-offset-4 cursor-pointer'>Privacy Policy</span>.</p>

                </Form>
            </Formik>
            <div className='my-auto mt-4'>
                <p>Already have an account? <span className='underline underline-offset-4 text-blue-400 cursor-pointer'>Log in</span></p>
            </div>
        </div>
        </div>
    )
}

export default Signup;