import React from "react";
import { Link } from "react-router-dom";

const EVENTS = [
  {
    id: "e1",
    title: "event 1",
  },
  {
    id: "e2",
    title: "event 2",
  },
  {
    id: "e3",
    title: "event 3",
  },
  {
    id: "e4",
    title: "event 4",
  },
  {
    id: "e5",
    title: "event 5",
  },
];

const EventsPage = () => {
  return (
    <>
      <h1>Events Page</h1>
      <ul>
        {EVENTS.map((e) => (
          <li>
            <Link to={e.id}>{e.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default EventsPage;
