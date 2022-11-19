import { PaymentType } from "@/protocols";
import paymentsRepository from "@/repositories/payments-repository";

async function getPaymentResponse(ticketId: number): Promise<PaymentType> {
  const tickets = await paymentsRepository.findPayment(ticketId);
  return tickets;
}

const paymentsService = {
  getPaymentResponse,
};

export default paymentsService;
