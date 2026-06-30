import type { ReactNode } from "react";
import * as lesson01 from "@/exercises/lesson-01-home-copy";
import * as lesson02 from "@/exercises/lesson-02-metadata";
import * as lesson03 from "@/exercises/lesson-03-loading-state";
import * as lesson04 from "@/exercises/lesson-04-active-link";
import * as lesson05 from "@/exercises/lesson-05-image-props";
import * as lesson06 from "@/exercises/lesson-06-cache-policy";
import * as lesson07 from "@/exercises/lesson-07-status-class";
import * as lesson08 from "@/exercises/lesson-08-dynamic-params";
import * as lesson09 from "@/exercises/lesson-09-link-prefetch";
import * as lesson10 from "@/exercises/lesson-10-viewport-config";
import * as lesson11 from "@/exercises/lesson-11-route-title";
import * as lesson12 from "@/exercises/lesson-12-navigation";
import * as lesson13 from "@/exercises/lesson-13-status-resolver";
import * as lesson14 from "@/exercises/lesson-14-feature-list";
import * as lesson15 from "@/exercises/lesson-15-posts";
import * as lesson16 from "@/exercises/lesson-16-user-card";
import * as lesson17 from "@/exercises/lesson-17-query-builder";
import * as lesson18 from "@/exercises/lesson-18-search-params";
import * as lesson19 from "@/exercises/lesson-19-pagination";
import * as lesson20 from "@/exercises/lesson-20-json-parser";
import * as lesson21 from "@/exercises/lesson-21-empty-state";
import * as lesson22 from "@/exercises/lesson-22-form-data";
import * as lesson23 from "@/exercises/lesson-23-form-validation";
import * as lesson24 from "@/exercises/lesson-24-suspense-card";
import * as lesson25 from "@/exercises/lesson-25-cache-tags";
import * as lesson26 from "@/exercises/lesson-26-opengraph-meta";
import * as lesson27 from "@/exercises/lesson-27-static-params";
import * as lesson28 from "@/exercises/lesson-28-role-redirect";
import * as lesson29 from "@/exercises/lesson-29-catch-all";
import * as lesson30 from "@/exercises/lesson-30-route-response";
import * as lesson31 from "@/exercises/lesson-31-cors-headers";
import * as lesson32 from "@/exercises/lesson-32-cookies";
import * as lesson33 from "@/exercises/lesson-33-custom-headers";
import * as lesson34 from "@/exercises/lesson-34-server-action";
import * as lesson35 from "@/exercises/lesson-35-action-errors";
import * as lesson36 from "@/exercises/lesson-36-optimistic-reducer";
import * as lesson37 from "@/exercises/lesson-37-middleware-paths";
import * as lesson38 from "@/exercises/lesson-38-clsx-merger";
import * as lesson39 from "@/exercises/lesson-39-error-mapper";
import * as lesson40 from "@/exercises/lesson-40-jwt-decoder";

export type Lesson = {
  number: number;
  slug: string;
  title: string;
  file: string;
  goal: string;
  explanation: string;
  tasks: string[];
  answerSyntax: string;
  successText: string;
  render: () => ReactNode;
  isComplete: () => boolean;
};

type PrimitiveRecord = Record<string, string | number | boolean | null>;

const routeTitleInput = "server-components";
const routeTitleExpected = "Server Components";

const homeIntroExpected = {
  headline: "Build the habit of fixing real Next.js files",
  summary:
    "Open a lesson, edit its code in the embedded workspace, and save to verify the result.",
  cta: "Start Lesson 1",
};

const expectedNavigation = [
  { label: "Home", href: "/" },
  { label: "Lessons", href: "/lessons/route-slug-titles" },
  { label: "Static Params", href: "/lessons/static-params" },
];

const posts: lesson15.PracticePost[] = [
  {
    title: "Draft: App Router notes",
    published: false,
    publishedAt: "2026-02-01",
  },
  {
    title: "Route handlers in practice",
    published: true,
    publishedAt: "2026-03-15",
  },
  {
    title: "Metadata that helps readers",
    published: true,
    publishedAt: "2026-05-20",
  },
];

const practiceUser: lesson16.PracticeUser = {
  name: "Riley Chen",
  role: "Frontend developer",
  active: true,
};

const resources: lesson21.Resource[] = [
  { label: "Next.js App Router docs", href: "https://nextjs.org/docs/app" },
  { label: "React Server Components", href: "https://react.dev/reference/rsc" },
];

const features: lesson14.Feature[] = [
  { title: "Server Components", enabled: true },
  { title: "Draft Mode", enabled: false },
  { title: "Route Handlers", enabled: true },
  { title: "Metadata API", enabled: true },
];

const expectedStatusStyles: Record<lesson07.PracticeStatus, string> = {
  success: "border-emerald-200 bg-emerald-50 text-emerald-800",
  warning: "border-amber-200 bg-amber-50 text-amber-800",
  error: "border-rose-200 bg-rose-50 text-rose-800",
};

const todos: lesson34.Todo[] = [
  { id: "todo-1", label: "Read the lesson", done: true },
  { id: "todo-2", label: "Open the exercise file", done: false },
];

const optimisticTodos: lesson36.OptimisticTodo[] = [
  { id: "todo-existing", label: "Review route params", pending: false },
];

const syntaxExamples: Record<number, string> = {
  1: `export const homeIntroContent = {
  headline: "Practice title",
  summary: "Short supporting sentence.",
  cta: "Start",
};`,
  2: "return `${sectionTitle} | App Name`;",
  3: "return `Saving ${resourceName}...`;",
  4: `return pathname === href
  ? "active-style"
  : "normal-style";`,
  5: `export const avatarConfig = {
  src: "/avatar.png",
  alt: "User avatar",
  width: 64,
  height: 64,
};`,
  6: `export const revalidate: number = 30;
export const dynamic: string = "force-static";`,
  7: `const styles = {
  info: "border-sky-200 bg-sky-50 text-sky-800",
  success: "border-emerald-200 bg-emerald-50 text-emerald-800",
};

return styles[state];`,
  8: "return `/products/${slug}`;",
  9: 'return !url.startsWith("http");',
  10: `export const viewportConfig = {
  themeColor: "#ffffff",
  width: "device-width",
  initialScale: 1,
};`,
  11: `const title = "blog-post"
  .split("-")
  .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
  .join(" ");`,
  12: `return [
  { label: "Dashboard", href: "/dashboard" },
  { label: "Settings", href: "/settings" },
];`,
  13: `switch (error) {
  case "FORBIDDEN": return 403;
  default: return 500;
}`,
  14: `return options
  .filter((option) => option.selected)
  .map((option) => option.label);`,
  15: `return items
  .filter((item) => item.visible)
  .sort((a, b) => b.createdAt.localeCompare(a.createdAt));`,
  16: `return {
  displayName: profile.name,
  roleLabel: profile.title,
  statusLabel: profile.enabled ? "Enabled" : "Disabled",
  tone: profile.enabled ? "success" : "muted",
};`,
  17: `const searchParams = new URLSearchParams();
for (const [k, v] of Object.entries(filters)) {
  if (v) searchParams.set(k, v);
}
return searchParams.toString();`,
  18: 'return searchParams.get("category") || "all";',
  19: `const page = Number(params.get("page")) || 1;
const limit = Number(params.get("limit")) || 10;
return { limit, offset: (page - 1) * limit };`,
  20: `try {
  return JSON.parse(str);
} catch {
  return fallback;
}`,
  21: `if (items.length === 0) {
  return { kind: "empty", message: "Nothing to show.", items: [] };
}

return { kind: "items", message: "Items ready.", items };`,
  22: `return {
  email: fields.email.trim().toLowerCase(),
  plan: fields.plan,
  acceptsTerms: fields.acceptsTerms === "on",
};`,
  23: `const errors: Record<string, string> = {};
if (!data.email.includes("@")) errors.email = "Invalid";
return { isValid: Object.keys(errors).length === 0, errors };`,
  24: `export const emptyStateLabel: string = "No items yet";
export const skeletonRows: number = 2;`,
  25: `return {
  next: { revalidate: 60, tags: ["tag1"] }
};`,
  26: `export const metadata = {
  openGraph: {
    title: "My Site",
    description: "Cool site",
    images: [{ url: "/banner.png" }]
  }
};`,
  27: "return ids.map((id) => ({ id }));",
  28: `if (user.role === "admin") return "/admin";
return "/user";`,
  29: `let path = "";
return segments.map((s) => {
  path += \`/\${s}\`;
  return { name: s, href: path };
});`,
  30: `return {
  status: 201,
  body: {
    ok: true,
    source: "api route",
  },
};`,
  31: `return {
  status: 200,
  headers: {
    "Access-Control-Allow-Origin": "*",
  }
};`,
  32: `const list = header.split(";");
// extract matching values...`,
  33: `return {
  "x-custom-response": headers["x-custom-request"]
};`,
  34: `return [
  ...items,
  {
    id: \`item-\${items.length + 1}\`,
    label: fields.label,
    done: false,
  },
];`,
  35: `try {
  return { success: true, data: action() };
} catch (err: any) {
  return { success: false, error: err.message };
}`,
  36: `const id = \`optimistic-\${label.toLowerCase()}\`;

return [...items, { id, label, pending: true }];`,
  37: `if (path.startsWith("/_next")) return false;
return true;`,
  38: `return classes.filter(Boolean).join(" ");`,
  39: `if (err.message.includes("database")) {
  return { code: "DB_ERR", message: "Error" };
}`,
  40: `const payload = token.split(".")[1];
const decoded = Buffer.from(payload, "base64").toString();
return JSON.parse(decoded);`
};

