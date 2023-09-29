import {toast, ToastContainer} from 'react-toastify';
import {Formik, Form, Field} from 'formik';
import * as Yup from 'yup';
import Link from 'next/link';
import handler from "../../pages/api/signup";
import {SIGN_UP} from "../../data/constants";
import {useRouter} from "next/router";

const SignupSchema = Yup.object().shape({
    username: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    email: Yup.string()
        .email('Invalid email')
        .required('Required'),
    password: Yup.string()
        .min(6, 'Password should be at least 6 characters')
        .required('Required'),
});

const Signup = () => {

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
                                    username: '',
                                    email: '',
                                    password: '',
                                }}
                                validationSchema={SignupSchema}
                                onSubmit={async (values, { setSubmitting }) => {
                                    const { username, email, password } = values;

                                    try {
                                        const response = await fetch(SIGN_UP, { // Update with your API route
                                            method: 'POST',
                                            headers: {
                                                'Accept': 'application/json',
                                                'Content-Type': 'application/json'
                                            },
                                            body: JSON.stringify({
                                                username,
                                                email,
                                                password,
                                            }),
                                        });

                                        const data = await response.json();

                                        if (response.ok) {
                                            toast.success("Sign Up Successfully!");
                                            await router.push('/signin'); // Redirect to sign-in page

                                        } else {
                                            // If the API sends back some error message
                                            toast.error(data.message || "Registration failed!");
                                        }
                                    } catch (error) {
                                        toast.error("Something went wrong. Please try again.");
                                    } finally {
                                        setSubmitting(false); // Finish the submission
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
                                                <Field type="text" name='username' className="form-control"/>
                                                {errors.username && touched.username &&
                                                    <div className='alert alert-danger mt-2'>{errors.username}</div>}
                                            </div>

                                            <div className="mb-3">
                                                <label htmlFor="email" className="form-label">Email Address</label>
                                                <Field type="email" name='email' className="form-control"/>
                                                {errors.email && touched.email &&
                                                    <div className='alert alert-danger mt-2'>{errors.email}</div>}
                                            </div>

                                            <div className="mb-3">
                                                <label htmlFor="password" className="form-label">Password</label>
                                                <Field type="password" name='password' className="form-control"/>
                                                {errors.password && touched.password &&
                                                    <div className='alert alert-danger mt-2'>{errors.password}</div>}
                                            </div>

                                            <div className="d-grid">
                                                <button type='submit' className="btn btn-primary">Sign Up</button>
                                            </div>

                                            <Link href="/signin" className="text-center mt-10 m-auto ">
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
