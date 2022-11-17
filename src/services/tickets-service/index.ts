import ticketsRepository from "@/repositories/ticket-repository";

async function getTicketTypesResponse() {
  const tickets = await ticketsRepository.findTicket();
  return tickets;
}

// type TicketTypeOrEmpty = Partial<TicketType>

const ticketsService = {
  getTicketTypesResponse,
};

export default ticketsService;
