import { createBrowserRouter, RouterProvider } from "react-router-dom";

import HomePage from "./pages/HomePage";
import EventsPage from "./pages/EventsPage";
import EventDetailPage from "./pages/EventDetailPage";
import NewEventPage from "./pages/NewEventPage";
import EditEventPage from "./pages/EditEventPage";
import Root from "./pages/Root";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children: [
        {
          index: true,
          element: <HomePage />,
        }, // turn into index route
        {
          path: "events",
          element: <EventsPage />,
        },
        {
          path: "events/:eventId",
          element: <EventDetailPage />,
        },
        {
          path: "events/new",
          element: <NewEventPage />,
        },
        {
          path: "events/:eventId/edit",
          element: <EditEventPage />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
