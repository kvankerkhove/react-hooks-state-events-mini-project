import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";

function App() {

  const [allTasks, setAllTasks] = useState(TASKS)
  const [selectedCategory, setSelectedCategory] = useState("")
  
  
  function handleDeletedTasks (e) {
    const updatedTasks = allTasks.filter(task => e.target.name !== task.text)
    setAllTasks(updatedTasks)
  }

  function handleSelectClick(e){
    setSelectedCategory(e.target.textContent)
  }

  const categoryFilter = allTasks.filter(task => {
    if(selectedCategory === ''){
      return true
    }
    else if (selectedCategory === 'All'){
      return true
    } else {
      return task.category === selectedCategory
    }
  })


  function onTaskFormSubmit(obj){
    setAllTasks([...allTasks, obj])
  }


  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter selectedCategory = {selectedCategory} categories={CATEGORIES} handleSelectClick={handleSelectClick}/>
      <NewTaskForm onTaskFormSubmit={onTaskFormSubmit} categories={CATEGORIES}/>
      <TaskList tasks={categoryFilter} handleDeletedTasks={handleDeletedTasks}/>
    </div>
  );
}


export default App;
