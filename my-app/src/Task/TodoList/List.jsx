import React from "react";

const List = ({ list, handleDelete, handleChange, handleEdit }) => {
  return (
    <div>
      <ul>
        {list.map((item) => (
          <li key={item.id}>
            <h4 className={item.done ? "success" : "item"}>{item.title}</h4>
            <input
              type="checkbox"
              checked={item.done}
              onChange={() => handleChange(item.id)}
            />
            <button onClick={() => handleEdit(item.id)}>Edit</button>
            <button onClick={() => handleDelete(item.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default List;
