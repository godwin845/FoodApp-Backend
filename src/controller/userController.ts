import { Request, Response } from 'express';
import * as userService from '../service/userService';

// Fetch all users
export const getUsers = async (req: Request, res: Response): Promise<void> => {
  try {
    const users = await userService.getAllUsers(); // Call the service to get all users
    res.status(200).json(users); // Return the list of users as a JSON response
  } catch (error) {
    res.status(500).json({ message: error.message || 'Error fetching users' });
  }
};

export const register = async (req: Request, res: Response): Promise<void> => {
  const { name, email, password } = req.body;
  try {
    const result = await userService.registerUser(name, email, password);
    res.status(201).json(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const login = async (req: Request, res: Response): Promise<void> => {
  const { email, password } = req.body;
  try {
    const result = await userService.loginUser(email, password);
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};