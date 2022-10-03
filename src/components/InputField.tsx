import './styles.css';

interface Props {
    todo: string,
    setTodo: React.Dispatch<React.SetStateAction<string>>,
    handleAdd: (e: React.FormEvent) => void
}


export const InputField: React.FC<Props> = ({todo, setTodo, handleAdd}) => {
  return (
    <form className="input" onSubmit={handleAdd}>
        <input type="text" placeholder="Enter a task..." className="input__box"
        value={todo} 
        onChange={(e)=>{ setTodo(e.target.value) }}
        />
        <button type="submit" className="input__submit">
            Go
        </button>
    </form>
  )
}
