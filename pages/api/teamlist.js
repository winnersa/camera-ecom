// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import teamDataList from "../../data/team/team"
export default async function handler(req, res) {
  res.status(200).json(teamDataList)
}