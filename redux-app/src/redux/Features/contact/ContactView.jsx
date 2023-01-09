import React, { useState } from "react";
import uuid from "react-uuid";
import {
  useAddContactMutation,
  useDeleteContactMutation,
  useGetContactQuery,
  useGetContactsQuery,
  useUpdateContactMutation,
} from "./contactApi";

const routes = [
  "955237dc-96c2-1200-7d72-8fbd9c51bf45",
  "3eb43802-8404-efa4-4efc-5ad3520d4390",
  "1b754c8c-b00b-4724-097b-24d7aff9906d",
];

const ContactView = () => {
  const { data, isLoading, isError } = useGetContactsQuery();
  const [deleteContact] = useDeleteContactMutation();
  const [updateContact] = useUpdateContactMutation();
  const updatedData = {
    id: "4c792c28-0527-9e2d-a5c5-c3403c2fa3c2",
    name: "boobalan updated",
    email: "boobalan@gamil.com",
  };
  const handleDelete = (id) => {
    deleteContact(id);
  };
  const handleEdit = () => {
    updateContact(updatedData);
  };
  if (isError) {
    return <h1>Something went wrong</h1>;
  } else if (isLoading) {
    return <h1>Loading...!</h1>;
  } else {
    return (
      <div>
        {data.map((item) => (
          <li key={item.id}>
            <>
              {item.name}-{item.email}
            </>
            <button onClick={handleEdit}>Edit</button>
            <button onClick={() => handleDelete(item.id)}>Delete</button>
          </li>
        ))}
      </div>
    );
  }
};

export default ContactView;

export const SingleContact = () => {
  const [id, setId] = useState("955237dc-96c2-1200-7d72-8fbd9c51bf45");
  const { data, isLoading } = useGetContactQuery(id);
  if (isLoading) {
    return <h1>Loading...!</h1>;
  } else {
    return (
      <div>
        <h1>
          {data.name} - {data.email}
        </h1>
        <nav>
          {routes.map((item) => (
            <button onClick={() => setId(item)} key={item}>
              {item}
            </button>
          ))}
        </nav>
      </div>
    );
  }
};

export const AddContact = () => {
  const [addContact] = useAddContactMutation();
  const [contact, setContact] = useState({ id: "", name: "", email: "" });
  const handleAdd = () => {
    addContact({ ...contact, id: uuid() });
  };
  return (
    <div>
      <input
        type="text"
        value={contact.name}
        placeholder="name"
        onChange={(e) => setContact({ ...contact, name: e.target.value })}
      />
      <input
        type="text"
        value={contact.email}
        placeholder="email"
        onChange={(e) => setContact({ ...contact, email: e.target.value })}
      />
      <button onClick={handleAdd}>Add Contact</button>
    </div>
  );
};
