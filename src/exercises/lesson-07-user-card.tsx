export type PracticeUser = {
  name: string;
  role: string;
  active: boolean;
};

export type UserCardDetails = {
  displayName: string;
  roleLabel: string;
  statusLabel: string;
  tone: "success" | "muted";
};

// TODO: Build the display details from the user prop instead of placeholders.
export function createUserCardDetails(user: PracticeUser): UserCardDetails {
  return {
    displayName: user.name,
    roleLabel: "Learner",
    statusLabel: "Inactive",
    tone: "muted",
  };
}

export function UserCard({ user }: { user: PracticeUser }) {
  const details = createUserCardDetails(user);

  return (
    <div className="rounded-md border border-slate-200 bg-slate-50 p-5">
      <div className="flex items-center justify-between gap-4">
        <div>
          <h3 className="text-lg font-semibold text-slate-950">
            {details.displayName}
          </h3>
          <p className="mt-1 text-sm text-slate-600">{details.roleLabel}</p>
        </div>
        <span
          className={[
            "rounded-md border px-2.5 py-1 text-xs font-semibold",
            details.tone === "success"
              ? "border-emerald-200 bg-emerald-50 text-emerald-800"
              : "border-slate-200 bg-white text-slate-500",
          ].join(" ")}
        >
          {details.statusLabel}
        </span>
      </div>
    </div>
  );
}
