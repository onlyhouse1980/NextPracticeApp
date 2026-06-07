export type PracticeStatus = "success" | "warning" | "error";

// TODO: Return the matching classes for each status.
export function getStatusStyles(status: PracticeStatus) {
  void status;

  return "border-slate-200 bg-slate-50 text-slate-700";
}
