export type NavItem = {
  label: string;
  href: string;
};

// TODO: Return the primary local navigation for this practice app.
export function getPrimaryNavigation(): NavItem[] {
  return [
    {
      label: "Docs",
      href: "https://nextjs.org/docs",
    },
  ];
}
