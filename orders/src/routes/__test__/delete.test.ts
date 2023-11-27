import request from 'supertest';
import { Ticket } from "../../models/tickets";
import { app } from '../../app';

it('should marks an order as cancelled', async () => {
    const ticket = Ticket.build({
        title: 'concert',
        price: 20
    });
    await ticket.save();

    const user = global.signin();

    const { body: order } = await request(app)
        .post('/api/orders')
        .set('Cookie', user)
        .send({ ticketId: ticket.id })
        .expect(201);

    await request(app)
        .delete(`/api/orders/${order.id}`)
        .set('Cookie', user)
        .send({ ticketId: ticket.id })
        .expect(204);
});