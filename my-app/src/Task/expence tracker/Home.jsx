import React, { useState } from "react";
import { useEffect } from "react";
const entries = [
  { title: "trip", amount: -1000 },
  { title: "debt", amount: 2500 },
  { title: "salary", amount: 10000 },
  { title: "food", amount: -1500 },
];
const inititalState = { title: "", amount: 0 };
const Home = () => {
  const [list, setList] = useState(entries);
  const [entry, setEntry] = useState(inititalState);
  const [total, setTotal] = useState({
    balance: 0,
    income: 0,
    expence: 0,
  });
  useEffect(() => {
    const income = list
      .filter((item) => item.amount > 0)
      .map((item) => item.amount)
      .reduce((a, b) => a + b);

    const expence = list
      .filter((item) => item.amount < 0)
      .map((item) => item.amount)
      .reduce((a, b) => a + b);

    const balance = income + expence;
    setTotal({ income, expence, balance });
  }, [list]);
  const handleAdd = () => {
    setList([...list, entry]);
    setEntry(inititalState);
  };
  const symbol = "$";
  return (
    <div>
      <h3>{`balance-${symbol}${total.balance}.00`}</h3>
      <h4>{`income - ${total.income} expence - ${String(total.expence).slice(
        1
      )}`}</h4>
      <div>
        <input
          type="text"
          value={entry.title}
          onChange={(e) => setEntry({ ...entry, title: e.target.value })}
        />
        <input
          type="number"
          value={entry.amount}
          onChange={(e) =>
            setEntry({ ...entry, amount: parseInt(e.target.value) })
          }
        />
        <button onClick={handleAdd}>Add entry</button>
      </div>
      <ul>
        {list.map((item, index) => (
          <li key={index}>
            <h4 className={item.amount > 0 ? "income" : "expence"}>
              {item.title} -{item.amount}
            </h4>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
