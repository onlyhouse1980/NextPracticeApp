import type { ReactNode } from "react";
import * as lesson01 from "@/exercises/lesson-01-route-title";
import * as lesson02 from "@/exercises/lesson-02-home-copy";
import * as lesson03 from "@/exercises/lesson-03-navigation";
import * as lesson04 from "@/exercises/lesson-04-dynamic-params";
import * as lesson05 from "@/exercises/lesson-05-metadata";
import * as lesson06 from "@/exercises/lesson-06-posts";
import * as lesson07 from "@/exercises/lesson-07-user-card";
import * as lesson08 from "@/exercises/lesson-08-empty-state";
import * as lesson09 from "@/exercises/lesson-09-feature-list";
import * as lesson10 from "@/exercises/lesson-10-loading-state";
import * as lesson11 from "@/exercises/lesson-11-cache-policy";
import * as lesson12 from "@/exercises/lesson-12-search-params";
import * as lesson13 from "@/exercises/lesson-13-form-data";
import * as lesson14 from "@/exercises/lesson-14-status-class";
import * as lesson15 from "@/exercises/lesson-15-image-props";
import * as lesson16 from "@/exercises/lesson-16-route-response";
import * as lesson17 from "@/exercises/lesson-17-server-action";
import * as lesson18 from "@/exercises/lesson-18-optimistic-reducer";
import * as lesson19 from "@/exercises/lesson-19-suspense-card";
import * as lesson20 from "@/exercises/lesson-20-static-params";

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
    "Open a lesson, edit the referenced file, and return to the browser to verify the result.",
  cta: "Start Lesson 1",
};

const expectedNavigation = [
  { label: "Home", href: "/" },
  { label: "Lessons", href: "/lessons/route-slug-titles" },
  { label: "Static Params", href: "/lessons/static-params" },
];

