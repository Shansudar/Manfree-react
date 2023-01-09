import { useDeleteBikeMutation, useGetAllBikesQuery } from "./bikeApi";
import React from "react";

const BikeView = () => {
  const { data, isError, isLoading } = useGetAllBikesQuery();
  const [deleteBike, result] = useDeleteBikeMutation();
  const handleDelete = async (id = "") => {
    deleteBike(id)
      .unwrap()
      .then((data) => alert(`${id} is deleted`));
  };
  if (isError) {
    return <h1>Error...!</h1>;
  } else if (isLoading) {
    return <h2>Loading...!</h2>;
  }
  return (
    <div>
      {data.map((item) => (
        <li key={item.id}>
          <h3>{`model - ${item.model}`}</h3>
          <button onClick={() => handleDelete(item.id)}>delete</button>
        </li>
      ))}
    </div>
  );
};

export default BikeView;