export const lessons: Lesson[] = [
  {
    number: 1,
    slug: "home-intro-copy",
    title: "Home Intro Copy",
    file: "src/exercises/lesson-01-home-copy.tsx",
    goal: "Practice keeping component markup intact while changing the data that drives it.",
    explanation:
      "Many React components are easiest to maintain when copy and markup have clear ownership. This exercise only needs the content object fixed.",
    tasks: [
      `Set headline to "${homeIntroExpected.headline}".`,
      `Set summary to "${homeIntroExpected.summary}".`,
      `Set cta to "${homeIntroExpected.cta}".`,
    ],
    answerSyntax: `export const homeIntroContent = {
  headline: "Build the habit of fixing real Next.js files",
  summary: "Open a lesson, edit its code in the embedded workspace, and save to verify the result.",
  cta: "Start Lesson 1",
};`,
    successText: "The card is successful when the content object matches the expected copy.",
    render: () => (
      <div className="grid gap-4 lg:grid-cols-2">
        <lesson01.HomeIntro />
        <JsonBlock label="Expected content" value={homeIntroExpected} />
      </div>
    ),
    isComplete: () =>
      lesson01.homeIntroContent.headline === homeIntroExpected.headline &&
      lesson01.homeIntroContent.summary === homeIntroExpected.summary &&
      lesson01.homeIntroContent.cta === homeIntroExpected.cta,
  },
  {
    number: 2,
    slug: "metadata-builder",
    title: "Metadata Builder",
    file: "src/exercises/lesson-02-metadata.ts",
    goal: "Practice composing browser titles for App Router metadata.",
    explanation:
      "App Router pages can export metadata. A small helper keeps titles consistent across pages.",
    tasks: [
      'Append " | Next Practice" to the provided page title.',
      "Do not hardcode a single page name.",
      "Keep spacing around the separator exact.",
    ],
    answerSyntax: 'return `${pageTitle} | Next Practice`;',
    successText: "The metadata title is successful when the page title includes the app suffix.",
    render: () => (
      <ResultGrid
        rows={[
          { label: "Input title", value: "Routing" },
          { label: "Current title", value: lesson02.buildMetadataTitle("Routing") },
          { label: "Expected title", value: "Routing | Next Practice" },
        ]}
      />
    ),
    isComplete: () =>
      lesson02.buildMetadataTitle("Routing") === "Routing | Next Practice",
  },
  {
    number: 3,
    slug: "loading-state-copy",
    title: "Loading State Copy",
    file: "src/exercises/lesson-03-loading-state.tsx",
    goal: "Practice making loading UI specific to the resource being fetched.",
    explanation:
      "Next.js loading files and Suspense fallbacks should tell the user what part of the screen is preparing.",
    tasks: [
      'Return "Loading lesson preview..." when resourceName is lesson preview.',
      "Use the provided resourceName instead of hardcoded generic copy.",
      "Keep the ellipsis at the end.",
    ],
    answerSyntax: 'return `Loading ${resourceName}...`;',
    successText: "The loading panel is successful when the fallback copy names the lesson preview.",
    render: () => (
      <div className="grid gap-4 lg:grid-cols-2">
        <lesson03.LoadingPanel resourceName="lesson preview" />
        <ResultGrid
          rows={[
            {
              label: "Expected message",
              value: "Loading lesson preview...",
            },
          ]}
        />
      </div>
    ),
    isComplete: () =>
      lesson03.getLoadingMessage("lesson preview") ===
      "Loading lesson preview...",
  },
  {
    number: 4,
    slug: "active-link-css",
    title: "Active Link CSS",
    file: "src/exercises/lesson-04-active-link.ts",
    goal: "Practice returning conditional class strings based on route active states.",
    explanation:
      "Custom navigation links need distinct styles when active. Compare the pathname parameter with the href and return active or default CSS classes.",
    tasks: [
      'Return "text-teal-600 font-semibold" when pathname matches href.',
      'Return "text-slate-500 hover:text-slate-800" when they do not match.',
    ],
    answerSyntax: `return pathname === href
  ? "text-teal-600 font-semibold"
  : "text-slate-500 hover:text-slate-800";`,
    successText: "The link class is successful when active paths resolve to teal styling and inactive paths resolve to slate.",
    render: () => (
      <ResultGrid
        rows={[
          { label: "Active case (/home, /home)", value: lesson04.getLinkClass("/home", "/home") },
          { label: "Inactive case (/settings, /home)", value: lesson04.getLinkClass("/settings", "/home") },
          { label: "Expected outputs", value: '"text-teal-600 font-semibold", "text-slate-500 hover:text-slate-800"' },
        ]}
      />
    ),
    isComplete: () =>
      lesson04.getLinkClass("/home", "/home") === "text-teal-600 font-semibold" &&
      lesson04.getLinkClass("/settings", "/home") === "text-slate-500 hover:text-slate-800",
  },
  {
    number: 5,
    slug: "image-props",
    title: "Image Props",
    file: "src/exercises/lesson-05-image-props.ts",
    goal: "Practice supplying stable image metadata before rendering an optimized image.",
    explanation:
      "Images need useful alt text and stable dimensions. This exercise checks the data before it is passed to an image component.",
    tasks: [
      'Keep src as "/next.svg".',
      'Set alt to "Next.js logo".',
      "Set width to 120 and height to 24.",
    ],
    answerSyntax: `export const imageConfig = {
  src: "/next.svg",
  alt: "Next.js logo",
  width: 120,
  height: 24,
};`,
    successText: "The image config is successful when alt text and dimensions are complete.",
    render: () => (
      <div className="grid gap-4 lg:grid-cols-2">
        <JsonBlock label="Current image config" value={lesson05.imageConfig} />
        <JsonBlock
          label="Expected image config"
          value={{
            src: "/next.svg",
            alt: "Next.js logo",
            width: 120,
            height: 24,
          }}
        />
      </div>
    ),
    isComplete: () =>
      JSON.stringify(lesson05.imageConfig) ===
      JSON.stringify({
        src: "/next.svg",
        alt: "Next.js logo",
        width: 120,
        height: 24,
      }),
  },
  {
    number: 6,
    slug: "cache-policy",
    title: "Cache Policy",
    file: "src/exercises/lesson-06-cache-policy.ts",
    goal: "Practice reading route segment config values used by App Router pages.",
    explanation:
      "Route segment config controls rendering and cache behavior. This exercise mirrors the shape of config exports without changing an app route.",
    tasks: [
      "Set revalidate to 60.",
      'Set dynamic to "force-static".',
      "Do not change the export names.",
    ],
    answerSyntax: `export const revalidate: number = 60;
export const dynamic: string = "force-static";`,
    successText: "The policy is successful when both exported config values match the static preview requirement.",
    render: () => (
      <ResultGrid
        rows={[
          { label: "Current revalidate", value: lesson06.revalidate },
          { label: "Expected revalidate", value: 60 },
          { label: "Current dynamic", value: lesson06.dynamic },
          { label: "Expected dynamic", value: "force-static" },
        ]}
      />
    ),
    isComplete: () =>
      lesson06.revalidate === 60 && lesson06.dynamic === "force-static",
  },
  {
    number: 7,
    slug: "status-classes",
    title: "Status Classes",
    file: "src/exercises/lesson-07-status-class.ts",
    goal: "Practice returning different Tailwind class strings for semantic states.",
    explanation:
      "Centralizing status classes keeps repeated UI states consistent while still allowing specific colors.",
    tasks: [
      "Return emerald classes for success.",
      "Return amber classes for warning.",
      "Return rose classes for error.",
    ],
    answerSyntax: `const styles = {
  success: "border-emerald-200 bg-emerald-50 text-emerald-800",
  warning: "border-amber-200 bg-amber-50 text-amber-800",
  error: "border-rose-200 bg-rose-50 text-rose-800",
};

return styles[status];`,
    successText: "The status classes are successful when each state gets its expected visual treatment.",
    render: () => (
      <div className="grid gap-3">
        {(["success", "warning", "error"] as lesson07.PracticeStatus[]).map(
          (status) => (
            <div
              key={status}
              className={[
                "rounded-md border p-3 text-sm font-semibold",
                lesson07.getStatusStyles(status),
              ].join(" ")}
            >
              {status}: {lesson07.getStatusStyles(status)}
            </div>
          ),
        )}
      </div>
    ),
    isComplete: () =>
      (["success", "warning", "error"] as lesson07.PracticeStatus[]).every(
        (status) => lesson07.getStatusStyles(status) === expectedStatusStyles[status],
      ),
  },
  {
    number: 8,
    slug: "dynamic-route-params",
    title: "Dynamic Route Params",
    file: "src/exercises/lesson-08-dynamic-params.ts",
    goal: "Practice building a URL from the same slug a dynamic route receives.",
    explanation:
      "The lesson pages live under /lessons/[slug], so generated links need to preserve the route segment name.",
    tasks: [
      "Use the /lessons route prefix.",
      "Keep the provided slug in the final path.",
      "Return a string, not a Link component.",
    ],
    answerSyntax: 'return `/lessons/${slug}`;',
    successText: "The href is successful when metadata-builder maps to /lessons/metadata-builder.",
    render: () => (
      <ResultGrid
        rows={[
          { label: "Input slug", value: "metadata-builder" },
          {
            label: "Current href",
            value: lesson08.getLessonHref("metadata-builder"),
          },
          { label: "Expected href", value: "/lessons/metadata-builder" },
        ]}
      />
    ),
    isComplete: () =>
      lesson08.getLessonHref("metadata-builder") ===
      "/lessons/metadata-builder",
  },
  {
    number: 9,
    slug: "link-prefetch",
    title: "Link Prefetching",
    file: "src/exercises/lesson-09-link-prefetch.ts",
    goal: "Practice conditional prefetching flags for external vs internal resources.",
    explanation:
      "Internal Next.js links automatically prefetch page files. Avoid waste by returning false for external HTTP/HTTPS domains.",
    tasks: [
      'Return false if href starts with "http://" or "https://".',
      'Return true for internal route paths starting with "/".',
    ],
    answerSyntax: 'return !href.startsWith("http://") && !href.startsWith("https://");',
    successText: "The prefetch helper is successful when external links return false and internal routes return true.",
    render: () => (
      <ResultGrid
        rows={[
          { label: "Internal link (/dashboard)", value: String(lesson09.shouldPrefetch("/dashboard")) },
          { label: "External link (https://nextjs.org)", value: String(lesson09.shouldPrefetch("https://nextjs.org")) },
          { label: "Expected outputs", value: "true, false" },
        ]}
      />
    ),
    isComplete: () =>
      lesson09.shouldPrefetch("/dashboard") === true &&
      lesson09.shouldPrefetch("https://nextjs.org") === false &&
      lesson09.shouldPrefetch("http://example.com") === false,
  },
  {
    number: 10,
    slug: "viewport-config",
    title: "Viewport Config",
    file: "src/exercises/lesson-10-viewport-config.ts",
    goal: "Practice setting up responsive viewport metadata exports.",
    explanation:
      "A mobile-responsive layout relies on initialScale and width values. Provide correct configurations.",
    tasks: [
      'Set themeColor to "#0f172a".',
      'Set width to "device-width".',
      "Set initialScale to 1.0 (number).",
    ],
    answerSyntax: `export const viewportConfig = {
  themeColor: "#0f172a",
  width: "device-width",
  initialScale: 1.0,
};`,
    successText: "The viewport config is successful when theme color, width, and scale parameters are completed.",
    render: () => (
      <div className="grid gap-4 lg:grid-cols-2">
        <JsonBlock label="Current viewport config" value={lesson10.viewportConfig} />
        <JsonBlock
          label="Expected viewport config"
          value={{
            themeColor: "#0f172a",
            width: "device-width",
            initialScale: 1.0,
          }}
        />
      </div>
    ),
    isComplete: () =>
      JSON.stringify(lesson10.viewportConfig) ===
      JSON.stringify({
        themeColor: "#0f172a",
        width: "device-width",
        initialScale: 1.0,
      }),
  },
  {
    number: 11,
    slug: "route-slug-titles",
    title: "Route Slug Titles",
    file: "src/exercises/lesson-11-route-title.ts",
    goal: "Practice transforming route segment strings into readable page text.",
    explanation:
      "Dynamic route params often arrive as URL-friendly slugs. The page can display them clearly after a small formatting step.",
    tasks: [
      'Return "Server Components" for the input "server-components".',
      "Split the slug on hyphens and capitalize each word.",
      "Keep the function reusable for other slug values.",
    ],
    answerSyntax: `return slug
  .split("-")
  .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
  .join(" ");`,
    successText: "The result is successful when the formatted title matches the expected display text.",
    render: () => (
      <ResultGrid
        rows={[
          { label: "Input slug", value: routeTitleInput },
          { label: "Current output", value: lesson11.formatRouteTitle(routeTitleInput) },
          { label: "Expected output", value: routeTitleExpected },
        ]}
      />
    ),
    isComplete: () =>
      lesson11.formatRouteTitle(routeTitleInput) === routeTitleExpected,
  },
  {
    number: 12,
    slug: "lesson-navigation",
    title: "Lesson Navigation",
    file: "src/exercises/lesson-12-navigation.ts",
    goal: "Practice returning local App Router links instead of external starter links.",
    explanation:
      "Next.js navigation should point to internal routes when users are moving through pages in the same app.",
    tasks: [
      "Return exactly three navigation items.",
      "Use Home, Lessons, and Static Params as labels.",
      "Use /, /lessons/route-slug-titles, and /lessons/static-params as hrefs.",
    ],
    answerSyntax: `return [
  { label: "Home", href: "/" },
  { label: "Lessons", href: "/lessons/route-slug-titles" },
  { label: "Static Params", href: "/lessons/static-params" },
];`,
    successText: "The navigation is successful when all labels and hrefs match the expected local routes.",
    render: () => (
      <div className="grid gap-4 lg:grid-cols-2">
        <PreviewList
          label="Current navigation"
          items={lesson12
            .getPrimaryNavigation()
            .map((item) => `${item.label}: ${item.href}`)}
        />
        <PreviewList
          label="Expected navigation"
          items={expectedNavigation.map((item) => `${item.label}: ${item.href}`)}
        />
      </div>
    ),
    isComplete: () =>
      JSON.stringify(lesson12.getPrimaryNavigation()) ===
      JSON.stringify(expectedNavigation),
  },
  {
    number: 13,
    slug: "status-resolver",
    title: "Status Resolver",
    file: "src/exercises/lesson-13-status-resolver.ts",
    goal: "Practice mapping string error constants to standard numeric HTTP status codes.",
    explanation:
      "Next.js Route Handlers require correct numeric HTTP headers when responding to failures. Write a parser logic.",
    tasks: [
      'Map "UNAUTHORIZED" to 401.',
      'Map "NOT_FOUND" to 404.',
      'Map "BAD_REQUEST" to 400.',
      "Return 500 as the fallback for other values.",
    ],
    answerSyntax: `switch (errorType) {
  case "UNAUTHORIZED": return 401;
  case "NOT_FOUND": return 404;
  case "BAD_REQUEST": return 400;
  default: return 500;
}`,
    successText: "The status resolver is successful when all statuses are mapped correctly.",
    render: () => (
      <ResultGrid
        rows={[
          { label: "UNAUTHORIZED", value: lesson13.resolveStatusCode("UNAUTHORIZED") },
          { label: "NOT_FOUND", value: lesson13.resolveStatusCode("NOT_FOUND") },
          { label: "BAD_REQUEST", value: lesson13.resolveStatusCode("BAD_REQUEST") },
          { label: "Fallback (OTHER)", value: lesson13.resolveStatusCode("UNKNOWN_ERROR") },
          { label: "Expected status codes", value: "401, 404, 400, 500" },
        ]}
      />
    ),
    isComplete: () =>
      lesson13.resolveStatusCode("UNAUTHORIZED") === 401 &&
      lesson13.resolveStatusCode("NOT_FOUND") === 404 &&
      lesson13.resolveStatusCode("BAD_REQUEST") === 400 &&
      lesson13.resolveStatusCode("UNKNOWN") === 500,
  },
  {
    number: 14,
    slug: "feature-list",
    title: "Feature List",
    file: "src/exercises/lesson-14-feature-list.tsx",
    goal: "Practice mapping data while filtering out disabled feature flags.",
    explanation:
      "Lists often start as arrays of richer objects. The UI needs the enabled labels in the same order the data provides them.",
    tasks: [
      "Filter out disabled features.",
      "Return every enabled feature title.",
      "Keep the original enabled order.",
    ],
    answerSyntax: `return features
  .filter((feature) => feature.enabled)
  .map((feature) => feature.title);`,
    successText: "The feature list is successful when all enabled features appear and Draft Mode is excluded.",
    render: () => (
      <div className="grid gap-4 lg:grid-cols-2">
        <lesson14.FeatureList features={features} />
        <PreviewList
          label="Expected labels"
          items={["Server Components", "Route Handlers", "Metadata API"]}
        />
      </div>
    ),
    isComplete: () =>
      sameStrings(lesson14.getFeatureLabels(features), [
        "Server Components",
        "Route Handlers",
        "Metadata API",
      ]),
  },
  {
    number: 15,
    slug: "published-posts",
    title: "Published Posts",
    file: "src/exercises/lesson-15-posts.ts",
    goal: "Practice shaping server-side data before a page renders it.",
    explanation:
      "Server Components commonly fetch more data than the UI should show. Filter and sort before rendering.",
    tasks: [
      "Remove posts where published is false.",
      "Sort the remaining posts by publishedAt, newest first.",
      "Return the original post objects in the new order.",
    ],
    answerSyntax: `return posts
  .filter((post) => post.published)
  .sort((a, b) => b.publishedAt.localeCompare(a.publishedAt));`,
    successText: "The post list is successful when only published posts appear newest first.",
    render: () => (
      <div className="grid gap-4 lg:grid-cols-2">
        <PreviewList
          label="Current posts"
          items={lesson15.getPublishedPosts(posts).map((post) => post.title)}
        />
        <PreviewList
          label="Expected posts"
          items={["Metadata that helps readers", "Route handlers in practice"]}
        />
      </div>
    ),
    isComplete: () =>
      sameStrings(
        lesson15.getPublishedPosts(posts).map((post) => post.title),
        ["Metadata that helps readers", "Route handlers in practice"],
      ),
  },
  {
    number: 16,
    slug: "component-props",
    title: "Component Props",
    file: "src/exercises/lesson-16-user-card.tsx",
    goal: "Practice deriving display details from a component prop.",
    explanation:
      "Props are the contract between a parent and child component. The card should render the user it receives, not placeholder labels.",
    tasks: [
      "Use the user's name as the displayName.",
      "Use the user's role as the roleLabel.",
      "Show Active and success tone when active is true.",
    ],
    answerSyntax: `return {
  displayName: user.name,
  roleLabel: user.role,
  statusLabel: user.active ? "Active" : "Inactive",
  tone: user.active ? "success" : "muted",
};`,
    successText: "The card is successful when Riley is rendered with the active developer details.",
    render: () => (
      <div className="grid gap-4 lg:grid-cols-2">
        <lesson16.UserCard user={practiceUser} />
        <JsonBlock
          label="Expected details"
          value={{
            displayName: "Riley Chen",
            roleLabel: "Frontend developer",
            statusLabel: "Active",
            tone: "success",
          }}
        />
      </div>
    ),
    isComplete: () =>
      JSON.stringify(lesson16.createUserCardDetails(practiceUser)) ===
      JSON.stringify({
        displayName: "Riley Chen",
        roleLabel: "Frontend developer",
        statusLabel: "Active",
        tone: "success",
      }),
  },
  {
    number: 17,
    slug: "query-builder",
    title: "Query Builder",
    file: "src/exercises/lesson-17-query-builder.ts",
    goal: "Practice composing dynamic URL query string variables while cleaning out empty inputs.",
    explanation:
      "Navigation helpers require serializing a clean set of parameters. Skip empty strings, null, and undefined keys.",
    tasks: [
      "Map keys and values into URLSearchParams.",
      'Skip any key where the value is null, undefined, or empty string "".',
      "Return the string representation of parameters.",
    ],
    answerSyntax: `const params = new URLSearchParams();
for (const [key, val] of Object.entries(filters)) {
  if (val !== null && val !== undefined && val !== "") {
    params.set(key, val);
  }
}
return params.toString();`,
    successText: "The query builder is successful when empty values are cleaned out from the output.",
    render: () => (
      <div className="grid gap-4 lg:grid-cols-2">
        <JsonBlock label="Input filters" value={{ category: "shoes", size: "", sort: null, search: "nike" }} />
        <ResultGrid
          rows={[
            {
              label: "Output query",
              value: lesson17.buildQueryString({ category: "shoes", size: "", sort: null, search: "nike" }),
            },
            { label: "Expected query", value: "category=shoes&search=nike" },
          ]}
        />
      </div>
    ),
    isComplete: () =>
      lesson17.buildQueryString({ category: "shoes", size: "", sort: null, search: "nike" }) ===
      "category=shoes&search=nike",
  },
  {
    number: 18,
    slug: "search-params",
    title: "Search Params",
    file: "src/exercises/lesson-18-search-params.ts",
    goal: "Practice reading query string values with a reliable fallback.",
    explanation:
      "App Router pages often receive searchParams. This helper uses URLSearchParams so the behavior is easy to test locally.",
    tasks: [
      'Read the "q" parameter.',
      'Return "all" when q is missing or empty.',
      "Return the raw search term when q has a value.",
    ],
    answerSyntax: 'return searchParams.get("q") || "all";',
    successText: "The search helper is successful when q=nextjs resolves to nextjs and missing q resolves to all.",
    render: () => (
      <ResultGrid
        rows={[
          {
            label: "?q=nextjs",
            value: lesson18.getSearchTerm(new URLSearchParams("q=nextjs")),
          },
          {
            label: "missing q",
            value: lesson18.getSearchTerm(new URLSearchParams("page=2")),
          },
          { label: "Expected values", value: "nextjs, all" },
        ]}
      />
    ),
    isComplete: () =>
      lesson18.getSearchTerm(new URLSearchParams("q=nextjs")) === "nextjs" &&
      lesson18.getSearchTerm(new URLSearchParams("page=2")) === "all" &&
      lesson18.getSearchTerm(new URLSearchParams("q=")) === "all",
  },
  {
    number: 19,
    slug: "pagination-helper",
    title: "Pagination Helper",
    file: "src/exercises/lesson-19-pagination.ts",
    goal: "Practice calculating limit and offset values for database pagination queries.",
    explanation:
      "Data lists require page-specific slice limits. Calculate the offset using numeric fallback checks.",
    tasks: [
      "Parse page and limit params, defaulting page to 1 and limit to 10 if missing or invalid.",
      "Calculate offset as (page - 1) * limit.",
      "Return { limit, offset } object.",
    ],
    answerSyntax: `let page = parseInt(params.get("page") || "1", 10);
if (isNaN(page) || page < 1) page = 1;
let limit = parseInt(params.get("limit") || "10", 10);
if (isNaN(limit) || limit < 1) limit = 10;
return { limit, offset: (page - 1) * limit };`,
    successText: "The pagination helper is successful when values parse cleanly and offset is correct.",
    render: () => (
      <div className="grid gap-4 lg:grid-cols-2">
        <JsonBlock label="Input ?page=3&limit=5" value={lesson19.getPagination(new URLSearchParams("page=3&limit=5"))} />
        <JsonBlock label="Expected ?page=3&limit=5" value={{ limit: 5, offset: 10 }} />
      </div>
    ),
    isComplete: () =>
      JSON.stringify(lesson19.getPagination(new URLSearchParams("page=3&limit=5"))) ===
        JSON.stringify({ limit: 5, offset: 10 }) &&
      JSON.stringify(lesson19.getPagination(new URLSearchParams("page=invalid&limit=-5"))) ===
        JSON.stringify({ limit: 10, offset: 0 }),
  },
  {
    number: 20,
    slug: "json-parser",
    title: "Safe JSON Parser",
    file: "src/exercises/lesson-20-json-parser.ts",
    goal: "Practice parsing JSON strings safely with a try-catch fallback strategy.",
    explanation:
      "Invalid client payload configurations can throw runtime exceptions. Wrap JSON.parse to prevent application crashes.",
    tasks: [
      "Parse the provided jsonString parameter.",
      "Catch any errors and return the fallback value instead of throwing.",
    ],
    answerSyntax: `try {
  return JSON.parse(jsonString) as T;
} catch {
  return fallback;
}`,
    successText: "The safe parser is successful when bad JSON inputs return the fallback correctly.",
    render: () => (
      <ResultGrid
        rows={[
          { label: 'Valid JSON string ({"ok":true})', value: JSON.stringify(lesson20.parseJsonSafe('{"ok":true}', { ok: false })) },
          { label: "Corrupted string (bad-data)", value: JSON.stringify(lesson20.parseJsonSafe("bad-data", { ok: false })) },
          { label: "Expected outputs", value: '{"ok":true}, {"ok":false}' },
        ]}
      />
    ),
    isComplete: () =>
      lesson20.parseJsonSafe('{"ok":true}', { ok: false }).ok === true &&
      lesson20.parseJsonSafe("bad-data", { ok: false }).ok === false,
  },
  {
    number: 21,
    slug: "conditional-empty-state",
    title: "Conditional Empty State",
    file: "src/exercises/lesson-21-empty-state.tsx",
    goal: "Practice choosing between an empty state and a populated list.",
    explanation:
      "Conditional rendering should match the data. Empty arrays need a helpful message, while populated arrays should render their items.",
    tasks: [
      "Return kind empty only when the resources array is empty.",
      "Return kind items when resources are present.",
      "Preserve the provided resources in the items state.",
    ],
    answerSyntax: `if (resources.length === 0) {
  return { kind: "empty", message: "No resources yet.", items: [] };
}

return { kind: "items", message: "Resources ready.", items: resources };`,
    successText: "The resource list is successful when empty and populated inputs both render correctly.",
    render: () => (
      <div className="grid gap-4 lg:grid-cols-2">
        <lesson21.ResourceList resources={resources} />
        <lesson21.ResourceList resources={[]} />
      </div>
    ),
    isComplete: () => {
      const populated = lesson21.getResourceListState(resources);
      const empty = lesson21.getResourceListState([]);

      return (
        populated.kind === "items" &&
        populated.items.length === resources.length &&
        empty.kind === "empty" &&
        empty.items.length === 0
      );
    },
  },
  {
    number: 22,
    slug: "form-payload",
    title: "Form Payload",
    file: "src/exercises/lesson-22-form-data.ts",
    goal: "Practice normalizing form-like values before using them in an action.",
    explanation:
      "Server actions often receive raw form values. Normalize the fields before persisting or returning them.",
    tasks: [
      "Trim whitespace from the email.",
      "Lowercase the email.",
      "Convert updates: on into updates: true.",
    ],
    answerSyntax: `return {
  email: fields.email.trim().toLowerCase(),
  plan: fields.plan,
  updates: fields.updates === "on",
};`,
    successText: "The payload is successful when the email and checkbox value are normalized.",
    render: () => (
      <div className="grid gap-4 lg:grid-cols-2">
        <JsonBlock
          label="Current payload"
          value={lesson22.buildSignupPayload({
            email: " Ada@Example.COM ",
            plan: "pro",
            updates: "on",
          })}
        />
        <JsonBlock
          label="Expected payload"
          value={{
            email: "ada@example.com",
            plan: "pro",
            updates: true,
          }}
        />
      </div>
    ),
    isComplete: () =>
      JSON.stringify(
        lesson22.buildSignupPayload({
          email: " Ada@Example.COM ",
          plan: "pro",
          updates: "on",
        }),
      ) ===
      JSON.stringify({
        email: "ada@example.com",
        plan: "pro",
        updates: true,
      }),
  },
  {
    number: 23,
    slug: "form-validation",
    title: "Form Validation",
    file: "src/exercises/lesson-23-form-validation.ts",
    goal: "Practice validation checks on server action inputs before submitting data.",
    explanation:
      "Inspect signup arguments manually to return informative field-level errors.",
    tasks: [
      'If email does not contain "@", set error key "email" to "Invalid email address".',
      'If password length is less than 6, set error key "password" to "Password must be at least 6 characters".',
      "Return { isValid, errors } object status.",
    ],
    answerSyntax: `const errors: { email?: string; password?: string } = {};
if (!fields.email || !fields.email.includes("@")) {
  errors.email = "Invalid email address";
}
if (!fields.password || fields.password.length < 6) {
  errors.password = "Password must be at least 6 characters";
}
return {
  isValid: Object.keys(errors).length === 0,
  errors,
};`,
    successText: "The validator is successful when both valid and invalid profiles resolve properly.",
    render: () => (
      <div className="grid gap-4 lg:grid-cols-2">
        <JsonBlock label="Validation: bad inputs" value={lesson23.validateForm({ email: "bad", password: "123" })} />
        <JsonBlock label="Validation: good inputs" value={lesson23.validateForm({ email: "r@b.com", password: "password" })} />
      </div>
    ),
    isComplete: () =>
      lesson23.validateForm({ email: "bad", password: "123" }).isValid === false &&
      lesson23.validateForm({ email: "bad", password: "123" }).errors.email === "Invalid email address" &&
      lesson23.validateForm({ email: "r@b.com", password: "password" }).isValid === true,
  },
  {
    number: 24,
    slug: "suspense-fallback",
    title: "Suspense Fallback",
    file: "src/exercises/lesson-24-suspense-card.tsx",
    goal: "Practice making a fallback component match the shape of loading content.",
    explanation:
      "Suspense fallbacks feel better when their skeleton shape resembles the content that will replace them.",
    tasks: [
      'Set fallbackLabel to "Preparing preview".',
      "Set fallbackRows to 3.",
      "Keep the FallbackCard markup unchanged.",
    ],
    answerSyntax: `export const fallbackLabel: string = "Preparing preview";
export const fallbackRows: number = 3;`,
    successText: "The fallback is successful when it shows the expected label and three skeleton rows.",
    render: () => (
      <div className="grid gap-4 lg:grid-cols-2">
        <lesson24.FallbackCard />
        <ResultGrid
          rows={[
            { label: "Expected label", value: "Preparing preview" },
            { label: "Expected rows", value: 3 },
          ]}
        />
      </div>
    ),
    isComplete: () =>
      lesson24.fallbackLabel === "Preparing preview" &&
      lesson24.fallbackRows === 3,
  },
  {
    number: 25,
    slug: "cache-tags",
    title: "Cache Tag Settings",
    file: "src/exercises/lesson-25-cache-tags.ts",
    goal: "Practice attaching next.revalidate and next.tags to request fetch options.",
    explanation:
      "Next.js data fetches can define custom invalidation tags and TTL values. Configure these headers correctly.",
    tasks: [
      "Set next.revalidate to 300.",
      'Set next.tags to ["products", "catalog"].',
      "Preserve existing headers.",
    ],
    answerSyntax: `return {
  headers: { "Content-Type": "application/json" },
  next: {
    revalidate: 300,
    tags: ["products", "catalog"],
  },
};`,
    successText: "The cache tags configuration is successful when headers and tags match expected parameters.",
    render: () => (
      <div className="grid gap-4 lg:grid-cols-2">
        <JsonBlock label="Fetch options" value={lesson25.getFetchOptions()} />
        <JsonBlock label="Expected" value={{ headers: { "Content-Type": "application/json" }, next: { revalidate: 300, tags: ["products", "catalog"] } }} />
      </div>
    ),
    isComplete: () =>
      JSON.stringify(lesson25.getFetchOptions()) ===
      JSON.stringify({
        headers: { "Content-Type": "application/json" },
        next: {
          revalidate: 300,
          tags: ["products", "catalog"],
        },
      }),
  },
  {
    number: 26,
    slug: "opengraph-metadata",
    title: "OpenGraph Config",
    file: "src/exercises/lesson-26-opengraph-meta.ts",
    goal: "Practice configuring openGraph sharing tags for search indexing and social banners.",
    explanation:
      "Construct nested dynamic title, description, and images metadata options.",
    tasks: [
      'Set openGraph.title to "Next Practice Exercises".',
      'Set openGraph.description to "Master Next.js App Router by code debugging.".',
      'Set openGraph.images to contain [{ url: "/og-banner.png" }].',
    ],
    answerSyntax: `export const ogMetadataConfig = {
  openGraph: {
    title: "Next Practice Exercises",
    description: "Master Next.js App Router by code debugging.",
    images: [
      {
        url: "/og-banner.png",
      },
    ],
  },
};`,
    successText: "The og sharing metadata is successful when title, description, and banners are exported.",
    render: () => (
      <div className="grid gap-4 lg:grid-cols-2">
        <JsonBlock label="Current config" value={lesson26.ogMetadataConfig} />
        <JsonBlock label="Expected" value={{ openGraph: { title: "Next Practice Exercises", description: "Master Next.js App Router by code debugging.", images: [{ url: "/og-banner.png" }] } }} />
      </div>
    ),
    isComplete: () =>
      JSON.stringify(lesson26.ogMetadataConfig.openGraph) ===
      JSON.stringify({
        title: "Next Practice Exercises",
        description: "Master Next.js App Router by code debugging.",
        images: [{ url: "/og-banner.png" }],
      }),
  },
  {
    number: 27,
    slug: "static-params",
    title: "Static Params",
    file: "src/exercises/lesson-27-static-params.ts",
    goal: "Practice returning the object shape expected by generateStaticParams.",
    explanation:
      "For /lessons/[slug], generateStaticParams should return an array of objects with a slug property.",
    tasks: [
      "Map every input slug to an object.",
      "Use the property name slug.",
      "Preserve the input order.",
    ],
    answerSyntax: "return slugs.map((slug) => ({ slug }));",
    successText: "The params are successful when each slug becomes a { slug } object.",
    render: () => (
      <div className="grid gap-4 lg:grid-cols-2">
        <JsonBlock
          label="Current params"
          value={lesson27.generateLessonParams(["routing", "metadata"])}
        />
        <JsonBlock
          label="Expected params"
          value={[{ slug: "routing" }, { slug: "metadata" }]}
        />
      </div>
    ),
    isComplete: () =>
      JSON.stringify(lesson27.generateLessonParams(["routing", "metadata"])) ===
      JSON.stringify([{ slug: "routing" }, { slug: "metadata" }]),
  },
  {
    number: 28,
    slug: "role-redirection",
    title: "Role Redirection",
    file: "src/exercises/lesson-28-role-redirect.ts",
    goal: "Practice deciding destination routes in Next.js Server Components based on user attributes.",
    explanation:
      "Handle logical routing to dashboard, admin paths, or onboarding views depending on status flag records.",
    tasks: [
      'Return "/admin/dashboard" if user.isAdmin is true.',
      'Return "/onboarding" if user.isOnboarded is false (and they are not admin).',
      'Otherwise return "/dashboard".',
    ],
    answerSyntax: `if (user.isAdmin) {
  return "/admin/dashboard";
}
if (!user.isOnboarded) {
  return "/onboarding";
}
return "/dashboard";`,
    successText: "The redirect rules are successful when permissions map users to the correct views.",
    render: () => (
      <ResultGrid
        rows={[
          { label: "Admin redirect", value: lesson28.getRedirectDestination({ isAdmin: true, isOnboarded: false }) },
          { label: "Onboarding redirect", value: lesson28.getRedirectDestination({ isAdmin: false, isOnboarded: false }) },
          { label: "Standard redirect", value: lesson28.getRedirectDestination({ isAdmin: false, isOnboarded: true }) },
          { label: "Expected routes", value: '"/admin/dashboard", "/onboarding", "/dashboard"' },
        ]}
      />
    ),
    isComplete: () =>
      lesson28.getRedirectDestination({ isAdmin: true, isOnboarded: false }) === "/admin/dashboard" &&
      lesson28.getRedirectDestination({ isAdmin: false, isOnboarded: false }) === "/onboarding" &&
      lesson28.getRedirectDestination({ isAdmin: false, isOnboarded: true }) === "/dashboard",
  },
  {
    number: 29,
    slug: "catch-all-routes",
    title: "Catch-All Routes",
    file: "src/exercises/lesson-29-catch-all.ts",
    goal: "Practice parsing catch-all slug path segment arrays into breadcrumb maps.",
    explanation:
      "Catch-all folders yield string arrays in params. Accumulate folder links to generate correct navigation structures.",
    tasks: [
      "Generate breadcrumb array items with capitalized segment names.",
      "Assemble the cumulative prefix paths for href keys.",
    ],
    answerSyntax: `let currentPath = "";
return segments.map((seg) => {
  currentPath += \`/\${seg}\`;
  return {
    name: seg.charAt(0).toUpperCase() + seg.slice(1),
    href: currentPath,
  };
});`,
    successText: "The catch-all breadcrumb logic is successful when URL strings map folder traces.",
    render: () => (
      <div className="grid gap-4 lg:grid-cols-2">
        <JsonBlock label="Segments ['docs', 'routing']" value={lesson29.parseBreadcrumbs(["docs", "routing"])} />
        <JsonBlock label="Expected" value={[{ name: "Docs", href: "/docs" }, { name: "Routing", href: "/docs/routing" }]} />
      </div>
    ),
    isComplete: () =>
      JSON.stringify(lesson29.parseBreadcrumbs(["docs", "routing"])) ===
      JSON.stringify([
        { name: "Docs", href: "/docs" },
        { name: "Routing", href: "/docs/routing" },
      ]),
  },
  {
    number: 30,
    slug: "route-response",
    title: "Route Response",
    file: "src/exercises/lesson-30-route-response.ts",
    goal: "Practice returning a route-handler-style JSON response object.",
    explanation:
      "Route handlers return HTTP responses. This exercise keeps the behavior as a plain object so the lesson can evaluate it in the browser.",
    tasks: [
      "Return status 200.",
      "Set body.ok to true.",
      'Set body.source to "route handler".',
    ],
    answerSyntax: `return {
  status: 200,
  body: {
    ok: true,
    source: "route handler",
  },
};`,
    successText: "The response is successful when it matches the expected 200 JSON shape.",
    render: () => (
      <div className="grid gap-4 lg:grid-cols-2">
        <JsonBlock label="Current response" value={lesson30.createPracticeResponse()} />
        <JsonBlock
          label="Expected response"
          value={{
            status: 200,
            body: {
              ok: true,
              source: "route handler",
            },
          }}
        />
      </div>
    ),
    isComplete: () =>
      JSON.stringify(lesson30.createPracticeResponse()) ===
      JSON.stringify({
        status: 200,
        body: {
          ok: true,
          source: "route handler",
        },
      }),
  },
  {
    number: 31,
    slug: "cors-headers",
    title: "CORS Headers",
    file: "src/exercises/lesson-31-cors-headers.ts",
    goal: "Practice attaching cross-origin resource sharing headers to route response payloads.",
    explanation:
      "External clients require explicit permissions. Configure Access-Control headers correctly.",
    tasks: [
      'Set headers["Access-Control-Allow-Origin"] to "*".',
      'Set headers["Access-Control-Allow-Methods"] to "GET, POST, OPTIONS".',
      "Return the status 200 response.",
    ],
    answerSyntax: `return {
  status: 200,
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
  },
};`,
    successText: "The CORS config is successful when Allow-Origin headers are attached.",
    render: () => (
      <div className="grid gap-4 lg:grid-cols-2">
        <JsonBlock label="Cors response headers" value={lesson31.createCorsResponse().headers} />
        <JsonBlock label="Expected headers" value={{ "Access-Control-Allow-Origin": "*", "Access-Control-Allow-Methods": "GET, POST, OPTIONS" }} />
      </div>
    ),
    isComplete: () =>
      JSON.stringify(lesson31.createCorsResponse().headers) ===
      JSON.stringify({
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
      }),
  },
  {
    number: 32,
    slug: "request-cookies",
    title: "Request Cookies",
    file: "src/exercises/lesson-32-cookies.ts",
    goal: "Practice parsing individual cookie keys from request cookie headers.",
    explanation:
      "Next.js requests contain cookie header lists. Extract values matching specific keys safely.",
    tasks: [
      'Split the cookieHeader on ";" characters.',
      "Locate the value for the matching cookie name, returning null if missing.",
    ],
    answerSyntax: `if (!cookieHeader) return null;
const cookies = cookieHeader.split(";");
for (const cookie of cookies) {
  const [key, val] = cookie.trim().split("=");
  if (key === name) {
    return val || null;
  }
}
return null;`,
    successText: "The parser is successful when session and missing tokens are resolved.",
    render: () => (
      <ResultGrid
        rows={[
          { label: 'Find session in "theme=dark; session=abc"', value: lesson32.getCookieValue("theme=dark; session=abc", "session") },
          { label: 'Find missing user', value: String(lesson32.getCookieValue("theme=dark", "user")) },
          { label: "Expected outputs", value: '"abc", null' },
        ]}
      />
    ),
    isComplete: () =>
      lesson32.getCookieValue("theme=dark; session=abc", "session") === "abc" &&
      lesson32.getCookieValue("theme=dark", "user") === null,
  },
  {
    number: 33,
    slug: "custom-headers",
    title: "Custom Headers",
    file: "src/exercises/lesson-33-custom-headers.ts",
    goal: "Practice modifying outgoing response headers based on request headers.",
    explanation:
      "Examine custom client tracking headers and respond with specific permissions.",
    tasks: [
      'Read requestHeaders["x-user-role"].',
      'If it is "admin", set output header "x-admin-route" to "allowed".',
      'Otherwise, set output header "x-admin-route" to "denied".',
    ],
    answerSyntax: `const role = requestHeaders["x-user-role"];
const outHeaders: Record<string, string> = {};
if (role === "admin") {
  outHeaders["x-admin-route"] = "allowed";
} else {
  outHeaders["x-admin-route"] = "denied";
}
return outHeaders;`,
    successText: "The headers mapping is successful when output headers confirm role status.",
    render: () => (
      <div className="grid gap-4 lg:grid-cols-2">
        <JsonBlock label="Role: admin output" value={lesson33.setTrackingHeaders({ "x-user-role": "admin" })} />
        <JsonBlock label="Role: visitor output" value={lesson33.setTrackingHeaders({ "x-user-role": "visitor" })} />
      </div>
    ),
    isComplete: () =>
      lesson33.setTrackingHeaders({ "x-user-role": "admin" })["x-admin-route"] === "allowed" &&
      lesson33.setTrackingHeaders({ "x-user-role": "visitor" })["x-admin-route"] === "denied",
  },
  {
    number: 34,
    slug: "server-action-result",
    title: "Server Action Result",
    file: "src/exercises/lesson-34-server-action.ts",
    goal: "Practice returning the next state that a server action could produce.",
    explanation:
      "A server action often validates form fields and returns updated data. This helper should append the submitted todo without mutating the existing list.",
    tasks: [
      "Append a todo using the submitted label.",
      "Use todo-3 as the id for this sample input.",
      "Set done to false on the new todo.",
    ],
    answerSyntax: `return [
  ...todos,
  {
    id: \`todo-\${todos.length + 1}\`,
    label: fields.label,
    done: false,
  },
];`,
    successText: "The todo action is successful when a third todo is appended with the submitted label.",
    render: () => {
      const result = lesson34.addTodoFromForm(todos, {
        label: "Practice server actions",
      });

      return (
        <div className="grid gap-4 lg:grid-cols-2">
          <JsonBlock label="Current todos" value={result} />
          <JsonBlock
            label="Expected final todo"
            value={{
              id: "todo-3",
              label: "Practice server actions",
              done: false,
            }}
          />
        </div>
      );
    },
    isComplete: () => {
      const result = lesson34.addTodoFromForm(todos, {
        label: "Practice server actions",
      });
      const last = result.at(-1);

      return (
        result.length === 3 &&
        last?.id === "todo-3" &&
        last.label === "Practice server actions" &&
        last.done === false &&
        todos.length === 2
      );
    },
  },
  {
    number: 35,
    slug: "action-errors",
    title: "Action Errors",
    file: "src/exercises/lesson-35-action-errors.ts",
    goal: "Practice standardizing try-catch exception handling within Next.js Server Actions.",
    explanation:
      "Ensure that errors thrown inside actions return structured failure messages rather than crashing.",
    tasks: [
      "Wrap the action call in a try-catch block.",
      "On success, return { success: true, data: result }.",
      "On error, return { success: false, error: error.message }.",
    ],
    answerSyntax: `try {
  return { success: true, data: action() };
} catch (err: any) {
  return { success: false, error: err.message || "Unknown error occurred" };
}`,
    successText: "The server action wrapper is successful when failure returns standard error status keys.",
    render: () => (
      <div className="grid gap-4 lg:grid-cols-2">
        <JsonBlock label="Successful Action" value={lesson35.runServerActionSafe(() => "ok")} />
        <JsonBlock label="Failing Action" value={lesson35.runServerActionSafe(() => { throw new Error("Action failed"); })} />
      </div>
    ),
    isComplete: () =>
      lesson35.runServerActionSafe(() => "ok").success === true &&
      lesson35.runServerActionSafe(() => { throw new Error("Action failed"); }).success === false,
  },
  {
    number: 36,
    slug: "optimistic-reducer",
    title: "Optimistic Reducer",
    file: "src/exercises/lesson-36-optimistic-reducer.ts",
    goal: "Practice returning temporary optimistic UI state.",
    explanation:
      "Optimistic UI shows the user's pending change immediately. This reducer-like helper should append a pending item with a predictable id.",
    tasks: [
      "Append a new todo instead of replacing the list.",
      'Use id "optimistic-draft-metadata" for label Draft Metadata.',
      "Set pending to true on the optimistic item.",
    ],
    answerSyntax: `const id = \`optimistic-\${label.toLowerCase().replaceAll(" ", "-")}\`;

return [...todos, { id, label, pending: true }];`,
    successText: "The optimistic state is successful when a pending Draft Metadata item is appended.",
    render: () => {
      const result = lesson36.addOptimisticTodo(
        optimisticTodos,
        "Draft Metadata",
      );

      return (
        <div className="grid gap-4 lg:grid-cols-2">
          <JsonBlock label="Current optimistic todos" value={result} />
          <JsonBlock
            label="Expected appended item"
            value={{
              id: "optimistic-draft-metadata",
              label: "Draft Metadata",
              pending: true,
            }}
          />
        </div>
      );
    },
    isComplete: () => {
      const result = lesson36.addOptimisticTodo(
        optimisticTodos,
        "Draft Metadata",
      );
      const last = result.at(-1);

      return (
        result.length === 2 &&
        last?.id === "optimistic-draft-metadata" &&
        last.label === "Draft Metadata" &&
        last.pending === true &&
        optimisticTodos.length === 1
      );
    },
  },
  {
    number: 37,
    slug: "middleware-paths",
    title: "Middleware Paths",
    file: "src/exercises/lesson-37-middleware-paths.ts",
    goal: "Practice matching specific route paths inside Next.js custom middleware.",
    explanation:
      "Improve latency by skipping middleware checks on static image, favicon, and API route URLs.",
    tasks: [
      'Return false if the pathname starts with "/_next" or "/api".',
      'Return false if it ends with ".png" or ".ico".',
      "Otherwise return true.",
    ],
    answerSyntax: `if (
  pathname.startsWith("/_next") ||
  pathname.startsWith("/api") ||
  pathname.endsWith(".png") ||
  pathname.endsWith(".ico")
) {
  return false;
}
return true;`,
    successText: "The middleware filter matches the bypass tags successfully.",
    render: () => (
      <ResultGrid
        rows={[
          { label: "Asset link (/_next/static)", value: String(lesson37.shouldRunMiddleware("/_next/static")) },
          { label: "Dashboard page (/dashboard)", value: String(lesson37.shouldRunMiddleware("/dashboard")) },
          { label: "Expected", value: "false, true" },
        ]}
      />
    ),
    isComplete: () =>
      lesson37.shouldRunMiddleware("/_next/static") === false &&
      lesson37.shouldRunMiddleware("/api/users") === false &&
      lesson37.shouldRunMiddleware("/dashboard") === true,
  },
  {
    number: 38,
    slug: "classname-merger",
    title: "ClassName Merger",
    file: "src/exercises/lesson-38-clsx-merger.ts",
    goal: "Practice writing a basic conditional classes merge utility.",
    explanation:
      "Filter out conditional falsy statements to build class chains cleanly (like clsx).",
    tasks: [
      'Filter out all falsy values (like false, null, undefined, "").',
      "Join the remaining strings by a space.",
    ],
    answerSyntax: `return classes
  .filter((c): c is string => typeof c === "string" && c !== "")
  .join(" ");`,
    successText: "The classes merge successfully, stripping falsy elements.",
    render: () => (
      <ResultGrid
        rows={[
          { label: 'Inputs ("btn", false, "btn-primary", null)', value: lesson38.mergeClasses("btn", false, "btn-primary", null) },
          { label: "Expected", value: '"btn btn-primary"' },
        ]}
      />
    ),
    isComplete: () =>
      lesson38.mergeClasses("btn", false, "btn-primary", null, "") === "btn btn-primary",
  },
  {
    number: 39,
    slug: "api-error-mapping",
    title: "Error Mapping",
    file: "src/exercises/lesson-39-error-mapper.ts",
    goal: "Practice standardizing internal database exceptions into user-facing API error maps.",
    explanation:
      "Filter details from database connection errors. Only display generic internal errors for safety.",
    tasks: [
      'If error.message includes "database" or "conn" (case-insensitive), return code: "INTERNAL_ERROR".',
      'Otherwise return code: "VALIDATION_ERROR" with original message.',
    ],
    answerSyntax: `const msg = error.message.toLowerCase();
if (msg.includes("database") || msg.includes("conn")) {
  return {
    code: "INTERNAL_ERROR",
    message: "An unexpected error occurred",
  };
}
return {
  code: "VALIDATION_ERROR",
  message: error.message,
};`,
    successText: "The error mapper is successful when sensitive database logs are successfully hidden.",
    render: () => (
      <div className="grid gap-4 lg:grid-cols-2">
        <JsonBlock label="Database error input" value={lesson39.mapApiError(new Error("Database connection timeout"))} />
        <JsonBlock label="User error input" value={lesson39.mapApiError(new Error("Email already registered"))} />
      </div>
    ),
    isComplete: () =>
      lesson39.mapApiError(new Error("Database timeout")).code === "INTERNAL_ERROR" &&
      lesson39.mapApiError(new Error("Invalid age")).code === "VALIDATION_ERROR",
  },
  {
    number: 40,
    slug: "jwt-decoder",
    title: "JWT Payload Decoder",
    file: "src/exercises/lesson-40-jwt-decoder.ts",
    goal: "Practice decoding dynamic JSON Web Token user payloads.",
    explanation:
      "Decode the base64-encoded middle segment of a JWT string and extract the user's properties.",
    tasks: [
      'Split the token on "." to extract the middle payload segment.',
      "Decode the payload from base64 string to UTF-8.",
      "Parse and return object { sub, name } if present, otherwise null.",
    ],
    answerSyntax: `try {
  const parts = token.split(".");
  if (parts.length !== 3) return null;
  const base64 = parts[1].replace(/-/g, "+").replace(/_/g, "/");
  const decoded = Buffer.from(base64, "base64").toString("utf-8");
  const obj = JSON.parse(decoded);
  if (typeof obj.sub === "string" && typeof obj.name === "string") {
    return { sub: obj.sub, name: obj.name };
  }
  return null;
} catch {
  return null;
}`,
    successText: "The JWT decoder is successful when payload subjects map correctly.",
    render: () => (
      <ResultGrid
        rows={[
          { label: "Valid Token", value: JSON.stringify(lesson40.decodeJwtPayload("header.eyJzdWIiOiIxMjM0NTYiLCJuYW1lIjoiQWxpY2UifQ.signature")) },
          { label: "Invalid Token", value: String(lesson40.decodeJwtPayload("bad-token")) },
          { label: "Expected", value: '{"sub":"123456","name":"Alice"}, null' },
        ]}
      />
    ),
    isComplete: () =>
      JSON.stringify(lesson40.decodeJwtPayload("header.eyJzdWIiOiIxMjM0NTYiLCJuYW1lIjoiQWxpY2UifQ.signature")) ===
        JSON.stringify({ sub: "123456", name: "Alice" }) &&
      lesson40.decodeJwtPayload("bad") === null,
  },
];

