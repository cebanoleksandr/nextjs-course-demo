import { Meetup, client, connectDb } from "@/utils/db";
import { NextApiRequest, NextApiResponse } from "next";
import { v4 as uuid } from 'uuid';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>,
) {
  if (req.method === 'POST') {
    const { title, image, address, description } = req.body;

    if (!title.trim() || !image.trim() || !address.trim() || !description.trim()) {
      res.status(422).json({ message: 'Bad request!' });
      return;
    }

    await connectDb();

    const result = await Meetup.insertOne({
      id: uuid(),
      title,
      image,
      address,
      description
    });

    console.log(result);    

    client.close();

    res.status(201).json({ message: 'The meetup is successfully added to database' });
  }
}
