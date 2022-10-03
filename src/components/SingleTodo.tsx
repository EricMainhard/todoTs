import { Todo } from "./model";
import { MdEdit, MdDelete, MdDone, MdRemoveDone } from 'react-icons/md'
import './styles.css'
import { useState, useRef, useEffect } from "react";

interface Props {
    todo: Todo,
    todos: Todo[],
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}

export const SingleTodo:React.FC<Props> = ({todo, todos, setTodos}) => {

    const [edit, setEdit] = useState<boolean>(false);
    const [editValue, setEditValue] = useState<string>(todo.todo);

    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(()=>{
        inputRef.current?.focus();
    },[edit])

    const handleEdit = () => {
        setEdit(true);
    }

    const handleDelete = (id: number) => {
        setTodos(todos.filter( (todo) => {
            return todo.id != id
        }))
    }

    const handleComplete = (id: number) => {
        setTodos(todos.map((todo)=>{
            return todo.id === id ? {...todo, isDone: !todo.isDone} : todo
        }));
    }

    const handleSubmit = (e: React.FormEvent, id: number) => {
        e.preventDefault();
        setTodos(todos.map( (todo) => {
            return todo.id === id ? {...todo, todo: editValue} : todo
        }))
        setEdit(false);
    }

    return (
        <form onSubmit={(e)=>{
            handleSubmit(e, todo.id)}}
            className="singleTodo__form">
        {
            edit ? (
                <input value={editValue}
                className="singleTodo__input"
                ref={inputRef}
                onChange={(e)=>{
                    setEditValue(e.target.value);
                }}/>
            ) : ( 
                todo.isDone ? (
                <s>{todo.todo}</s> ) : (
                <span>{todo.todo}</span>
                )
            )
        }
        <div className="singleTodo__divider"></div>
        <div className="singleTodo__actions">
            <i onClick={handleEdit}><MdEdit/></i>
            <i onClick={()=>{
                handleDelete(todo.id)
            }}><MdDelete/></i>
            <i onClick={()=>{
                handleComplete(todo.id)}}>
                {todo.isDone ? <MdRemoveDone/> : <MdDone/> }
            </i>
        </div>
        </form>
    )
}