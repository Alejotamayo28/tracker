import { NextFunction, Response } from "express";
import jwt from "jsonwebtoken"
import dotenv from "dotenv";
import { RequestExt } from "../jsonWebToken/session";
dotenv.config();


export const authenticateToken = (req: RequestExt, res: Response, next: NextFunction) => {
  const token = req.headers['authorization']?.split(' ')[1];
  if (!token) {
    return res.status(401).json({ error: 'Token de autenticación no proporcionado' });
  }
  jwt.verify(token, process.env.JWT_SECRET!, (err, user) => {
    if (err) {
      return res.status(403).json({ error: 'Token de autenticación inválido' });
    }
    req.user = user;
    next();
  });
}