import ticketsRepository from "@/repositories/ticket-repository";

async function getTicketTypesResponse() {
  const tickets = await ticketsRepository.findTicketType();
  return tickets;
}

async function getTicketsResponse() {
  const tickets = await ticketsRepository.findTicket();
  return tickets[0];
}

// type TicketTypeOrEmpty = Partial<TicketType>

const ticketsService = {
  getTicketTypesResponse,
  getTicketsResponse,
};

export default ticketsService;
