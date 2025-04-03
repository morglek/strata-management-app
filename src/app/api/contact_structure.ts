import type { NextApiRequest, NextApiResponse } from "next";

interface ContactRequest {
  unit: string;
  requesttext: string;
  date: string;
}

let contactRequests: ContactRequest[] = [];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {
    return res.status(200).json(contactRequests);
  } else if (req.method === "POST") {
    const { unit, requesttext } = req.body;

    if (!unit || !requesttext) {
      return res
        .status(400)
        .json({ error: "Missing required fields: unit and requesttext" });
    }

    const newRequest: ContactRequest = {
      unit,
      requesttext,
      date: new Date().toISOString(),
    };

    contactRequests.push(newRequest);
    return res.status(201).json(newRequest);
  } else {
    res.setHeader("Allow", ["GET", "POST"]);
    return res
      .status(405)
      .json({ error: `Method ${req.method} not allowed` });
  }
}
