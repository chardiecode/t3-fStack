import type { Todo } from "~/types";

type TodoProps = {
  todo: Todo;
};

function Todo({ todo }: TodoProps) {
  const { id, text, done } = todo;
  return (
    <>
      <div className="gap-2">
        <input type="checkbox gap-2" checked={done} />
        <label className="gap-2">{text}</label>
        <button className="btn gap-2 bg-blue-500">Delete</button>
      </div>
    </>
  );
}

export default Todo;
