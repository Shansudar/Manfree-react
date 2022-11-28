import React, { useState } from "react";
import john from "./one.jpg";
const person = { fname: "", age: 0, course: "" };
const Parent = () => {
  const [bot, setBot] = useState(person);
  // const handleChange = (e) => {
  //   let value = e.target.value;
  //   setBot(value);
  // };
  return (
    <div>
      <form action="">
        <label htmlFor="">name</label>

        <input
          type="text"
          value={bot.fname}
          onChange={(e) => setBot({ ...bot, fname: e.target.value })}
        />
        <br />

        <label htmlFor="">age</label>

        <input
          type="number"
          value={bot.age}
          onChange={(e) => setBot({ ...bot, age: parseInt(e.target.value) })}
        />

        <br />
        <label htmlFor="">course</label>

        <input
          type="text"
          value={bot.course}
          onChange={(e) => setBot({ ...bot, course: e.target.value })}
        />
        <br />
        <input type="submit" />
      </form>
      <div>
        <h2>
          {bot.fname}- {bot.age} -{bot.course}
        </h2>
      </div>
    </div>
  );
};

export default Parent;
