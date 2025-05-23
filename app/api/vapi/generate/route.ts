import { generateText } from "ai";
import { google } from "@ai-sdk/google";

import { db } from "@/firebase/admin";
import { getRandomInterviewCover } from "@/lib/utils";

export async function POST(request: Request) {
  const { type, role, level, techstack, amount, userid } = await request.json();

  try {
    const { text: questions } = await generateText({
      model: google("gemini-2.0-flash-001"),
      prompt: `Prepare questions for a job interview.
        The job role is ${role}.
        The job experience level is ${level}.
        The tech stack used in the job is: ${techstack}.
        The focus between behavioural and technical questions should lean towards: ${type}.
        The amount of questions required is: ${amount}.
        Please return only the questions, without any additional text.
        The questions are going to be read by a voice assistant so do not use "/" or "*" or any other special characters which might break the voice assistant.
        Return the questions formatted like this:
        ["Question 1", "Question 2", "Question 3"]
        
        Thank you! <3
    `,
    });

    //Extra code i have taken through chatgpt 
    let parsedQuestions;
  try {
    parsedQuestions = JSON.parse(questions);
    if (!Array.isArray(parsedQuestions)) throw new Error("Questions not an array");
  } catch (err) {
    console.error("❌ Failed to parse Gemini output:", questions);
    return Response.json({ success: false, error: "Invalid questions format from Gemini" }, { status: 500 });
  }

  const interview = {
    role,
    type,
    level,
    techstack: techstack.split(","),
    questions: parsedQuestions,
    userId: userid,
    finalized: true,
    coverImage: getRandomInterviewCover(),
    createdAt: new Date().toISOString(),
  };

  console.log("📤 Attempting to add interview to Firestore...");
  await db.collection("interviews").add(interview);
  console.log("✅ Interview added successfully to Firestore.");

  return Response.json({ success: true }, { status: 200 });
} catch (error) {
  console.error("🔥 Unexpected Error:", error);
  return Response.json({ success: false, error }, { status: 500 });
}
}
export async function GET() {
  return Response.json({ success: true, data: "Thank you!" }, { status: 200 });
}

