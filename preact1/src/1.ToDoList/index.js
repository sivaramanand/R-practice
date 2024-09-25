import React, { useState } from "react";

const Todolist = () => {
  const [list, setList] = useState([]);
  const [task, setTask] = useState("");
  const [editTask, setEditTask] = useState(-1);

  const addTask = () => {
    if (editTask === -1) {
      setList([...list, task]);
      console.log(list);
    } else {
      let updatedList = [...list];
      updatedList[editTask] = task;
      setList(updatedList);
      setEditTask(-1);
    }
  };
  const deleteTask = (ind) => {
    let tempList = list.filter((item, index) => index !== ind);
    setList(tempList);
  };
  const editTasks = (ite, ind) => {
    setEditTask(ind);
    setTask(ite);

  };
  return (
    <>
      <div>
        <input onChange={(e) => setTask(e.target.value)} />{" "}
        <button onClick={() => addTask()}>Submit</button>
      </div>
      <div>
        {list.map((item, index) => (
          <>
            <div>{item}</div>
            <button onClick={() => deleteTask(index)}>Delete</button>
            <button onClick={() => editTasks(item, index)}>Edit</button>
          </>
        ))}
      </div>
    </>
  );
};

export default Todolist;
