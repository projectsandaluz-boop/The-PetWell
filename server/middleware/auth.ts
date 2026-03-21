import { Request, Response, NextFunction } from 'express';
import { supabase } from '../config/supabase';

// Extend Express Request to include user
export interface AuthRequest extends Request {
  user?: any;
}

export const verifyAdmin = async (req: AuthRequest, res: Response, next: NextFunction) => {
  try {
    const token = req.headers.authorization?.split(' ')[1];
    
    if (!token) {
      return res.status(401).json({ error: 'No token provided' });
    }

    // Verify the token with Supabase
    const { data: { user }, error } = await supabase.auth.getUser(token);

    if (error || !user) {
      return res.status(401).json({ error: 'Unauthorized access' });
    }

    // Optional: Add a check here if you want to verify the user is a specific admin email
    // if (user.email !== 'admin@yourdomain.com') {
    //   return res.status(403).json({ error: 'Forbidden' });
    // }

    req.user = user;
    next();
  } catch (error) {
    console.error('Auth Middleware Error:', error);
    res.status(500).json({ error: 'Internal server error during authentication' });
  }
};
