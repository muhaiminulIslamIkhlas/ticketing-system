import { OrderCancelledEvent, Publisher, Subjects } from "@mmitickets/common";

export class OrderCanceedPublisher extends Publisher<OrderCancelledEvent> {
    readonly subject = Subjects.OrderCancelled
}