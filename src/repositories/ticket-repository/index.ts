import { prisma } from "@/config";
import { Enrollment } from "@prisma/client";

async function findTicketType() {
  return prisma.ticketType.findMany();
}

async function findTicketByUserId(userId: number) {
  return prisma.ticket.findFirst({
    where: {
      Enrollment: {
        userId: userId,
      },
    },
    include: {
      TicketType: true,
    },
  });
}

async function findTicketByTicketId(ticketId: number) {
  return prisma.ticket.findFirst({
    where: {
      id: ticketId,
    },
  });
}

async function findTicketByUserAndTicketId(userId: number, ticketId: number) {
  return prisma.ticket.findFirst({
    where: {
      Enrollment: {
        userId: userId,
      },
      id: ticketId,
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
  return prisma.ticket.findFirst({
    where: {
      enrollmentId: enrollment.id,
    },
    include: {
      TicketType: true,
    },
  });
} 

const ticketsRepository = {
  findTicketType,
  findTicketByUserId,
  findTicketByTicketId,
  findTicketByUserAndTicketId,
  postTicket,
  findTicketByEnrollments,
};

export default ticketsRepository;
