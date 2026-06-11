export type PracticePost = {
  title: string;
  published: boolean;
  publishedAt: string;
};

// TODO: Return only published posts, newest first.
export function getPublishedPosts() {
  return posts;
}
