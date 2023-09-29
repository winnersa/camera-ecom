// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import blogDataList from "../../data/blog/blog"
export default async function handler(req, res) {
  res.status(200).json(blogDataList)
}