import { prisma } from "@/config";

async function findPayment(ticketId: number) {
  return prisma.payment.findFirst({
    where: {
      Ticket: {
        id: ticketId,
      },
    },
  });
}

const paymentsRepository = {
  findPayment,
};

export default paymentsRepository;
