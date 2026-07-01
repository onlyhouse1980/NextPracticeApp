import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Script from "next/script";
import { AppShell } from "@/components/AppShell";
import { LessonView } from "@/components/LessonView";
import { readExerciseSource } from "@/lib/exercise-source";
import { getLessonBySlug, lessons } from "@/lib/lessons";

export const dynamic = "force-dynamic";

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

  const initialSource = await readExerciseSource(lesson.file);

  return (
    <>
      <Script
        src="https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/gsap.min.js"
        strategy="afterInteractive"
      />
      <AppShell currentSlug={lesson.slug}>
        <LessonView lesson={lesson} initialSource={initialSource} />
      </AppShell>
    </>
  );
}
