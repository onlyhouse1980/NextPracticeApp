export type NavItem = {
  label: string;
  href: string;
};

// TODO: Return the primary local navigation for this practice app.
export function getPrimaryNavigation(): NavItem[] {
  return [
  { 
    label: "Home", 
    href: "/" },
  { 
    label: "Lessons", 
    href: "/lessons/route-slug-titles" 
  },
  { 
    label: "Static Params", 
    href: "/lessons/static-params" 
  },
];
}
