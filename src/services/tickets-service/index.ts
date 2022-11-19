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

async function getTicketResponseByTitcketId(ticketId: number) {
  const ticket = await ticketsRepository.findTicketByTicketId(ticketId);
  return ticket;
}

async function getTicketsResponseByTicketAndUserId(userId: number, ticketId: number) {
  const ticket = await ticketsRepository.findTicketByUserAndTicketId(userId, ticketId);
  return ticket;
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
  getTicketResponseByTitcketId,
  getTicketsResponseByTicketAndUserId,
  postTicketReservation,
  getTicketsResponseByEnrollmentId,
};

export default ticketsService;
