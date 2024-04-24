import MeetupDetail from "@/components/meetups/MeetupDetail";
import { getMeetupById, getMeetups } from "@/utils/helpers";
import { Meetup } from "@/utils/types";
import Head from "next/head";

type Props = {
  meetup: Meetup;
}

export default function MeetupDetails({ meetup }: Props) {
  return (
    <>
      <Head>
        <title>{meetup.title}</title>
        <meta name="description" content={meetup.description} />
      </Head>

      <MeetupDetail 
        image={meetup.image}
        title={meetup.title} 
        address={meetup.address} 
        description={meetup.description} 
      />
    </>
  );
}

export const getStaticPaths = async () => {
  const meetups = await getMeetups();
  const paths = meetups.map(meetup => ({
    params: { meetupId: meetup.id }
  }))

  return {
    paths,
    fallback: false
  }
}

export const getStaticProps = async (context: any) => {
  const { meetupId } = context.params;
  console.log('ID: ', meetupId);
  
  const meetup = await getMeetupById(meetupId);

  return {
    props: { meetup }
  }
}
