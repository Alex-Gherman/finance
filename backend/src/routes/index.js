import express from 'express';
import { User } from '../models/index.js';

const router = express.Router();
// Middleware to parse JSON bodies
router.use(express.json());
router.use(express.urlencoded({ extended: true }));
// Home route
router.get('/', (req, res) => {
    res.send('Welcome to the API');
});
// Not Found route
router.get('*', (req, res) => {
    res.status(404).send('404 - Not Found');
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
// Check route
router.get('/check', (req, res) => {
    res.status(200).json({ message: 'Check route is working' });   
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