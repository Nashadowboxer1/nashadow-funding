import { NextResponse } from 'next/server';

// Placeholder contact submission endpoint.
// Replace the implementation with a real integration (e.g., email service or CRM webhook).
export async function POST(request: Request) {
  try {
    const body = await request.json();

    // Simulate minimal validation on the server side for demonstration.
    if (!body?.name || !body?.email || !body?.message) {
      return NextResponse.json(
        { message: 'Name, email, and message are required.' },
        { status: 400 }
      );
    }

    // Simulate processing latency so the UI can show a loading state.
    await new Promise(resolve => setTimeout(resolve, 800));

    return NextResponse.json({ message: 'Submission received. This is a placeholder endpoint.' }, { status: 200 });
  } catch (error) {
    console.error('Contact submission failed', error);
    return NextResponse.json(
      { message: 'Unable to submit at this time. Please try again later.' },
      { status: 500 }
    );
  }
}
