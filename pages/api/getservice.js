import serviceDataList from "../../data/service/service";

export default async function handler(req, res) {
    const slug = req.query.slug;
    const serviceArr = serviceDataList['services'];
    let serviceArrSingle = [];
    Object.keys(serviceArr).forEach((item) => {
        if(serviceArr[item].slug == slug) {
            serviceArrSingle = serviceArr[item];
        }
    })
    res.status(200).json(serviceArrSingle);
}