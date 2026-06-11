export type PracticePost = {
  title: string;
  published: boolean;
  publishedAt: string;
};

// TODO: Filter out unpublished posts and sort by publishedAt (newest first).
export function getPublishedPosts(posts: PracticePost[]) {
  return posts;
}
