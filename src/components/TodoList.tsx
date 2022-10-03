import { Todo } from "./model";
import { SingleTodo } from "./SingleTodo";
import './styles.css';

interface Props {
    todos: Todo[],
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>,
}

export const TodoList:React.FC<Props> = ({todos, setTodos}) => {
    return (
        <div className="todoList">
            <div>
                <h2>Active tasks</h2>
                {
                    todos.map((todo)=>{
                        if (todo.isDone === false){
                            return (
                                <SingleTodo 
                                todo={todo} 
                                key={todo.id}
                                todos={todos}
                                setTodos={setTodos}/>
                            )
                        }
                    })
                }
            </div>
               
            <div>
                <h2>Completed tasks</h2>
                {
                    todos.map((todo)=>{
                        if (todo.isDone === true){
                            return (
                                <SingleTodo 
                                todo={todo} 
                                key={todo.id}
                                todos={todos}
                                setTodos={setTodos}/>
                            )
                        }
                    })
                }
            </div>
        </div>
    )
}