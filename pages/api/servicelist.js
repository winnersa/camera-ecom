// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import serviceDataList from "../../data/service/service"
export default async function handler(req, res) {
  res.status(200).json(serviceDataList)
}