export function getLessonBySlug(slug: string) {
  return lessons.find((lesson) => lesson.slug === slug);
}

export function getLessonCompletion(lesson: Lesson) {
  try {
    return lesson.isComplete();
  } catch {
    return false;
  }
}

export function getLessonSyntaxExample(lesson: Lesson) {
  return syntaxExamples[lesson.number] ?? "No syntax example is available.";
}

function sameStrings(actual: string[], expected: string[]) {
  return JSON.stringify(actual) === JSON.stringify(expected);
}

function ResultGrid({ rows }: { rows: { label: string; value: ReactNode }[] }) {
  return (
    <dl className="grid gap-3 md:grid-cols-2">
      {rows.map((row) => (
        <div
          key={row.label}
          className="rounded-md border border-slate-200 bg-slate-50 p-4"
        >
          <dt className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-500">
            {row.label}
          </dt>
          <dd className="mt-2 break-words font-mono text-sm text-slate-900">
            {row.value}
          </dd>
        </div>
      ))}
    </dl>
  );
}

function PreviewList({ label, items }: { label: string; items: string[] }) {
  return (
    <div className="rounded-md border border-slate-200 bg-slate-50 p-4">
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-500">
        {label}
      </p>
      <ul className="mt-3 grid gap-2">
        {items.map((item) => (
          <li
            key={item}
            className="rounded-md border border-slate-200 bg-white px-3 py-2 text-sm text-slate-700"
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

function JsonBlock({
  label,
  value,
}: {
  label: string;
  value: PrimitiveRecord | PrimitiveRecord[] | unknown;
}) {
  return (
    <div className="rounded-md border border-slate-200 bg-slate-950 p-4 text-slate-50">
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-teal-200">
        {label}
      </p>
      <pre className="mt-3 overflow-x-auto text-sm leading-6">
        <code>{JSON.stringify(value, null, 2)}</code>
      </pre>
    </div>
  );
}
