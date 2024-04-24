import { Meetup, client, connectDb } from "@/utils/db";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>,
) {
  if (req.method === 'GET') {
    await connectDb();

    const meetups = await Meetup.find({}).toArray();

    res.status(200).json({ meetups });

    client.close();
  }
}