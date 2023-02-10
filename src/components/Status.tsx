type StatusProps = {
  status: "loading" | "success" | "error";
};
function Status(props: StatusProps) {
  let message;
  if (props.status === "loading") {
    message = "Loading data";
  } else if (props.status === "success") {
    message = "Data loaded";
  } else if (props.status === "error") {
    message = "Error Occurred";
  }
  return (
    <>
      <h2>{message}</h2>
    </>
  );
}

export default Status;
