import React from "react";
import { useState } from "react";
import List from "./List";
import uuid from "react-uuid";
import "./task.css";
import { useEffect } from "react";
const initial = [
  { title: "visiting temple", done: false },
  { title: "going home", done: false },
  { title: "visiting playground", done: true },
  { title: "go for trip", done: false },
];
const generate = (item) => ({ ...item, id: uuid() });
const initialState = initial.map((item) => generate(item));
const Form = () => {
  const [list, setList] = useState(initialState);
  const [task, setTask] = useState({ title: "", done: false });
  const handleAdd = () => {
    const value = generate(task);
    setList([...list, value]);
    setTask({ title: "", done: false });
  };

  useEffect(() => {
    console.log(list);
  }, [list]);

  const handleDelete = (id) => {
    const result = list.filter((item) => item.id !== id);
    setList(result);
  };
  const handleChange = (id) => {
    const result = list.map((item) =>
      item.id === id ? { ...item, done: !item.done } : item
    );
    setList(result);
  };

  return (
    <div>
      <div>
        <input
          type="text"
          value={task.title}
          onChange={(e) => setTask({ ...task, title: e.target.value })}
        />
        <button onClick={handleAdd}>Add</button>
      </div>
      <List
        list={list}
        handleDelete={handleDelete}
        handleChange={handleChange}
      />
    </div>
  );
};

export default Form;
