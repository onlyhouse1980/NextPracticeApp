export type LessonParam = {
  slug?: string;
  id?: string;
};

// TODO: Return objects shaped like Next.js generateStaticParams expects.
export function generateLessonParams(slugs: string[]): LessonParam[] {
  return slugs.map((id) => ({
    id,
  }));
}
