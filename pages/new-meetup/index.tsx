import NewMeetupForm from "@/components/meetups/NewMeetupForm";
import { MeetupData } from "@/utils/types";
import Head from "next/head";
import { useRouter } from "next/router";

export default function NewMeetupPage() {
  const router = useRouter();

  const addMeetupHandler = async (meetupData: MeetupData) => {
    const response = await fetch('/api/new-meetup', {
      method: 'POST',
      body: JSON.stringify(meetupData),
      headers: {
        'Content-Type': 'application/json',
      }
    });

    const data = await response.json();
    console.log(data);
    router.push('/');  
  }

  return (
    <>
      <Head>
        <title>Add a new Meetup</title>
        <meta name="description" content="Add your own meetups and amaizing networking opportunities." />
      </Head>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </>
  );
}
