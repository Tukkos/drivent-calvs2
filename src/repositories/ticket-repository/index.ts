import { prisma } from "@/config";

async function findTicket() {
  return prisma.ticketType.findMany();
}

// async function postTicket() {
//     return prisma.ticket.create({})
// }

const ticketsRepository = {
  findTicket,
};

export default ticketsRepository;
