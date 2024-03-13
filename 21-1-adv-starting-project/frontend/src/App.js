import { createBrowserRouter, RouterProvider } from "react-router-dom";

import HomePage from "./pages/HomePage";
import EventsPage from "./pages/EventsPage";
import EventDetailPage from "./pages/EventDetailPage";
import NewEventPage from "./pages/NewEventPage";
import EditEventPage from "./pages/EditEventPage";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "/events",
      element: <EventsPage />,
    },
    {
      path: "/events/:eventId",
      element: <EventDetailPage />,
    },
    {
      path: "/events/new",
      element: <NewEventPage />,
    },
    {
      path: "/events/:eventId/edit",
      element: <EditEventPage />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
