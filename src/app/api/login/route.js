import connectDB from '../../../../lib/mongodb.js';
import User from '../../../../models/User.js';
import bcrypt from 'bcryptjs';

export async function POST(req) {
  await connectDB();

  const { email, password } = await req.json();

  const user = await User.findOne({ email });
  if (!user) {
    return new Response(JSON.stringify({ error: 'Uživatel nenalezen' }), { status: 404 });
  }

  const isPasswordValid = await bcrypt.compare(password, user.passwordHash);
  if (!isPasswordValid) {
    return new Response(JSON.stringify({ error: 'Špatné heslo' }), { status: 401 });
  }

  return new Response(JSON.stringify({ message: '✅ Přihlášení úspěšné', user }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
}