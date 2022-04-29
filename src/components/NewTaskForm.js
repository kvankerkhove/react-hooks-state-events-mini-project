import React, { useState } from "react";

function NewTaskForm({onTaskFormSubmit, categories}) {

  const [formData, setFormData] = useState({text: "", category: "Code"})
 
  const categoriesMinusAll = categories.filter(category => category !== "All")
  
  const renderOptions = categoriesMinusAll.map(category => {
    return <option key={category}>{category}</option>
  })

  return (
    <form onSubmit={(e) => {
      e.preventDefault()
      onTaskFormSubmit({text: formData.text, category: formData.category})}} className="new-task-form">
      <label>
        Details
        <input onChange={(e) => setFormData({...formData, text: e.target.value})} type="text" name="text" value={formData.text} />
      </label>
      <label>
        Category
        <select onChange={(e) => setFormData({...formData, category: e.target.value}) } name="category" value={formData.category}>
          {renderOptions}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;

