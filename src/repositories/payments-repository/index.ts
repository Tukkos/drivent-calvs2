import { prisma } from "@/config";
import { CardData } from "@/protocols";

async function findPayment(ticketId: number) {
  return prisma.payment.findFirst({
    where: {
      Ticket: {
        id: ticketId,
      },
    },
  });
}

async function postPayment(ticketId: number, cardData: CardData, ticketPrice: number) {
  const lastDigits = cardData.number.toString().slice(-4);
  return prisma.payment.create({
    data: {
      ticketId: ticketId,
      value: ticketPrice,
      cardIssuer: cardData.issuer,
      cardLastDigits: lastDigits,
    }
  });
}

const paymentsRepository = {
  findPayment,
  postPayment,
};

export default paymentsRepository;
