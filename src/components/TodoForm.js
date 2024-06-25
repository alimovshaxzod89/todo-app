import { useState } from 'react';

export default function TodoForm({ addTodo }) {
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (value.trim()) {
      addTodo(value);
      setValue("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={value} onChange={handleChange} type="text" />
      <button type="submit">Save</button>
    </form>
  );
}
