// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import portfolioList from "../../data/portfolio/portfolio";

export default async function handler(req, res) {
    const slug = req.query.slug;
    const blogArr = portfolioList['portfolios'];
    let portfolioArrSingle = [];
    Object.keys(blogArr).forEach((item) => {
        if(blogArr[item].slug == slug) {
            portfolioArrSingle = blogArr[item];
        }
    })
    res.status(200).json(portfolioArrSingle);
}