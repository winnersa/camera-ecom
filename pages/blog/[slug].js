import Link from 'next/link';
import { useQuery } from 'react-query';
  import BreadCrumbOne from '../../components/breadcrumb/breadcrumb-1';
  import Seo from '../seo/seo';
  import HeaderOne from '../../components/header/header-1';
  import FooterOne from '../../components/footer/footer-1';
  import WidgetBlog from '../../components/widgets/widget-blog';


const Slug = ({blog, blogdata}) => {
    const { data:bloglist } = useQuery(
        {
          queryKey: ['blogs'],
          queryFn: getBlogs,
          initialData: blogdata,
        }
    );
  return (
    <>
      <HeaderOne/>
      <Seo title={blog.title && blog.title} />
      <BreadCrumbOne title={blog.title && blog.title} />
      <main>
      {/* <!-- blog details area start --> */}
        <section>
            <div className="blog-details-area pt-120 pb-70">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-4 order-2 order-xl-1">
                            <WidgetBlog bloglist={bloglist}/>
                        </div>
                        <div className="col-xl-8 order-1 order-xl-2">
                            <div className="blog-details-main ml-40 mb-50">
                                <div className="blog-details-wrap">
                                    <div className="blog-details-post-thumb w_img wow fadeInUp" data-wow-delay="0.1s">
                                        <img src={`/assets/img/blog/${blog.img}`} alt="Image Not Found" />
                                    </div>
                                    <div className="blog-post-content blog-details-post">
                                        {blog.title && <h4 className="blog-details-post-title wow fadeInUp" data-wow-delay="0.3s">{blog.title}</h4>}
                                        <div className="blog-post-meta wow fadeInUp" data-wow-delay="0.4s">
                                            <ul>
                                                {blog.date && <li className="post-date">{blog.date}</li>}
                                                {blog.author && <li className="post-author"> By <Link href="/blog">{blog.author}</Link> </li>}
                                                { blog.comment_count && <li className="post-comment"><i className="fal fa-comments"></i> {blog.comment_count} Comment</li> }
                                            </ul>
                                        </div>
                                    </div>
                                    {blog.content && <div dangerouslySetInnerHTML={{ __html: blog.content }} ></div>}
                                </div>
                                <div className="blog-details-meta wow fadeInUp" data-wow-delay="0.7s">
                                    <div className="sidebar-widget-tag blog-tag">
                                        <h6 className="blog-details-meta-title">Tags :</h6>
                                        <Link href="#">Security</Link>
                                        <Link href="#">Cloud</Link>
                                        <Link href="#">Drone</Link>
                                    </div>
                                    <div className="blog-details-social">
                                        <h6 className="blog-details-meta-title">Share :</h6>
                                        <Link href="#"><i className="fab fa-facebook-f"></i></Link>
                                        <Link href="#"><i className="fab fa-twitter"></i></Link>
                                        <Link href="#"><i className="fab fa-instagram"></i></Link>
                                    </div>
                                </div>
                                <div className="blog-comment-wrap mb-50 wow fadeInUp" data-wow-delay="0.4s">
                                    <h3 className="blog-comment-title">3 Comment</h3>
                                    <div className="blog-comment-item mb-30">
                                        <div className="blog-comment-author">
                                            <img src="/assets/img/blog/author.jpg" alt="Image Not Found" />
                                        </div>
                                        <div className="blog-comment-content">
                                            <div className="blog-comment-content-head">
                                                <div className="author-info">
                                                    <h5 className="author-title">John Due</h5>
                                                    <span>10 Aug 2022</span>
                                                </div>
                                                <div className="blog-comment-reply">
                                                    <Link href="#"><i className="fal fa-reply"></i>Reply</Link>
                                                </div>
                                            </div>
                                            <div className="blog-comment-content-text">
                                                <p>
                                                    We see our customers as invited guests to a party, and we are the hosts. It’s our job every day tomake every important aspect of the customer experience a little bit better.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="blog-comment-item ml-110 mb-30">
                                        <div className="blog-comment-author">
                                            <img src="/assets/img/blog/author.jpg" alt="Image Not Found" />
                                        </div>
                                        <div className="blog-comment-content">
                                            <div className="blog-comment-content-head">
                                                <div className="author-info">
                                                    <h5 className="author-title">John Due</h5>
                                                    <span>10 Aug 2022</span>
                                                </div>
                                                <div className="blog-comment-reply">
                                                    <Link href="#"><i className="fal fa-reply"></i>Reply</Link>
                                                </div>
                                            </div>
                                            <div className="blog-comment-content-text">
                                                <p>
                                                    We see our customers as invited guests to a party. It’s our job every day tomake every important aspect of the customer experience a little bit better.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="blog-comment-item">
                                        <div className="blog-comment-author">
                                            <img src="/assets/img/blog/author.jpg" alt="Image Not Found" />
                                        </div>
                                        <div className="blog-comment-content">
                                            <div className="blog-comment-content-head">
                                                <div className="author-info">
                                                    <h5 className="author-title">John Due</h5>
                                                    <span>10 Aug 2022</span>
                                                </div>
                                                <div className="blog-comment-reply">
                                                    <Link href="#"><i className="fal fa-reply"></i>Reply</Link>
                                                </div>
                                            </div>
                                            <div className="blog-comment-content-text">
                                                <p>
                                                    It’s our job every day important aspect of the customer experience a little bit better.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="blog-comment-reply wow fadeInUp" data-wow-delay="0.5s">
                                    <h3 className="blog-comment-title">Leave a Reply</h3>
                                    <div className="blog-comment-reply-form">
                                        <form action="#">
                                            <div className="row">
                                                <div className="col-xl-6">
                                                    <input type="text" placeholder="Your Name" />
                                                </div>
                                                <div className="col-xl-6">
                                                    <input type="text" placeholder="Email Address" />
                                                </div>
                                                <div className="col-12">
                                                    <textarea name="message" cols="30" rows="10" placeholder="Your Comment"></textarea>
                                                </div>
                                                <div className="col-12">
                                                    <button className="theme-btn reply-btn">Post Comment</button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* <!-- blog details area end --> */}
      </main>
      <FooterOne/>
    </>
  )
}
let getBlogs = async () => {
    const blogs = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/bloglist`);
    return blogs.json()
}
export async function getServerSideProps(context) {
    context.res.setHeader(
    'Cache-Control',
    'public, s-maxage=10, stale-while-revalidate=59'
    )
  const {slug} = context.query
  const blog = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/getblog?slug=${slug}`);
  const singleblog = await blog.json();
  return {
    props: {
        blog: await singleblog,
        blogdata: await getBlogs()
    }, // will be passed to the page component as props
  }
}
export default Slug