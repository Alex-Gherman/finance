import express from 'express';
import { User } from '../models/index.js';

const router = express.Router();

// Example route
router.get('/api/some-endpoint', (req, res) => {
    res.json({ message: 'This is a sample endpoint' });
});

// Login route
router.post('/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });

        if (user && user.password === password) {
            res.json({ user: { name: user.name, email: user.email } });
        } else {
            res.status(401).json({ message: 'Invalid email or password' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
});

// Register route
router.post('/register', async (req, res) => {
    const { name, email, password } = req.body;

    try {
        const existingUser = await User.findOne({ email });

        if (existingUser) {
            return res.status(400).json({ message: 'User already exists' });
        }

        const newUser = new User({ name, email, password });
        await newUser.save();

        res.status(201).json({ message: 'User registered successfully', user: { name, email } });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
});

export default router;