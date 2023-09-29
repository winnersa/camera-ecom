import React from 'react'
import BreadCrumbOne from '../components/breadcrumb/breadcrumb-1'
import Seo from './seo/seo'
import HeaderOne from '../components/header/header-1'
import FooterOne from '../components/footer/footer-1';
import BlogOne from '../components/blog/blog-1';
import { useQuery } from 'react-query';

const Blog = (props) => {
  const { data:bloglist } = useQuery({
    queryFn: getBlog,
    initialData: props,
  })
  return (
    <React.Fragment>
        <HeaderOne/>
        <Seo title={"Blog"} />
        <BreadCrumbOne title={"Blog"}/>
        <main>
            <BlogOne bloglist={bloglist} count={6}/>
        </main>
        <FooterOne/>
    </React.Fragment>
  )
}
const getBlog = async () => {
  const blogdata = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/bloglist`);
  return await blogdata.json()
}
export const getServerSideProps = async (context) => {
  return {
    props:  await getBlog()
  }
}

export default Blog