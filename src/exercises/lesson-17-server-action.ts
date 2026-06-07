export type Todo = {
  id: string;
  label: string;
  done: boolean;
};

export type TodoFields = {
  label: string;
};

// TODO: Return a new todo list with the submitted label appended.
export function addTodoFromForm(todos: Todo[], fields: TodoFields): Todo[] {
  void fields;

  return todos;
}
