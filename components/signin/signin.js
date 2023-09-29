import { toast, ToastContainer } from 'react-toastify';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import Link from 'next/link';
import {SIGN_IN} from "../../data/constants";
import {Message_data} from "../../context/context";
import {useContext} from "react";
import {useRouter} from "next/router";

const SigninSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Required'),
    password: Yup.string().required('Required'),
});

const Signin = () => {

    const { setUser } = useContext(Message_data);
    const router = useRouter();

    return (
        <>
            <section className="py-5">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-6">
                            {/*<h2 className="text-center mb-4">Sign In</h2>*/}
                            <Formik
                                initialValues={{
                                    email: '',
                                    password: '',
                                }}
                                validationSchema={SigninSchema}
                                onSubmit={async (values, { setSubmitting }) => {
                                    const { email, password } = values;

                                    try {
                                        const response = await fetch(SIGN_IN, {
                                            method: 'POST',
                                            headers: {
                                                'Accept': 'application/json',
                                                'Content-Type': 'application/json'
                                            },
                                            body: JSON.stringify({
                                                identifier: email,
                                                password,
                                            }),
                                        });

                                        const data = await response.json();

                                        if (response.ok) {

                                            await router.push('/');
                                            toast.success("Signed In Successfully!");
                                            // Here, you'd probably want to do something with the returned JWT token,
                                            // like storing it in local storage or in a cookie for further authenticated requests.
                                            localStorage.setItem('token', data.jwt);
                                            localStorage.setItem('user', data.user.id);
                                            // Redirect or do something else depending on your needs.
                                        } else {
                                            toast.error(data.message[0].messages[0].message || "Sign-in failed!");
                                        }
                                    } catch (error) {
                                        toast.error("Something went wrong. Please try again.");
                                    } finally {
                                        setSubmitting(false); // Finish the submission
                                    }
                                }}

                            >
                                {({ errors, touched }) => (
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
                                                <label htmlFor="email" className="form-label">Email Address</label>
                                                <Field type="email" name='email' className="form-control" />
                                                {errors.email && touched.email && <div className='alert alert-danger mt-2'>{errors.email}</div>}
                                            </div>

                                            <div className="mb-3">
                                                <label htmlFor="password" className="form-label">Password</label>
                                                <Field type="password" name='password' className="form-control" />
                                                {errors.password && touched.password && <div className='alert alert-danger mt-2'>{errors.password}</div>}
                                            </div>

                                            <div className="d-grid">
                                                <button type='submit' className="btn btn-primary">Sign In</button>
                                            </div>

                                            <div className="d-grid">

                                            <Link href="/signup" className="text-primary text-center mt-3 text-decoration-underline">
                                                Don't have an account?
                                            </Link>
                                            </div>


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

export default Signin;
