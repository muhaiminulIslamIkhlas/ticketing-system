import request from 'supertest';
import { Ticket } from '../../models/tickets';
import { app } from '../../app';

it('should fetches the order', async () => {
    const ticket = Ticket.build({
        title: 'concert',
        price: 20
    });
    await ticket.save();

    const user = global.signin();

    const response = await request(app)
    .post('/api/orders')
    .set('Cookie', user)
    .send({ ticketId: ticket.id })
    .expect(201);
});