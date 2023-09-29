import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import Link from 'next/link';
import BlogCategory from '../../data/blog-category/blog-category';
import BlogTag from '../../data/blog-category/blog-tag';
import Nossr from '../nossr/nossr';

const WidgetBlog = ({bloglist}) => {
  return (
    <>
        <div className="blog-sidebar mb-50">
            <div className="blog-sidebar-widget blog-search mb-40 wow fadeInUp" data-wow-delay="0.1s">
                <h3 className="blog-widget-title">Search</h3>
                <div className="sidebar-widget-search">
                    <form action="#" method='post'>
                        <input type="text" name='search' placeholder="Search..." />
                        <button className="sidebar-search-btn" type='submit'><i className="fal fa-search"></i></button>
                    </form>
                </div>
            </div>
            <div className="blog-sidebar-widget blog-post mb-40 wow fadeInUp" data-wow-delay="0.3s">
                <h3 className="blog-widget-title">Latest Post</h3>
                <Nossr>
                    <Swiper
                    modules={[Pagination]}
                    allowTouchMove={true}
                    className="testimonial-active"
                    slidesPerView={1}
                    pagination={{
                        el: ".sidebar-blog-pagination",
                        clickable: true
                    }}
                    >
                        {
                        bloglist && bloglist['blogs']?.filter(item => item.id <= 10 ).sort((a, b) => a.id - b.id).map((item, id) => (
                            <SwiperSlide key={id}>
                                <div className="sidebar-blog-item">
                                    <div className="sidebar-blog-img w_img">
                                        {item.img && <Link href={item.slug && item.slug}>
                                            <img src={`/assets/img/blog/${item.img}`} alt="Image" />
                                        </Link>}
                                    </div>
                                    <div className="sidebar-blog-info">
                                        {item.date && <span className="post-date">{item.date && item.date }</span> }
                                        {item.title && <h4 className="post-title"><Link href={item.slug && item.slug}>{item.title}</Link></h4>}
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                        <div className="sidebar-blog-pagination"></div>
                    </Swiper>
                </Nossr>
            </div>
            {
            BlogCategory && 
            <div className="blog-sidebar-widget blog-category mb-40 wow fadeInUp" data-wow-delay="0.5s">
                <h3 className="blog-widget-title">Blogs Category</h3>
                    <div className="sidebar-widget-category">
                        {
                            BlogCategory && BlogCategory.filter(item => item.id <= 10 ).sort((a, b) => a.id - b.id).map((item, id) => (
                            <div key={id} className="widget-category-item">
                                <Link href={`/archive-blog?cat=${item.slug && item.slug}`}>
                                    { item.name && <span className="cat-name">{item.name}</span> }
                                    {item.blogCount && <span className="cat-count">{item.blogCount}</span>}
                                </Link>
                            </div>
                        ))}
                    </div>
            </div>
            }
            {
                BlogTag && 
                <div className="blog-sidebar-widget blog-tags wow fadeInUp" data-wow-delay="0.7s">
                    <h3 className="blog-widget-title">Tags</h3>
                    <div className="sidebar-widget-tag">
                    {
                       BlogTag && BlogTag.filter(item => item.id <= 10 ).sort((a, b) => a.id - b.id).map((item, id) => {
                        return(
                            <Link key={id} href={`/archive-blog?tag=${item.slug && item.slug}`}>{item.name && item.name}</Link>
                        )}) 
                    }
                   </div>
                </div>
            }
        </div>
    </>
  )
}

export default WidgetBlog