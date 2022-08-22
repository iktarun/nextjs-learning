import { useState } from "react";
import { useRouter } from "next/router";

function EventList({ eventList }) {
  const [events, setEvents] = useState(eventList);
  const router = useRouter();

  const fetchSportEvents = async () => {
    const response = await fetch(
      `http://localhost:4000/events?category=sports`
    );

    const data = await response.json();

    setEvents(data);
    router.push("/events?category=sports", undefined, { shallow: true });
  };
  return (
    <>
      <h1>List of Events</h1>
      <button onClick={fetchSportEvents}>Get Sport Events</button>
      {events &&
        events.map((event) => {
          return (
            <div key={event.id}>
              {event.id} | {event.title} | {event.category}
              <hr />
              <p>{event.description}</p>
              <hr />
            </div>
          );
        })}
    </>
  );
}

export default EventList;

export async function getServerSideProps(context) {
  const { query } = context;
  const { category } = query;
  const queryString = category ? "category=sports" : "";
  const response = await fetch(`http://localhost:4000/events?${queryString}`);
  const data = await response.json();
  return {
    props: {
      eventList: data,
    },
  };
}
