import connectDB from '../../../../lib/mongodb.js';
import User from '../../../../models/User.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import cookie from 'cookie'; // knihovna pro práci s cookies

const JWT_SECRET = process.env.JWT_SECRET || 'supersecret';

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

  // ✅ Vygenerovat JWT token
  const token = jwt.sign(
    { email: user.email, id: user._id, activated: user.activated },
    JWT_SECRET,
    { expiresIn: '7d' }
  );

  // ✅ Nastavit cookie s tokenem
  const serialized = cookie.serialize('authToken', token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict',
    maxAge: 60 * 60 * 24 * 7,
    path: '/',
  });

  return new Response(JSON.stringify({ message: '✅ Přihlášení úspěšné' }), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
      'Set-Cookie': serialized, // cookie se nastaví v odpovědi
    },
  });
}