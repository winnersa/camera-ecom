import Link from 'next/link'
import {Message_data} from '../../context/context'
import {useContext} from "react";

const isLoggedIn = () => {
    const token = localStorage.getItem('token');
    return !!token; // This will return true if a token exists, and false if not.
};

const MiddleHeader = () => {
    const {sidebar, setsidebar, setSidebarFunc, handleSignOut} = useContext(Message_data);

    const loggedIn = isLoggedIn();

    return (
        <div>
            <div className="header-middle">
                <div className="container">
                    <div className="middle-wrap">
                        <div className="logo">
                             {/*icon*/}
                            <Link href="/">
                                <img className="logo-2" src="/assets/img/logo/logo.png" alt="Image Not Found"/>
                            </Link>
                        </div>
                        <div className="middle-info d-none d-lg-flex">
                            <div className="single-item">
                                <div className="icon">
                                    <i className="fal fa-home"></i>
                                     {/*Phone*/}
                                </div>
                                <div className="info">
                                    <span>WATACHI, CCTV Compare</span>
                                    <Link className="info-content" href="tel:+02110111 ">+0859032837</Link>
                                </div>
                            </div>
                            <div className="single-item">
                                 {/*Work*/}
                                <div className="icon">
                                    <i className="fal fa-clock"></i>
                                </div>
                                <div className="info">
                                    <span>Monday to Friday</span>
                                    <span className="info-content">9:00am - 6:00pm</span>
                                </div>
                            </div>
                            <div className="single-item">
                                 {/*Email*/}
                                <div className="icon">
                                    <i className="fal fa-envelope"></i>
                                </div>
                                <div className="info">
                                    <span>Gmail</span>
                                    <Link className="info-content"
                                          href="mailto:example@mail.com">karavinamd@Gmail.com</Link>
                                </div>
                            </div>

                            {loggedIn ? (
                                <div className="single-item">
                                    <div className="icon">
                                        <i className="fal fa-sign-out-alt"></i>
                                    </div>
                                    <div className="info">
                                        <button className="info" style={{border: 'none', background: 'transparent'}} onClick={handleSignOut}>Sign Out</button>
                                    </div>
                                </div>
                            ) : (
                                <div className="single-item">
                                    <div className="icon">
                                        <i className="fal fa-sign-in-alt"></i>
                                    </div>
                                    <div className="info">
                                        <Link className="info" href="/signin"><span>Sign in</span></Link>
                                    </div>
                                </div>
                            )}

                    </div>
                    <div className="menu-bar d-lg-none">
                        <div onClick={setSidebarFunc} className="navbar-sign side-toggle">
                            <span className="menu-line-1"></span>
                            <span className="menu-line-2"></span>
                            <span className="menu-line-3"></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
</div>
)
}

export default MiddleHeader