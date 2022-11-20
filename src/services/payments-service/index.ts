import { CardData, PaymentSucess, PaymentType } from "@/protocols";
import paymentsRepository from "@/repositories/payments-repository";
import ticketsRepository from "@/repositories/ticket-repository";

async function getPaymentResponse(ticketId: number): Promise<PaymentType> {
  const tickets = await paymentsRepository.findPayment(ticketId);
  return tickets;
}

async function postPaymentResponse(ticketId: number, cardData: CardData, ticketPrice: number): Promise<PaymentSucess> {
  const payment = await paymentsRepository.postPayment(ticketId, cardData, ticketPrice);
  await ticketsRepository.updateTicketPaid(ticketId);
  return payment;
}

const paymentsService = {
  getPaymentResponse,
  postPaymentResponse,
};

export default paymentsService;
