import Image from 'next/image'
import Link from 'next/link'
import SectionTitleCenter from '../section-title/section-title-center'

const BlogOne = ({count, isVisibleSectionTitle=true, bloglist}) => {
  return (
    <>
        {/* <!-- blog area start --> */}
            <section>
                <div className="blog-area pt-110 pb-80">
                    <div className="container">
                        {
                            isVisibleSectionTitle &&
                            <div className="row">
                                <div className="col-12">
                                    <SectionTitleCenter title={'Latest News & Insights'} subtitle={'News & Insights'} />
                                </div>
                            </div>
                        }
                        <div className="row">
                        {
                            bloglist && bloglist['blogs']?.filter(item => item.id <= count).sort((a, b) => a.id - b.id).map((item, id) => (
                                <div className="col-xl-4 col-lg-6 col-md-6" key={id}>
                                    <div className="blog-post mb-40 wow fadeInUp" data-wow-delay="0.3s">
                                        <div className="blog-post-info">
                                            <div className="blog-post-btn">
                                                {item.slug && 
                                                <Link href={`/blog/${item.slug && item.slug}`} className="blog-btn">
                                                    <span>Read More</span>
                                                    <i className="fal fa-long-arrow-right"></i>
                                                </Link>
                                                }
                                            </div>
                                        </div>
                                        <div className="blog-post-img w_img">
                                            {item.img && <Link href={`/blog/${item.slug && item.slug}`}><Image width={410} height={273.5} src={`/assets/img/blog/${item.img}`} alt="Not Found" /></Link>}
                                            {item.category && 
                                            <div className="blog-post-category">
                                                <span>{item.category}</span>
                                            </div>
                                            }
                                        </div>
                                        <div className="blog-post-content">
                                            <div className="blog-post-meta">
                                                <ul>
                                                    {item.date && <li className="post-date">{item.date}</li> }
                                                    {item.author && <li className="post-author"> By <Link href='/blog'>{item.author}</Link> </li>}
                                                </ul>
                                            </div>
                                            {item.title && <h4 className="post-title"><Link href={`/blog/${item.slug && item.slug}`}>{item.title}</Link></h4>}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        {/* <!-- blog area end --> */}
    </>
  )
}

export default BlogOne