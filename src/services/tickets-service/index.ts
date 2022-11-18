import ticketsRepository from "@/repositories/ticket-repository";

async function getTicketTypesResponse() {
  const tickets = await ticketsRepository.findTicketType();
  return tickets;
}

async function getTicketsResponse() {
  const tickets = await ticketsRepository.findTicket();
  return tickets[0];
}

async function postTicketReservation(ticketTypeId: number) {
  const result = await ticketsRepository.postTicket();
  return result;
}

const ticketsService = {
  getTicketTypesResponse,
  getTicketsResponse,
  postTicketReservation,
};

export default ticketsService;
