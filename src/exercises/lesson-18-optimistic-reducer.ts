export type OptimisticTodo = {
  id: string;
  label: string;
  pending: boolean;
};

// TODO: Append a pending optimistic todo using a deterministic optimistic id.
export function addOptimisticTodo(
  todos: OptimisticTodo[],
  label: string,
): OptimisticTodo[] {
  void label;

  return todos;
}
