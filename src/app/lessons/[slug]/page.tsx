import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { AppShell } from "@/components/AppShell";
import { LessonView } from "@/components/LessonView";
import { getLessonBySlug, lessons } from "@/lib/lessons";

type LessonPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return lessons.map((lesson) => ({
    slug: lesson.slug,
  }));
}

export async function generateMetadata({
  params,
}: LessonPageProps): Promise<Metadata> {
  const { slug } = await params;
  const lesson = getLessonBySlug(slug);

  if (!lesson) {
    return {
      title: "Lesson not found | Next Practice",
    };
  }

  return {
    title: `${lesson.title} | Next Practice`,
    description: lesson.goal,
  };
}

export default async function LessonPage({ params }: LessonPageProps) {
  const { slug } = await params;
  const lesson = getLessonBySlug(slug);

  if (!lesson) {
    notFound();
  }

  return (
    <AppShell currentSlug={lesson.slug}>
      <LessonView lesson={lesson} />
    </AppShell>
  );
}
