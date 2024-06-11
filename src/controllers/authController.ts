import { Request, Response } from 'express';
import { registerUser, loginUser } from '../services/authService';
import { User as IUser } from '../interfaces/User';

export const register = async (req: Request, res: Response) => {
  try {
    const user : IUser= await registerUser(req.body);
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json(error);
  }
};

export const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    const { token, user } = await loginUser(email, password);
    res.status(200).json({ token, user });
  } catch (error) {
    res.status(400).json(error);
  }
};