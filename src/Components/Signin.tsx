import { Formik, Form, Field } from 'formik';
import { useSelector, useDispatch } from 'react-redux';
import { loginUser } from '../Services/Reducers/userReducer';
import { RootState, AppDispatch } from '../Services/store';

interface formValues {
    username: string,
    password: string,
}


const Signin = () => {
    const initialValues: formValues = {
        username: '',
        password: '',
    }
    const dispatch = useDispatch<AppDispatch>();

    return (
        <div className='bg-[#f7f8fd] w-screen h-screen flex justify-center '>
            <div className='w-1/3 content-center my-auto'>
                <div className='text-center '>
                    <h2 className='font-KumbhSans'>Sign in to your account</h2>
                </div>
                <Formik
                    initialValues={initialValues}
                    onSubmit={(values, actions) => {
                        console.log("Form Values",values);
                        dispatch(loginUser(values))
                    }}
                >
                    <Form>
                        <div className='my-5'>
                            <Field name='username' className='appearance-none border rounded-t-lg focus:rounded-t-lg border-gray-200 w-full leading-tight py-2 px-4 focus:outline-none focus:bg-white focus:border-purple-500' type='text' placeholder='Email Address' id='Username' />
                            <Field name='password' className='appearance-none border rounded-b-lg focus:rounded-b-lg border-gray-200 w-full leading-tight py-2 px-4 focus:outline-none focus:bg-white focus:border-purple-500' placeholder='Password' id='Username' />
                        </div>
                        <div className='flex justify-between my-5'>
                            <div className='flex align-baseline'>
                                <input type='checkbox' id='default-checkbox' value="" className='appearance-none h-4 w-4 bg-white border border-gray-200 checked:bg-indigo-600 rounded mt-1 transition duration-200' />
                                <label className='pl-2'>Remember Me</label>
                            </div>
                            <p className='text-indigo-600 font-medium'>Forgot Password?</p>
                        </div>
                        <button className='w-full bg-indigo-600 py-2 rounded-lg text-white hover:bg-indigo-300'>Sign In</button>
                    </Form>
                </Formik>
            </div>
        </div>
    )
}

export default Signin;