import type { JSX } from "react";

export type PracticeUser = {
  name: string;
  role: string;
  active: boolean;
};

// TODO: Map raw user properties to display parameters.
// If active is true: statusLabel is "Active" and tone is "success".
// If active is false: statusLabel is "Inactive" and tone is "muted".
export function createUserCardDetails(user: PracticeUser) {
  return {
    displayName: "User Profile",
    roleLabel: "Role name",
    statusLabel: "Status info",
    tone: "muted",
  };
}

export function UserCard({ user }: { user: PracticeUser }): JSX.Element {
  const details = createUserCardDetails(user);

  return (
    <div className="rounded-md border border-slate-200 bg-slate-50 p-5">
      <h3 className="text-lg font-semibold text-slate-900">
        {details.displayName}
      </h3>
      <p className="mt-1 text-sm text-slate-500">{details.roleLabel}</p>
      <span
        className={[
          "mt-3 inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold",
          details.tone === "success"
            ? "border-emerald-200 bg-emerald-50 text-emerald-800"
            : "border-slate-200 bg-white text-slate-500",
        ].join(" ")}
      >
        {details.statusLabel}
      </span>
    </div>
  );
}
