import connectDB from '../../../../lib/mongodb.js';
import User from '../../../../models/User.js';
import bcrypt from 'bcryptjs';

export async function POST(req) {
  await connectDB();

  const { email, password } = await req.json();

  if (!email || !password) {
    return new Response(JSON.stringify({ error: 'Email a heslo jsou povinné' }), { status: 400 });
  }

  const existingUser = await User.findOne({ email });
  if (existingUser) {
    return new Response(JSON.stringify({ error: 'Uživatel už existuje' }), { status: 400 });
  }

  const passwordHash = await bcrypt.hash(password, 10);

  const newUser = new User({
    email,
    passwordHash,
    activated: false,
    activationCode: null,
  });

  await newUser.save();

  return new Response(JSON.stringify({ message: '✅ Uživatel zaregistrován', user: newUser }), {
    status: 201,
    headers: { 'Content-Type': 'application/json' },
  });
}