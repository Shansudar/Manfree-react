import React, { useState } from "react";
import uuid from "react-uuid";
import { useCreateBikeMutation } from "./bikeApi";
const initalState = { id: "", brand: "", model: "" };
const MakeBike = () => {
  const [bike, setBike] = useState(initalState);
  const [createBike, result] = useCreateBikeMutation();
  const { isLoading, isError, isSuccess } = result;
  const handleChange = (e) => {
    setBike({ ...bike, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = { ...bike, id: uuid() };
    createBike(data)
      .unwrap()
      .then((payload) => alert(`${payload.model} is stored`))
      .catch((err) => console.log(err));
  };

  if (isLoading) {
    <h1>Loading...!</h1>;
  } else if (isSuccess) {
    return <h1>Stored</h1>;
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="brand"
          placeholder="brand"
          onChange={(e) => handleChange(e)}
        />
        <input
          type="text"
          name="model"
          placeholder="model"
          onChange={(e) => handleChange(e)}
        />
        <input type="submit" />
      </form>
    </div>
  );
};

export default MakeBike;
