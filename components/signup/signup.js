import {toast, ToastContainer} from 'react-toastify';
import {Formik, Form, Field} from 'formik';
import * as Yup from 'yup';
import Link from 'next/link';
import handler from "../../pages/api/signup";
import {SIGN_UP} from "../../data/constants";
import {useRouter} from "next/router";
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import React, { useState } from 'react';

const SignupSchema = Yup.object().shape({
    username: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    email: Yup.string()
        .email('Invalid email')
        .required('Required'),
        phone: Yup.string()
        .matches(/^[0-9]+$/, 'Invalid phone number')
        .required('Required'),
    phonenumber: Yup.string().required('Required-'),
    password: Yup.string()
        .min(6, 'Password should be at least 6 characters')
        .required('Required'),
    confirmPassword: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Passwords must match')
        .required('Required'),
});


const Signup = () => {

    const router = useRouter();
    const [showPassword, setShowPassword] = React.useState(false);
    return (
        <>
            <section className="py-5">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-6">
                            {/*<h2 className="text-center mb-4">Sign In</h2>*/}
                            <Formik
                                initialValues={{
                                    username: '',
                                    email: '',
                                    phonenumber: '',
                                    password: '',
                                    confirmPassword: '',
                                }}
                                validationSchema={SignupSchema}
                                onSubmit={async (values, { setSubmitting }) => {
                                    const { username, email, phonenumber, password } = values;
                                
                                    try {
                                        const response = await fetch(SIGN_UP, {
                                            method: 'POST',
                                            headers: {
                                                'Accept': 'application/json',
                                                'Content-Type': 'application/json'
                                            },
                                            body: JSON.stringify({
                                                username,
                                                email,
                                                phonenumber,
                                                password,
                                            }),
                                        });
                                
                                        const data = await response.json();
                                
                                        if (response.ok) {
                                            toast.success("Sign Up Successfully!");
                                            router.push('/signin'); // Removed 'await'
                                        } else {
                                            toast.error(data.message || "Registration failed!");
                                        }
                                    } catch (error) {
                                        toast.error("Something went wrong. Please try again.");
                                    } finally {
                                        setSubmitting(false);
                                    }
                                }}

                            >
                                {({errors, touched}) => (
                                    <>
                                        <ToastContainer
                                            position="top-left"
                                            autoClose={5000}
                                            hideProgressBar={false}
                                            newestOnTop={false}
                                            closeOnClick
                                            rtl={false}
                                            pauseOnFocusLoss
                                            draggable
                                            pauseOnHover
                                            theme="light"
                                        />
                                        <Form>
                                            <div className="mb-3">
                                                <label htmlFor="username" className="form-label">Username</label>
                                                <Field type="text" name='username' className="form-control" />
                                                {errors.username && touched.username &&
                                                    <div className='alert alert-danger mt-2'>{errors.username}</div>}
                                            </div>

                                            <div className="mb-3">
                                                <label htmlFor="email" className="form-label">Email Address</label>
                                                <Field type="email" name='email' className="form-control" />
                                                {errors.email && touched.email &&
                                                    <div className='alert alert-danger mt-2'>{errors.email}</div>}
                                            </div>

                                            <div className="mb-3">
                                                <label htmlFor="phonenumber" className="form-label">Phone Number</label>
                                                <Field type="text" name='phonenumber' className="form-control" />
                                                {errors.phonenumber && touched.phonenumber &&
                                                    <div className='alert alert-danger mt-2'>{errors.phonenumber}</div>}
                                            </div>

                                            <div className="mb-3">
                                                <label htmlFor="password" className="form-label">Password</label>
                                                <div className="input-group">
                                                    <Field
                                                        type={showPassword ? 'text' : 'password'}
                                                        name='password'
                                                        className="form-control"
                                                    />
                                                    <span className="input-group-text" onClick={() => setShowPassword(!showPassword)}>
                                                        {showPassword ? <FaEyeSlash /> : <FaEye />}
                                                    </span>
                                                </div>
                                                {errors.password && touched.password &&
                                                    <div className='alert alert-danger mt-2'>{errors.password}</div>}
                                            </div>

                                            <div className="mb-3">
                                                <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
                                                <Field type="password" name='confirmPassword' className="form-control" />
                                                {errors.confirmPassword && touched.confirmPassword &&
                                                    <div className='alert alert-danger mt-2'>{errors.confirmPassword}</div>}
                                            </div>

                                            <div className="d-grid">
                                                <button type='submit' className="btn btn-primary">Sign Up</button>
                                            </div>

                                            <Link href="/signin" className="text-center mt-10 m-auto">
                                                Already have an account? <span className="text-primary">Sign In</span>
                                            </Link>
                                        </Form>
                                    </>
                                )}
                            </Formik>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Signup;
