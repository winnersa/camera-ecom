import SectionTitleCenter from '../section-title/section-title-center';
import { toast, ToastContainer } from 'react-toastify';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';


const ContactOne = () => {
    const ContactSchema = Yup.object().shape({
        username: Yup.string()
          .min(2, 'Too Short!')
          .max(50, 'Too Long!'),
          email: Yup.string().email('Invalid email').required('Required'),
          phone: Yup.number().required('Required'),
          company: Yup.string(),
          message: Yup.string().required('Required'),
    });
    
  return (
    <>

        {/* contact area start */}
        <section>
            <div className="contact-area pt-110 pb-120">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <SectionTitleCenter subtitle={"Interested In"} title={"Your Security Needs"}/>
                        </div>
                    </div>
                    <Formik
                        initialValues={{
                            accesscontrolsystems: true,
                            automaticcamera: true,
                            fingerprintaccess: false,
                            smartsystems: false,
                            wirelessnetworking: false,
                            securityconsulting: false,
                            videoverification: false,
                            securitycameras: false,
                            surveillancecamera: false,
                            electronicsecurity: false,
                            username: '',
                            email: '',
                            phone: '',
                            company: '',
                            message: '',
                        }}
                        validationSchema={ContactSchema}
                        onSubmit={values => {
                            // same shape as initial values
                            const {accesscontrolsystems, automaticcamera, fingerprintaccess, smartsystems, wirelessnetworking, securityconsulting, videoverification, securitycameras, surveillancecamera, electronicsecurity, username, email, phone, company, message} = values;
                            toast.success("Form Submitted Successfully!");
                        }}
                    >
                        {
                            ({errors, touched}) => {
                                return(
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
                                        <div className="row">
                                            <div className="col-12">
                                                <div className="contact-top wow fadeInUp" data-wow-delay="0.3s">
                                                    <div className="contact-top-wrap">
                                                        <div className="contact-top-item">
                                                            <span className="contact-single-item">
                                                                <Field type="checkbox" name="accesscontrolsystems" id='access-control-systems' />
                                                                <label htmlFor="access-control-systems" className="single-item-label">Access Control Systems</label>
                                                            </span>
                                                        </div>
                                                        <div className="contact-top-item">
                                                            <span className="contact-single-item">
                                                                <Field type="checkbox" id='automatic-camera' name="automaticcamera"/>
                                                                <label htmlFor='automatic-camera' className="single-item-label">Automatic Camera</label>
                                                            </span>
                                                        </div>
                                                        <div className="contact-top-item">
                                                            <span className="contact-single-item">
                                                                <Field type="checkbox" id='finger-print-access' name="fingerprintaccess"/>
                                                                <label htmlFor="finger-print-access" className="single-item-label">Finger Print Access</label>
                                                            </span>
                                                        </div>
                                                        <div className="contact-top-item">
                                                            <span className="contact-single-item">
                                                                <Field type="checkbox" id='smart-systems' name="smartsystems"/>
                                                                <label htmlFor='smart-systems' className="single-item-label">Smart Systems</label>
                                                            </span>
                                                        </div>
                                                        <div className="contact-top-item">
                                                            <span className="contact-single-item">
                                                                <Field type="checkbox" id='cctv-installation' name="cctvinstallation"/>
                                                                <label htmlFor='cctv-installation' className="single-item-label">CCTV installation</label>
                                                            </span>
                                                        </div>
                                                        <div className="contact-top-item">
                                                            <span className="contact-single-item">
                                                                <Field type="checkbox" id='security-consulting' name="securityconsulting"/>
                                                                <label htmlFor='security-consulting' className="single-item-label">Security Consulting</label>
                                                            </span>
                                                        </div>
                                                        <div className="contact-top-item">
                                                            <span className="contact-single-item">
                                                                <Field type="checkbox" id='wireless-networking' name="wirelessnetworking"/>
                                                                <label htmlFor='wireless-networking' className="single-item-label">Wireless networking</label>
                                                            </span>
                                                        </div>
                                                        <div className="contact-top-item">
                                                            <span className="contact-single-item">
                                                                <Field id='video-verification' type="checkbox" name="videoverification"/>
                                                                <label htmlFor='video-verification' className="single-item-label">Video Verification</label>
                                                            </span>
                                                        </div>
                                                        <div className="contact-top-item">
                                                            <span className="contact-single-item">
                                                                <Field id='security-cameras' type="checkbox" name="securitycameras"/>
                                                                <label htmlFor='security-cameras' className="single-item-label">Security Cameras</label>
                                                            </span>
                                                        </div>
                                                        <div className="contact-top-item">
                                                            <span className="contact-single-item">
                                                                <Field type="checkbox" id='surveillance-camera' name="surveillancecamera"/>
                                                                <label htmlFor='surveillance-camera' className="single-item-label">surveillance camera</label>
                                                            </span>
                                                        </div>
                                                        <div className="contact-top-item">
                                                            <span className="contact-single-item">
                                                                <Field id='electronic-security' type="checkbox" name="electronicsecurity"/>
                                                                <label htmlFor='electronic-security' className="single-item-label">Electronic Security</label>
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="contact-form wow fadeInUp" data-wow-delay="0.5s">
                                                    <div className="row">
                                                        <div className="col-xl-6 col-lg-6 col-md-6">
                                                            <Field type="text" name='username' placeholder="Your Name"/>
                                                            {errors.username && <span className='onsafe-alert-danger'>{errors.username}</span>}
                                                        </div>
                                                        <div className="col-xl-6 col-lg-6 col-md-6">
                                                            <Field type="email" name='email' placeholder="Email Address"/>
                                                            {errors.email && <span className='onsafe-alert-danger'>{errors.email}</span>}
                                                        </div>
                                                        <div className="col-xl-6 col-lg-6 col-md-6">
                                                            <Field type="text" name='phone' placeholder="Phone Number"/>
                                                            {errors.phone && <span className='onsafe-alert-danger'>{errors.phone}</span>}
                                                        </div>
                                                        <div className="col-xl-6 col-lg-6 col-md-6">
                                                            <Field type="text" name='company' placeholder="Company Name"/>
                                                            {errors.company && <span className='onsafe-alert-danger'>{errors.company}</span>}
                                                        </div>
                                                        <div className="col-12">
                                                        <Field as="textarea" name="message" cols="30" rows="10" placeholder="Write Text Here..."></Field>
                                                            {errors.message && <span className='onsafe-alert-danger'>{errors.message}</span>}
                                                        </div>
                                                        <div className="col-12">
                                                            <button type='submit' className="theme-btn contact-form-btn">Submit Request</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </Form>
                                    </>
                                )
                            }
                        }
                    </Formik>
                </div>
            </div>
        </section>
       {/* contact area end */}

    </>
  )
}

export default ContactOne