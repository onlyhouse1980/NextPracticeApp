export type PracticeStatus = "success" | "warning" | "error";

// TODO: Return correct Tailwind classes depending on the semantic status:
// success -> "border-emerald-200 bg-emerald-50 text-emerald-800"
// warning -> "border-amber-200 bg-amber-50 text-amber-800"
// error   -> "border-rose-200 bg-rose-50 text-rose-800"
export function getStatusStyles(status: PracticeStatus) {
  return "border-slate-200 bg-slate-50 text-slate-700";
}
