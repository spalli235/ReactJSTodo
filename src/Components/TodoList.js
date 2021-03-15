import TodoItem from './TodoItem'

function TodoList() {
    return (
      <div className="Todo list">
        Todo list:
        <TodoItem todo="Buy milk"/>
        <TodoItem todo="Buy eggs"/>
        <TodoItem todo="Buy bread"/>
      </div>
    );
  }
  
  export default TodoList;