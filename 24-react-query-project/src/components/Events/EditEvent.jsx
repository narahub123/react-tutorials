import {
  Link,
  redirect,
  useLoaderData,
  useNavigate,
  useParams,
  useSubmit,
  useNavigation,
} from "react-router-dom";

import Modal from "../UI/Modal.jsx";
import EventForm from "./EventForm.jsx";
import { useMutation, useQuery } from "@tanstack/react-query";
import { fetchEvent, queryClient, updateEvent } from "../../util/http.js";
// import LoadingIndicator from "../UI/LoadingIndicator.jsx";
import ErrorBlock from "../UI/ErrorBlock.jsx";

export default function EditEvent() {
  const navigate = useNavigate();
  const { state } = useNavigation();
  const submit = useSubmit();
  const params = useParams();

  const { data, isError, error } = useQuery({
    queryKey: ["events", params.id],
    queryFn: ({ signal }) => fetchEvent({ signal, id: params.id }),
    staleTime: 10000, // why is needed?
  });

  // const { mutate } = useMutation({
  //   mutationFn: updateEvent,
  //   // execute right you call mutate() so before mutate() is done or before you got the response
  //   // you wanna update data that cached by react query
  //   onMutate: async (data) => {
  //     const newEvent = data.event;

  //     await queryClient.cancelQueries({ queryKey: ["events", params.id] }); // cancel all active query for specific key

  //     // roll back optimistic update if it fail on the backend
  //     // need to store old data so can roll back with the old data
  //     const previousEvent = queryClient.getQueryData(["events", params.id]); // get currently stored query data

  //     queryClient.setQueryData(["events", params.id], newEvent); // change the cached data without response / setQueryData(key, updated data)

  //     return { previousEvent }; // this object will be context
  //   },
  //   onError: (error, data, context) => {
  //     queryClient.setQueryData(["events", params.id], context.previousEvent);
  //   },
  //   // onSettled is called whenever mutaton is done no matter it failed or succeeded
  //   onSettled: () => {
  //     queryClient.invalidateQueries(["event", params.id]);
  //   },
  // });

  function handleSubmit(formData) {
    // mutate({ id: params.id, event: formData });
    // navigate("../");
    submit(formData, { method: "PUT" });
  }

  function handleClose() {
    navigate("../");
  }

  let content;

  // if (isPending) {
  //   content = (
  //     <div className="center">
  //       <LoadingIndicator />
  //     </div>
  //   );
  // }

  if (isError) {
    content = (
      <>
        <ErrorBlock
          title="Faile to load event"
          message={
            error.info?.message ||
            "Failed to load event. Please check your inputs and try again later."
          }
        />
        <div className="form-actions">
          <Link to="../" className="button">
            Okay
          </Link>
        </div>
      </>
    );
  }

  if (data) {
    content = (
      <EventForm inputData={data} onSubmit={handleSubmit}>
        {state === "submitting" ? (
          <p>Sendding data..</p>
        ) : (
          <>
            <Link to="../" className="button-text">
              Cancel
            </Link>
            <button type="submit" className="button">
              Update
            </button>
          </>
        )}
      </EventForm>
    );
  }

  return <Modal onClose={handleClose}>{content}</Modal>;
}

export function loader({ params }) {
  return queryClient.fetchQuery({
    queryKey: ["events", params.id],
    queryFn: ({ signal }) => fetchEvent({ signal, id: params.id }),
  });
}

export async function action({ request, params }) {
  const formData = await request.formData();
  const updatedEventData = Object.fromEntries(formData);
  await updateEvent({ id: params.id, event: updatedEventData });
  await queryClient.invalidateQueries(["events"]);
  return redirect("../");
}
