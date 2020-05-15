import React, { useRef } from 'react';

interface TodoFormProps {
  onAdd(title: string): void
}

const TodoForm: React.FunctionComponent<TodoFormProps> = ({ onAdd }) => {
  // const [title, setTitle] = useState<string>('');
  const ref = useRef<HTMLInputElement>(null);

  // const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setTitle(event.target.value)
  // }

  const keyPressHandler = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter') {
      onAdd(ref.current!.value);
      ref.current!.value = '';
      // console.log(title);
    }
  }

  return(
    <div className="input-field mt2">
      <input
      // onChange={changeHandler}
      // value={title}
      ref={ref}
      type="text"
      id="title"
      placeholder="Todo"
      onKeyPress={keyPressHandler}
      />
      <label htmlFor="title" className="active">
        Add todo !
      </label>
    </div>
  )
}

export default TodoForm;