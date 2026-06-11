export type OptimisticTodo = {
  id: string;
  label: string;
  pending: boolean;
};

// TODO: Append a pending optimistic item with key label and pending: true.
// ID is `optimistic-${label.toLowerCase().replaceAll(" ", "-")}`.
export function addOptimisticTodo(todos: OptimisticTodo[], label: string): OptimisticTodo[] {
  return [];
}
