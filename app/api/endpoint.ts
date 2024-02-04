import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse,
) {
    // Handle CRUD operations using req.method
    if (req.method === 'GET') {
        res.status(200).json({ name: 'John Doe' });
    } else {
        res.status(405).json({ message: 'Method Not Allowed' });
    }
}