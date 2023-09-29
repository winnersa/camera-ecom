// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import blogDataList from "../../data/blog/blog";

export default async function handler(req, res) {
    const slug = req.query.slug;
    const blogArr = blogDataList['blogs'];
    let blogArrSingle = [];
    Object.keys(blogArr).forEach((item) => {
        if(blogArr[item].slug == slug) {
            blogArrSingle = blogArr[item];
        }
    })
    res.status(200).json(blogArrSingle);
}