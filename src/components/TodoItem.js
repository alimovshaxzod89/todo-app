export default function TodoItem({ todo, index, toggleComplete, deleteTodo }) {
    const handleDelete = () => {
      if (window.confirm('Are you sure you want to delete this todo?')) {
        deleteTodo(index);
      }
    };
  
    return (
      <div className="todo-item">
        <div>
          <input
            type="checkbox"
            checked={todo.isCompleted}
            onChange={() => toggleComplete(index)}
          />
          <span className={todo.isCompleted ? 'completed' : ''}>
            {todo.text}
          </span>
        </div>
        <button onClick={handleDelete}>Delete</button>
      </div>
    );
  }
  