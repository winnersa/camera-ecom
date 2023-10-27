import React, { useState, useEffect } from 'react';
import BreadCrumbOne from '../components/breadcrumb/breadcrumb-1'
import Seo from './seo/seo'
import HeaderOne from '../components/header/header-1'
import FooterOne from '../components/footer/footer-1'
import axios from 'axios';
import ProductComparison from "../components/product-compare/product-comparison";
import {PRODUCT_COMPARE} from "../data/constants";


const ServicesOne = (props) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        // Fetch the products from the API
        axios.get(PRODUCT_COMPARE)
            .then(response => {
                setProducts(response.data.data);
            })
            .catch(error => {
                console.error("Error fetching products:", error);
            });
    }, []);

    return (
        <React.Fragment>
            <HeaderOne />
            <Seo title={"Service"} />
            <BreadCrumbOne title={"Service"} />
            <main>
                <ProductComparison products={products} />
            </main>
            <FooterOne />
        </React.Fragment>
    )
}

export default ServicesOne;