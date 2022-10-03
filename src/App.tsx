import { useState } from 'react';
import { InputField } from './components/InputField';
import { TodoList } from './components/TodoList';
import { Todo } from './components/model';
import './components/styles.css';

const App:React.FC = () => {

  const [todo, setTodo] = useState<string>('')
  const [todos, setTodos] = useState<Todo[]>([])

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (todo){
      setTodos([...todos, {
        id: Date.now(),
        todo: todo,
        isDone: false
      }]);
      setTodo('');
    }
  }

  return (
      <div className="app">
        <div className='background_1'>
          <h1 className='heading'>
            Taskify
          </h1>
          <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd}/>
        </div>
        <div className='background_2'>
          <TodoList 
          todos={todos} 
          setTodos={setTodos}/>
        </div>
      </div>
  );
}

export default App;
