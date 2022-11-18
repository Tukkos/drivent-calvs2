import { prisma } from "@/config";
import { Enrollment } from "@prisma/client";

async function findTicketType() {
  return prisma.ticketType.findMany();
}

async function findTicket() {
  return prisma.ticket.findMany({
    include: {
      TicketType: true,
    },
  });
}

async function postTicket(ticketTypeId: number, enrollment: Enrollment) {
  return prisma.ticket.create({
    data: {
      status: "RESERVED",
      ticketTypeId: ticketTypeId,
      enrollmentId: enrollment.id,
    }
  });
}

async function findTicketByEnrollments(enrollment: Enrollment) {
  return prisma.ticket.findFirst();
} 

const ticketsRepository = {
  findTicketType,
  findTicket,
  postTicket,
  findTicketByEnrollments,
};

export default ticketsRepository;
