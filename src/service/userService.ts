import bcrypt from 'bcrypt';
import { User } from '../models/user';

export const getAllUsers = async () => {
  try {
    const users = await User.find(); // Fetch all users from the database
    return users; 
  } catch (error) {
    throw new Error(`Error fetching users: ${error.message}`); // Handle any errors that occur during the database query
  }
};

export const registerUser = async (name: string, email: string, password: string) => {
  const existingUser = await User.findOne({ email });
  if (existingUser) throw new Error('Email already registered.');

  const hashedPassword = await bcrypt.hash(password, 10);
  const newUser = new User({ name, email, password: hashedPassword });
  await newUser.save();
  return { message: 'User registered successfully.' };
};

export const loginUser = async (email: string, password: string) => {
  const user = await User.findOne({ email });
  if (!user) throw new Error('Invalid email or password.');

  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid) throw new Error('Invalid email or password.');

  return { message: 'Login successful.' };
};