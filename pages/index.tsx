import MeetupList from "@/components/meetups/MeetupList";
import { getMeetups } from "@/utils/helpers";
import { Meetup } from "@/utils/types";
import Head from "next/head";

type Props = {
  meetups: Meetup[];
}

export default function HomePage({ meetups }: Props) {
  return (
    <>
      <Head>
        <title>Next Meetups</title>
        <meta name="description" content="Browse a huge list of highly active Next meetups!" />
      </Head>
      <MeetupList meetups={meetups} />
    </>
  );
}

export const getStaticProps = async () => {
  const meetups = await getMeetups();

  return {
    props: { meetups },
    revalidate: 60
  }
}
