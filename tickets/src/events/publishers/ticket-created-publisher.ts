import { Publisher, Subjects, TicketCreatedEvent } from "@mmitickets/common";

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent>{
    readonly subject = Subjects.TicketCreated;
}