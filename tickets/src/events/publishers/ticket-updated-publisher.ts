import { Publisher, Subjects, TicketUpdatedEvent } from "@mmitickets/common";

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent>{
    readonly subject = Subjects.TicketUpdated;
}