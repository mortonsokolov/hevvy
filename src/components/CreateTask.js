import React, { useState } from "react";

export default function CreateTask(props) {
  const [task, setTask] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    if (task.trim() === "") {
      alert("Написати треба");
      return;
    }

    if (task.length > 24) {
      alert("Написати треба не більше 24 символів");
      return;
    }

    props.addTask(task);
    setTask("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        value={task}
        type="text"
        placeholder="Пиши сюди"
        onChange={(event) => setTask(event.target.value)}
      />
      <button className="btn" type="submit">
        Додати задачу
      </button>
    </form>
  );
}
