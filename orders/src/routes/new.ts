import { requireAuth, validateRequest } from '@mmitickets/common';
import express, { Request, Response } from 'express';
import { body } from 'express-validator';
import mongoose from 'mongoose';

const router = express.Router();

router.post('/api/orders', requireAuth,
    [
        body('ticketId')
            .not()
            .isEmpty()
            .custom((input: string) => mongoose.Types.ObjectId.isValid(input))
            .withMessage('Ticket Id must be provided'),

    ],
    validateRequest,
    async (req: Request, res: Response) => {
        res.send({});
    });

export { router as newOrderRouter }