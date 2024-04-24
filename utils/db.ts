import { MongoClient } from 'mongodb';
import { NextApiResponse } from 'next';

const mongoUri = 'mongodb://0.0.0.0:27017';
export const client = new MongoClient(mongoUri);
export const Meetup = client.db('next-optional').collection('meetups');

export async function connectDb() {
  try {
    await client.connect();
    await client.db('next-optional').command({ ping: 1 });
    console.log('Connected successfully to mongo server');
  } catch (error) {
    console.log('Cannot connect to mongo server');
    await client.close();
  }
};
