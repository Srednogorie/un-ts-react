import React, {useState} from 'react';
import TodoList from "./components/TodoList";
import NewTodo from "./components/NewTodo";
import {Todo} from "./todo.model";

function App() {
    const [todos, setTodos] = useState<Todo[]>([]);

    const todoAddHandler = (text: string) => {
        setTodos(prevTodos => [
            ...prevTodos, {id: Math.random().toString(), text}
        ]);
    };
    const todoDeleteHAndler = (id: string) => {
        setTodos(prevTodos => {
            return prevTodos.filter(todo => todo.id !== id);
        });
    };
    return (
      <div className="App">
        <NewTodo onAddTodo={todoAddHandler}/>
        <TodoList items={todos} onDeleteTodo={todoDeleteHAndler}/>
      </div>
    );
}

export default App;
