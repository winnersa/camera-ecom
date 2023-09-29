// import productDataList from "../../data/products/product";
//
// export default async function handler(req, res) {
//     const slug = req.query.slug;
//     const productArr = productDataList['products'];
//     let productArrSingle = [];
//     Object.keys(productArr).forEach((item) => {
//         if(productArr[item].slug == slug) {
//             productArrSingle = productArr[item];
//         }
//     })
//     res.status(200).json(productArrSingle);
// }