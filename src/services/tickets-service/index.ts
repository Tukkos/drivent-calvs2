import ticketsRepository from "@/repositories/ticket-repository";
import { Enrollment } from "@prisma/client";

async function getTicketTypesResponse() {
  const tickets = await ticketsRepository.findTicketType();
  return tickets;
}

async function getTicketsResponse(userId: number) {
  const tickets = await ticketsRepository.findTicketByUserId(userId);
  return tickets;
}

async function postTicketReservation(ticketTypeId: number, enrollment: Enrollment) {
  const result = await ticketsRepository.postTicket(ticketTypeId, enrollment);
  console.log(result);
  return result;
}

async function getTicketsResponseByEnrollmentId(enrollment: Enrollment) {
  const tickets = await ticketsRepository.findTicketByEnrollments(enrollment);
  return tickets;
}

const ticketsService = {
  getTicketTypesResponse,
  getTicketsResponse,
  postTicketReservation,
  getTicketsResponseByEnrollmentId,
};

export default ticketsService;
