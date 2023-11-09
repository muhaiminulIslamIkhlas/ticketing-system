import express from 'express';
import { currentUser } from '@mmitickets/common';
import { requireAuth } from '@mmitickets/common';

const router = express.Router();

router.get('/api/users/currentuser', currentUser, (req, res) => {
    return res.send({ currentUser: req.currentUser || null })
});

export { router as currentUserRouter }