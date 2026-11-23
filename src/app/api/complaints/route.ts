
import { NextResponse } from "next/server";
import { randomUUID } from "crypto";
import { db } from "@/lib/db";
import { complaints } from "@/db/schema";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const {
      name,
      phone,
      category,
      location,
      description,
      language,
    } = body;

    // Validate required fields
    if (
      !name?.trim() ||
      !phone?.trim() ||
      !category ||
      !location?.trim() ||
      !description?.trim()
    ) {
      return NextResponse.json(
        { success: false, message: "All required fields must be filled." },
        { status: 400 }
      );
    }

    // Validate complaint category
    const allowedCategories = [
      "Water Supply",
      "Sanitation",
      "Drainage",
    ];

    if (!allowedCategories.includes(category)) {
      return NextResponse.json(
        { success: false, message: "Invalid complaint category." },
        { status: 400 }
      );
    }

    // Generate a unique complaint ID
    const complaintId = randomUUID();

    // Save complaint in database
    await db.insert(complaints).values({
      id: complaintId,
      name: name.trim(),
      phone: phone.trim(),
      category,
      location: location.trim(),
      description: description.trim(),
      language: language || "English",
      status: "Submitted",
      priority: "Pending",
      createdAt: Date.now(),
    });

    return NextResponse.json(
      {
        success: true,
        message: "Complaint submitted successfully!",
        complaintId,
      },
      { status: 201 }
    );

  } catch (error) {
    console.error("Complaint submission error:", error);

    return NextResponse.json(
      { success: false, message: "Failed to submit complaint." },
      { status: 500 }
    );
  }
}
