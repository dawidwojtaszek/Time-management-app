const ShowMessage = ({ message, error }) => (
  <div
    className={`${
      error ? "bg-red-300 text-orange-950" : "bg-lime-200 text-lime-950"
    } w-full rounded-md p-2 my-2`}
  >
    {message}
  </div>
);

export default ShowMessage;
