import React from "react";
import Task from "./Task"

function TaskList({tasks, handleDeletedTasks}) {
  const renderTasks = tasks.map(task => {
    return <Task key={task.text} text={task.text} category={task.category} deleteTask={handleDeletedTasks}/>
  })
  return (
    <div className="tasks">
      {renderTasks}
    </div>
  );
}

export default TaskList;
