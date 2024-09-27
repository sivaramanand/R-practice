import React, { useState } from "react";

const Todolist = () => {
  const [list, setList] = useState([]);
  const [task, setTask] = useState("");
  const [editIndex, setEditIndex] = useState(-1);

  const addTask = () => {
    if (editIndex === -1) {
      setList([...list, task]);
    } else {
      const updatedList = [...list];
      updatedList[editIndex] = task;
      setList(updatedList);
      setEditIndex(-1);
    }
    setTask("");
  };

  const deleteTask = (index) => {
    const tempList = list.filter((item, i) => i !== index);
    setList(tempList);
  };

  const editTasks = (item, index) => {
    setTask(item);
    setEditIndex(index);
  };

  return (
    <>
      <div>
        <input
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder={editIndex === -1 ? "Add a task" : "Edit task"}
        />
        <button onClick={addTask}>
          {editIndex === -1 ? "Submit" : "Update"}
        </button>
      </div>
      <div>
        {list.map((item, index) => (
          <div key={index}>
            <div>{item}</div>
            <button onClick={() => deleteTask(index)}>Delete</button>
            <button onClick={() => editTasks(item, index)}>Edit</button>
          </div>
        ))}
      </div>
    </>
  );
};

export default Todolist;