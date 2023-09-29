import { useRouter } from 'next/router'
import { useQuery } from 'react-query';
import BreadCrumbOne from '../components/breadcrumb/breadcrumb-1';
import Seo from './seo/seo';
import HeaderOne from '../components/header/header-1';
import FooterOne from '../components/footer/footer-1';
import BlogArchiveGrid from '../components/blog/blog-archive-grid';

const ArchiveBlog = (props) => {
  const router = useRouter()
  const dynamicQueryResult = router.query;
  let dynamicQueryKey = Object.keys(dynamicQueryResult);
  const { data:bloglist } = useQuery({
    queryFn: getBlog,
    initialData: props,
  })
  let queryedArg;
  if(dynamicQueryKey == 'cat') {
    queryedArg = dynamicQueryResult.cat;
  } else if(dynamicQueryKey == 'tag') {
    queryedArg = dynamicQueryResult.tag;
  }
  
  return (
    <>
        <HeaderOne/>
        <Seo title={`${dynamicQueryKey ? dynamicQueryKey: 'Archive'}: ${queryedArg && queryedArg}`} />
        <BreadCrumbOne title={`${dynamicQueryKey ? dynamicQueryKey: 'Archive'}: ${queryedArg && queryedArg}`} />
        <main>
            <BlogArchiveGrid blogList={bloglist} ArchiveType={dynamicQueryKey} ArchiveValue={queryedArg} />
        </main>
        <FooterOne/>
    </>
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

export default ArchiveBlog