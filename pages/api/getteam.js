import teamDataList from "../../data/team/team";

export default async function handler(req, res) {
    const slug = req.query.slug;
    const teamArr = teamDataList['teams'];
    let teamArrSingle = [];
    Object.keys(teamArr).forEach((item) => {
        if(teamArr[item].slug == slug) {
            teamArrSingle = teamArr[item];
        }
    })
    res.status(200).json(teamArrSingle);
}