const posts: lesson06.PracticePost[] = [
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

const practiceUser: lesson07.PracticeUser = {
  name: "Riley Chen",
  role: "Frontend developer",
  active: true,
};

const resources: lesson08.Resource[] = [
  { label: "Next.js App Router docs", href: "https://nextjs.org/docs/app" },
  { label: "React Server Components", href: "https://react.dev/reference/rsc" },
];

const features: lesson09.Feature[] = [
  { title: "Server Components", enabled: true },
  { title: "Draft Mode", enabled: false },
  { title: "Route Handlers", enabled: true },
  { title: "Metadata API", enabled: true },
];

const expectedStatusStyles: Record<lesson14.PracticeStatus, string> = {
  success: "border-emerald-200 bg-emerald-50 text-emerald-800",
  warning: "border-amber-200 bg-amber-50 text-amber-800",
  error: "border-rose-200 bg-rose-50 text-rose-800",
};

const todos: lesson17.Todo[] = [
  { id: "todo-1", label: "Read the lesson", done: true },
  { id: "todo-2", label: "Open the exercise file", done: false },
];

const optimisticTodos: lesson18.OptimisticTodo[] = [
  { id: "todo-existing", label: "Review route params", pending: false },
];

const syntaxExamples: Record<number, string> = {
  1: `const title = "blog-post"
  .split("-")
  .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
  .join(" ");`,
  2: `const cardCopy = {
  headline: "Practice title",
  summary: "Short supporting sentence.",
  cta: "Start",
};`,
  3: `return [
  { label: "Dashboard", href: "/dashboard" },
  { label: "Settings", href: "/settings" },
];`,
  4: "return `/products/${slug}`;",
  5: "return `${sectionTitle} | App Name`;",
  6: `return items
  .filter((item) => item.visible)
  .sort((a, b) => b.createdAt.localeCompare(a.createdAt));`,
  7: `return {
  displayName: profile.name,
  roleLabel: profile.title,
  statusLabel: profile.enabled ? "Enabled" : "Disabled",
  tone: profile.enabled ? "success" : "muted",
};`,
  8: `if (items.length === 0) {
  return { kind: "empty", message: "Nothing to show.", items: [] };
}

return { kind: "items", message: "Items ready.", items };`,
  9: `return options
  .filter((option) => option.selected)
  .map((option) => option.label);`,
  10: "return `Saving ${resourceName}...`;",
  11: `export const revalidate: number = 30;
export const dynamic: string = "force-static";`,
  12: 'return searchParams.get("category") || "all";',
  13: `return {
  email: fields.email.trim().toLowerCase(),
  plan: fields.plan,
  acceptsTerms: fields.acceptsTerms === "on",
};`,
  14: `const styles = {
  info: "border-sky-200 bg-sky-50 text-sky-800",
  success: "border-emerald-200 bg-emerald-50 text-emerald-800",
};

return styles[state];`,
  15: `export const avatarConfig = {
  src: "/avatar.png",
  alt: "User avatar",
  width: 64,
  height: 64,
};`,
  16: `return {
  status: 201,
  body: {
    ok: true,
    source: "api route",
  },
};`,
  17: `return [
  ...items,
  {
    id: \`item-\${items.length + 1}\`,
    label: fields.label,
    done: false,
  },
];`,
  18: `const id = \`optimistic-\${label.toLowerCase()}\`;

return [...items, { id, label, pending: true }];`,
  19: `export const emptyStateLabel: string = "No items yet";
export const skeletonRows: number = 2;`,
  20: "return ids.map((id) => ({ id }));",
};

export const lessons: Lesson[] = [
  {
    number: 1,
    slug: "route-slug-titles",
    title: "Route Slug Titles",
    file: "src/exercises/lesson-01-route-title.ts",
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
          { label: "Current output", value: lesson01.formatRouteTitle(routeTitleInput) },
          { label: "Expected output", value: routeTitleExpected },
        ]}
      />
    ),
    isComplete: () =>
      lesson01.formatRouteTitle(routeTitleInput) === routeTitleExpected,
  },
  {
    number: 2,
    slug: "home-intro-copy",
    title: "Home Intro Copy",
    file: "src/exercises/lesson-02-home-copy.tsx",
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
  summary: "Open a lesson, edit the referenced file, and return to the browser to verify the result.",
  cta: "Start Lesson 1",
};`,
    successText: "The card is successful when the content object matches the expected copy.",
    render: () => (
      <div className="grid gap-4 lg:grid-cols-2">
        <lesson02.HomeIntro />
        <JsonBlock label="Expected content" value={homeIntroExpected} />
      </div>
    ),
    isComplete: () =>
      lesson02.homeIntroContent.headline === homeIntroExpected.headline &&
      lesson02.homeIntroContent.summary === homeIntroExpected.summary &&
      lesson02.homeIntroContent.cta === homeIntroExpected.cta,
  },
  {
    number: 3,
    slug: "lesson-navigation",
    title: "Lesson Navigation",
    file: "src/exercises/lesson-03-navigation.ts",
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
          items={lesson03
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
      JSON.stringify(lesson03.getPrimaryNavigation()) ===
      JSON.stringify(expectedNavigation),
  },
  {
    number: 4,
    slug: "dynamic-route-params",
    title: "Dynamic Route Params",
    file: "src/exercises/lesson-04-dynamic-params.ts",
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
            value: lesson04.getLessonHref("metadata-builder"),
          },
          { label: "Expected href", value: "/lessons/metadata-builder" },
        ]}
      />
    ),
    isComplete: () =>
      lesson04.getLessonHref("metadata-builder") ===
      "/lessons/metadata-builder",
  },
  {
    number: 5,
    slug: "metadata-builder",
    title: "Metadata Builder",
    file: "src/exercises/lesson-05-metadata.ts",
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
          { label: "Current title", value: lesson05.buildMetadataTitle("Routing") },
          { label: "Expected title", value: "Routing | Next Practice" },
        ]}
      />
    ),
    isComplete: () =>
      lesson05.buildMetadataTitle("Routing") === "Routing | Next Practice",
  },
  {
    number: 6,
    slug: "published-posts",
    title: "Published Posts",
    file: "src/exercises/lesson-06-posts.ts",
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
          items={lesson06.getPublishedPosts(posts).map((post) => post.title)}
        />
        <PreviewList
          label="Expected posts"
          items={["Metadata that helps readers", "Route handlers in practice"]}
        />
      </div>
    ),
    isComplete: () =>
      sameStrings(
        lesson06.getPublishedPosts(posts).map((post) => post.title),
        ["Metadata that helps readers", "Route handlers in practice"],
      ),
  },
  {
    number: 7,
    slug: "component-props",
    title: "Component Props",
    file: "src/exercises/lesson-07-user-card.tsx",
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
        <lesson07.UserCard user={practiceUser} />
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
      JSON.stringify(lesson07.createUserCardDetails(practiceUser)) ===
      JSON.stringify({
        displayName: "Riley Chen",
        roleLabel: "Frontend developer",
        statusLabel: "Active",
        tone: "success",
      }),
  },
  {
    number: 8,
    slug: "conditional-empty-state",
    title: "Conditional Empty State",
    file: "src/exercises/lesson-08-empty-state.tsx",
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
        <lesson08.ResourceList resources={resources} />
        <lesson08.ResourceList resources={[]} />
      </div>
    ),
    isComplete: () => {
      const populated = lesson08.getResourceListState(resources);
      const empty = lesson08.getResourceListState([]);

      return (
        populated.kind === "items" &&
        populated.items.length === resources.length &&
        empty.kind === "empty" &&
        empty.items.length === 0
      );
    },
  },
  {
    number: 9,
    slug: "feature-list",
    title: "Feature List",
    file: "src/exercises/lesson-09-feature-list.tsx",
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
        <lesson09.FeatureList features={features} />
        <PreviewList
          label="Expected labels"
          items={["Server Components", "Route Handlers", "Metadata API"]}
        />
      </div>
    ),
    isComplete: () =>
      sameStrings(lesson09.getFeatureLabels(features), [
        "Server Components",
        "Route Handlers",
        "Metadata API",
      ]),
  },
  {
    number: 10,
    slug: "loading-state-copy",
    title: "Loading State Copy",
    file: "src/exercises/lesson-10-loading-state.tsx",
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
        <lesson10.LoadingPanel resourceName="lesson preview" />
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
      lesson10.getLoadingMessage("lesson preview") ===
      "Loading lesson preview...",
  },
  {
    number: 11,
    slug: "cache-policy",
    title: "Cache Policy",
    file: "src/exercises/lesson-11-cache-policy.ts",
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
          { label: "Current revalidate", value: lesson11.revalidate },
          { label: "Expected revalidate", value: 60 },
          { label: "Current dynamic", value: lesson11.dynamic },
          { label: "Expected dynamic", value: "force-static" },
        ]}
      />
    ),
    isComplete: () =>
      lesson11.revalidate === 60 && lesson11.dynamic === "force-static",
  },
  {
    number: 12,
    slug: "search-params",
    title: "Search Params",
    file: "src/exercises/lesson-12-search-params.ts",
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
            value: lesson12.getSearchTerm(new URLSearchParams("q=nextjs")),
          },
          {
            label: "missing q",
            value: lesson12.getSearchTerm(new URLSearchParams("page=2")),
          },
          { label: "Expected values", value: "nextjs, all" },
        ]}
      />
    ),
    isComplete: () =>
      lesson12.getSearchTerm(new URLSearchParams("q=nextjs")) === "nextjs" &&
      lesson12.getSearchTerm(new URLSearchParams("page=2")) === "all" &&
      lesson12.getSearchTerm(new URLSearchParams("q=")) === "all",
  },
  {
    number: 13,
    slug: "form-payload",
    title: "Form Payload",
    file: "src/exercises/lesson-13-form-data.ts",
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
          value={lesson13.buildSignupPayload({
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
        lesson13.buildSignupPayload({
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
    number: 14,
    slug: "status-classes",
    title: "Status Classes",
    file: "src/exercises/lesson-14-status-class.ts",
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
        {(["success", "warning", "error"] as lesson14.PracticeStatus[]).map(
          (status) => (
            <div
              key={status}
              className={[
                "rounded-md border p-3 text-sm font-semibold",
                lesson14.getStatusStyles(status),
              ].join(" ")}
            >
              {status}: {lesson14.getStatusStyles(status)}
            </div>
          ),
        )}
      </div>
    ),
    isComplete: () =>
      (["success", "warning", "error"] as lesson14.PracticeStatus[]).every(
        (status) => lesson14.getStatusStyles(status) === expectedStatusStyles[status],
      ),
  },
  {
    number: 15,
    slug: "image-props",
    title: "Image Props",
    file: "src/exercises/lesson-15-image-props.ts",
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
        <JsonBlock label="Current image config" value={lesson15.imageConfig} />
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
      JSON.stringify(lesson15.imageConfig) ===
      JSON.stringify({
        src: "/next.svg",
        alt: "Next.js logo",
        width: 120,
        height: 24,
      }),
  },
  {
    number: 16,
    slug: "route-response",
    title: "Route Response",
    file: "src/exercises/lesson-16-route-response.ts",
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
        <JsonBlock label="Current response" value={lesson16.createPracticeResponse()} />
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
      JSON.stringify(lesson16.createPracticeResponse()) ===
      JSON.stringify({
        status: 200,
        body: {
          ok: true,
          source: "route handler",
        },
      }),
  },
  {
    number: 17,
    slug: "server-action-result",
    title: "Server Action Result",
    file: "src/exercises/lesson-17-server-action.ts",
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
      const result = lesson17.addTodoFromForm(todos, {
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
      const result = lesson17.addTodoFromForm(todos, {
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
    number: 18,
    slug: "optimistic-reducer",
    title: "Optimistic Reducer",
    file: "src/exercises/lesson-18-optimistic-reducer.ts",
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
      const result = lesson18.addOptimisticTodo(
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
      const result = lesson18.addOptimisticTodo(
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
    number: 19,
    slug: "suspense-fallback",
    title: "Suspense Fallback",
    file: "src/exercises/lesson-19-suspense-card.tsx",
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
        <lesson19.FallbackCard />
        <ResultGrid
          rows={[
            { label: "Expected label", value: "Preparing preview" },
            { label: "Expected rows", value: 3 },
          ]}
        />
      </div>
    ),
    isComplete: () =>
      lesson19.fallbackLabel === "Preparing preview" &&
      lesson19.fallbackRows === 3,
  },
  {
    number: 20,
    slug: "static-params",
    title: "Static Params",
    file: "src/exercises/lesson-20-static-params.ts",
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
          value={lesson20.generateLessonParams(["routing", "metadata"])}
        />
        <JsonBlock
          label="Expected params"
          value={[{ slug: "routing" }, { slug: "metadata" }]}
        />
      </div>
    ),
    isComplete: () =>
      JSON.stringify(lesson20.generateLessonParams(["routing", "metadata"])) ===
      JSON.stringify([{ slug: "routing" }, { slug: "metadata" }]),
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
