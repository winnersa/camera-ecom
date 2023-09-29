import React, {useEffect} from 'react'
import BreadCrumbOne from '../components/breadcrumb/breadcrumb-1'
import Seo from './seo/seo'
import HeaderOne from '../components/header/header-1'
import FooterOne from '../components/footer/footer-1'
import Login from '../components/signin/signin'
import {useRouter} from "next/router";

const Signin = () => {
    const router = useRouter();

    const hasToken = () => {
        const token = localStorage.getItem('token');
        return !!token;
    };

    useEffect(() => {
        if (hasToken()) {
            router.push('/');
        }
    }, []);

    return (
        <React.Fragment>
            <HeaderOne/>
            <Seo title={"Signin"} />
            <BreadCrumbOne title={"Sign-in"}/>
            <main>
                <Login/>
            </main>
            <FooterOne/>
        </React.Fragment>
    )
}

export default Signin