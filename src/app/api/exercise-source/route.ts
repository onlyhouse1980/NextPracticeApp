import { NextResponse } from "next/server";
import {
  ExerciseSourceError,
  saveExerciseSource,
} from "@/lib/exercise-source";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

type SaveExerciseRequest = {
  file?: unknown;
  source?: unknown;
};

export async function PUT(request: Request) {
  let payload: SaveExerciseRequest;
  const origin = request.headers.get("origin");

  if (origin && origin !== new URL(request.url).origin) {
    return NextResponse.json(
      { message: "Cross-origin exercise edits are not allowed." },
      { status: 403 },
    );
  }

  try {
    payload = (await request.json()) as SaveExerciseRequest;
  } catch {
    return NextResponse.json(
      { message: "Send a valid JSON request body." },
      { status: 400 },
    );
  }

  if (typeof payload.file !== "string" || typeof payload.source !== "string") {
    return NextResponse.json(
      { message: "Both file and source must be strings." },
      { status: 400 },
    );
  }

  try {
    const result = await saveExerciseSource(payload.file, payload.source);
    return NextResponse.json({ ok: true, ...result });
  } catch (error) {
    if (error instanceof ExerciseSourceError) {
      return NextResponse.json(
        {
          message: error.message,
          diagnostics: error.diagnostics,
        },
        { status: error.status },
      );
    }

    console.error("Unable to save exercise source", error);
    return NextResponse.json(
      {
        message:
          "The local file could not be saved. Check that the project directory is writable.",
      },
      { status: 500 },
    );
  }
}
