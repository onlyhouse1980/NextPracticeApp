export type Todo = {
  id: string;
  label: string;
  done: boolean;
};

// TODO: Append a todo object using the submitted label.
// Set done to false. The ID should be `todo-${todos.length + 1}`.
// Do not mutate the original todos list!
export function addTodoFromForm(todos: Todo[], fields: { label: string }): Todo[] {
  return todos;
}
