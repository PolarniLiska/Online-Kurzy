import connectDB from '../../../../lib/mongodb.js';
import Code from '../../../../models/Code.js';

export async function POST(req) {
  await connectDB();

  const { code } = await req.json();

  const newCode = new Code({ code });
  await newCode.save();

  return new Response(JSON.stringify({ message: '✅ Code created', code: newCode }), {
    status: 201,
    headers: { 'Content-Type': 'application/json' },
  });
}