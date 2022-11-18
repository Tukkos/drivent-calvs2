import ticketsRepository from "@/repositories/ticket-repository";
import { Enrollment } from "@prisma/client";

async function getTicketTypesResponse() {
  const tickets = await ticketsRepository.findTicketType();
  return tickets;
}

async function getTicketsResponse() {
  const tickets = await ticketsRepository.findTicket();
  return tickets[0];
}

async function postTicketReservation(ticketTypeId: number, enrollment: Enrollment) {
  const result = await ticketsRepository.postTicket(ticketTypeId, enrollment);
  console.log(result);
  return result;
}

async function getTicketsResponseById(enrollment: Enrollment) {
  const tickets = await ticketsRepository.findTicketByEnrollments(enrollment);
  return tickets;
}

const ticketsService = {
  getTicketTypesResponse,
  getTicketsResponse,
  postTicketReservation,
  getTicketsResponseById,
};

export default ticketsService;
