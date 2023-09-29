import React, {useEffect} from 'react'
import BreadCrumbOne from '../components/breadcrumb/breadcrumb-1'
import Seo from './seo/seo'
import HeaderOne from '../components/header/header-1'
import FooterOne from '../components/footer/footer-1'
import Register from '../components/signup/signup'
import {useRouter} from "next/router";

const Signup = () => {
    const router = useRouter();

    const hasToken = () => {
        const token = localStorage.getItem('token');
        return !!token; // This will return true if a token exists, and false if not.
    };

    useEffect(() => {
        if (hasToken()) {
            router.push('/');
        }
    }, []);

    return (
        <React.Fragment>
            <HeaderOne/>
            <Seo title={"Signup"} />
            <BreadCrumbOne title={"Sign Up"}/>
            <main>
                <Register/>
            </main>
            <FooterOne/>
        </React.Fragment>
    )
}

export default Signup