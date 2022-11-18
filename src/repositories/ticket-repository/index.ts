import { prisma } from "@/config";

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

async function postTicket() {
  // return prisma.ticket.create({
  //   data: {

  //   }
  // })
}

const ticketsRepository = {
  findTicketType,
  findTicket,
  postTicket,
};

export default ticketsRepository;
