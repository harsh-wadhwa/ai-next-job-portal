import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

export const PATCH = async (
  req: Request,
  { params }: { params: { jobId: string } }
) => {
  try {
    const { userId } = auth();
    const { jobId } = params;
    const updatedValues = await req.json();

    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }
    if (!jobId) {
      return new NextResponse("ID is missing", { status: 401 });
    }

    const job = await db.job.update({
      where: {
        id: jobId,
        userId: userId,
      },
      data: {
        ...updatedValues,
      },
    });

    return NextResponse.json(job);
  } catch (err) {
    console.log(`{JOB_PATCH} : ${err}`);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
};
