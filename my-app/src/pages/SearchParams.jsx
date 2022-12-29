import React from "react";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";

const users = [
  { name: "ragnar", active: false },
  { name: "athersdan", active: true },
  { name: "lagaertha", active: true },
  { name: "elthelwolf", active: false },
  { name: "bjorn", active: true },
];
const SearchParams = () => {
  const [params, setParams] = useSearchParams();
  const [list, setList] = useState(users);
  const handleActive = () => {
    setList(users.filter((user) => user.active === true));
    setParams({ active: true, name: "manfree" });
  };
  const handleAll = () => {
    setList(users);
    setParams({});
  };

  return (
    <div>
      <ul>
        {list.map((user) => (
          <li key={user.name}>{user.name}</li>
        ))}
      </ul>
      <button onClick={handleActive}>show active users</button>
      <button onClick={handleAll}>show all users</button>
    </div>
  );
};

export default SearchParams;
