import { Router, Response } from 'express';
import { supabase } from '../config/supabase';
import { verifyAdmin, AuthRequest } from '../middleware/auth';

const router = Router();

// 1. Admin Login Route
router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    return res.status(401).json({ error: error.message });
  }
  
  res.json({ 
    message: 'Login successful', 
    token: data.session.access_token 
  });
});

// 2. CREATE (Add a new record)
router.post('/records', verifyAdmin, async (req: AuthRequest, res: Response) => {
  const { title, description } = req.body;

  const { data, error } = await supabase
    .from('records')
    .insert([{ title, description }])
    .select();

  if (error) return res.status(400).json({ error: error.message });
  res.status(201).json(data);
});

// 3. READ (Get all records)
router.get('/records', verifyAdmin, async (req: AuthRequest, res: Response) => {
  const { data, error } = await supabase
    .from('records')
    .select('*')
    .order('created_at', { ascending: false });

  if (error) return res.status(400).json({ error: error.message });
  res.json(data);
});

// 4. UPDATE (Edit a record by ID)
router.put('/records/:id', verifyAdmin, async (req: AuthRequest, res: Response) => {
  const { id } = req.params;
  const { title, description } = req.body;

  const { data, error } = await supabase
    .from('records')
    .update({ title, description })
    .eq('id', id)
    .select();

  if (error) return res.status(400).json({ error: error.message });
  res.json(data);
});

// 5. DELETE (Remove a record by ID)
router.delete('/records/:id', verifyAdmin, async (req: AuthRequest, res: Response) => {
  const { id } = req.params;

  const { error } = await supabase
    .from('records')
    .delete()
    .eq('id', id);

  if (error) return res.status(400).json({ error: error.message });
  res.json({ message: 'Record deleted successfully' });
});

export default router;
