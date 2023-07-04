import React, { useEffect, useState } from "react";

const User1 = () => {
  const [state1, setstate1] = useState(false);
  const [username, setusername] = useState("");
  const [allUser, setallUser] = useState([]);
  const [todo, settodo] = useState([]);

  useEffect(() => {
    setallUser([...allUser, username]);
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        settodo(data);
      });
  }, [username, state1]);

  const changeState = () => {
    setstate1(!state1);
  };

  return (
    <>
      <div>User1</div>

      <input
        onChange={(e) => {
          setusername(e.target.value);
        }}
        type="text"
      />
      <button onClick={changeState}>Change State</button>
      {todo &&
        todo.map((el, i) => (
          <div key={i} className={el.completed ? "text-success" : "text-danger"}>
            {el.title}
          </div>
        ))}
    </>
  );
};

export default User1;
