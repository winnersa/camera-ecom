import Link from 'next/link'

const BlogArchiveGrid = ({ArchiveType,ArchiveValue, blogList}) => {
    let blogs = blogList[Object.keys(blogList)];
    let allblogList = [];
    if(blogs) {
      for(let i=0;i<blogs.length;i++) {
        if(ArchiveType == 'tag') {
            if(Object.values(blogs)[i].tag != undefined) {
                Object.keys(blogs[i].tag).forEach((item) => {
                    if(item == ArchiveValue) {
                        allblogList.push(Object.values(blogs)[i]);
                    }
                })
            }
        }
        if(ArchiveType == 'cat') {
            if(Object.values(blogs)[i].cat != undefined) {
                Object.keys(blogs[i].cat).forEach((item) => {
                    if(item == ArchiveValue) {
                        allblogList.push(Object.values(blogs)[i]);
                    }
                })
            }
        }
        
      }
    }
    if(allblogList == 0) {
        return(
            <div className='container'>
                <img className='no-post-found-img' src='/assets/img/error/post-not-found.jpg' />
            </div>
        )
    } else {
        return (
            <>
                {/* <!-- blog area start --> */}
                    <section>
                        <div className="blog-area pt-110 pb-80">
                            <div className="container">
                                <div className="row">
                                    {
                                        allblogList && allblogList.sort((a, b) => a.id - b.id).map((item, id) => (
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
                                                        {item.img && <Link href={`/blog/${item.slug && item.slug}`}><img src={`/assets/img/blog/${item.img}`} alt="Not Found" /></Link>}
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
                                        ))
                                    }
                                </div>
                            </div>
                        </div>
                    </section>
                {/* <!-- blog area end --> */}
            </>
        )
    }
}

export default BlogArchiveGrid