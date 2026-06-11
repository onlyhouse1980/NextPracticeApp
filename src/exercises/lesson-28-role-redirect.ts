export type UserRedirectDetails = {
  isAdmin: boolean;
  isOnboarded: boolean;
};

// TODO: Resolve redirection logic for App Router.
// - If user.isAdmin is true, redirect to "/admin/dashboard"
// - If user.isOnboarded is false, redirect to "/onboarding"
// - Otherwise, redirect to "/dashboard"
export function getRedirectDestination(user: UserRedirectDetails): string {
  return "/dashboard";
}
