import mongoose from 'mongoose';
import { app } from './app';
import { natsWrapper } from './nats-wrapper';

const start = async () => {
    if (!process.env.JWT_KEY) throw new Error('JWT secret not found');
    if (!process.env.MONGO_URI) throw new Error('Mongo URI not found');
    if (!process.env.NATS_CLUSTER_ID) throw new Error('NATS_CLUSTER_ID not found');
    if (!process.env.NATS_CLIENT_ID) throw new Error('NATS_CLIENT_ID not found');
    if (!process.env.NATS_URL) throw new Error('NATS_URL not found');

    try {
        await natsWrapper.connect(process.env.NATS_CLUSTER_ID, process.env.NATS_CLIENT_ID, process.env.NATS_URL);
        natsWrapper.client.on('close', () => {
            console.log('NATS connection closed');
            process.exit();
        });
        process.on('SIGINT', () => natsWrapper.client.close());
        process.on('SIGTERM', () => natsWrapper.client.close());

        await mongoose.connect(process.env.MONGO_URI)
        console.log('connected to mongodb');
    } catch (error) {
        console.log(error);
    }

    app.listen(3000, () => {
        console.log('Listening on port 3000!!!!!!');
    })
}

start();

