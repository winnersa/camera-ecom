import {SIGN_UP} from "../../data/constants";

export default async function handler(req, res) {
    // Check if the method is POST
    if (req.method !== "POST") {
        return res.status(405).end(); // Method Not Allowed
    }

    // Forward the request to Strapi
    const response = await fetch(SIGN_UP, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(req.body),
    });

    const data = await response.json();

    // Check if the registration was successful
    if (response.ok) {
        return res.status(200).json(data);
    } else {
        // Return the error from Strapi to the frontend
        return res.status(response.status).json(data);
    }
}