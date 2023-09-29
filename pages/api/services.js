import { services } from "../../data/service/services";

const handler = async (req, res) => {
    const { method } = req;

    switch (method) {
        case "GET":
            return res.status(200).json(services);
        default:
            return res.status(405).json({ message: "Method not allowed" });
    }
};

export default handler;
