import { Meetup, client, connectDb } from "./db";

export const getMeetups = async () => {
  await connectDb();
  const meetups = await Meetup.find({}).toArray();
  client.close();
  return normalizeMeetups(meetups);
}

export const getMeetupById = async (id: string) => {
  await connectDb();
  const meetup = await Meetup.findOne({ id });
  client.close();
  return normalizeMeetup(meetup);
}

const normalizeMeetups = (array: any[]) => {
  return array.map(meetup => normalizeMeetup(meetup));
}

const normalizeMeetup = (meetup: any) => {
  return {
    title: meetup.title,
    image: meetup.image,
    description: meetup.description,
    id: meetup.id,
    address: meetup.address
  }
}
