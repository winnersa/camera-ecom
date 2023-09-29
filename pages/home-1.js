import React from 'react'
import {useQuery} from 'react-query'
import About from '../components/about/about'
import BlogOne from '../components/blog/blog-1'
import FooterOne from '../components/footer/footer-1'
import HeaderOne from '../components/header/header-1'
import PortfolioOne from '../components/portfolio/portfolio-1'
import ProductSection from '../components/product/productsection'
import Service from '../components/services/service'
import SkillOne from '../components/skill/skill-1'
import SliderOne from '../components/slider/slider-1'
import SubscribeOne from '../components/subscribe/subscribe-1'
import TestimonialOne from '../components/testimonial/testimonial'
import VideoOne from '../components/video/video-1'
import Seo from './seo/seo'
import {PRODUCT_LIST} from "../data/constants";

const HomeOne = (props) => {
    const {data: bloglist} = useQuery(
        {
            queryFn: getBlog,
            initialData: props.blogs,
        }
    );

    const {data: productlist} = useQuery({
        queryKey: ['product'],
        queryFn: getProducts,
        initialData: props.products,
    })

    const {data: servicelist} = useQuery(
        {
            queryKey: ['service'],
            queryFn: getServices,
            initialData: props.service,
        }
    );


    return (
        <React.Fragment>
            <HeaderOne/>
            <Seo title={"Home"}/>
            <main>
                <SliderOne/>
                <About/>
                {/*<Service servicedata={servicelist} countStart={2} countEnd={8}/>*/}
                {/*<SkillOne/>*/}
                {/*<VideoOne servicelist={servicelist}/>*/}
                <ProductSection productData={productlist}/>
                <BlogOne bloglist={bloglist} count={3}/>
                <SubscribeOne/>
            </main>
            <FooterOne/>
        </React.Fragment>
    )
}
const getServices = async () => {
    const servicdata = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/servicelist`);
    return await servicdata.json()
}
// const getProducts = async () => {
//   const products = await fetch(PRODUCT_LIST);
//     const data = await products.json();
//     return data.data
// }

const getProducts = async () => {
    const response = await fetch(PRODUCT_LIST);
    const data = await response.json();
    return data.data.map(item => item);
}


const getBlog = async () => {
    const blogdata = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/bloglist`);
    return await blogdata.json()
}

export async function getServerSideProps({req, res}) {
    const serviceRes = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/services`);
    const data = await serviceRes.json();

    return {
        props: {
            demoServices: data.services,
            products: await getProducts(),
            service: await getServices(),
            blogs: await getBlog(),
        }
    }
}

export default HomeOne