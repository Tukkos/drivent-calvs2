import { AuthenticatedRequest } from "@/middlewares";
import enrollmentsService from "@/services/enrollments-service";
import ticketsService from "@/services/tickets-service";
import { Response } from "express";
import httpStatus from "http-status";

export async function getTicketsType(req: AuthenticatedRequest, res: Response) {
  try {
    const ticket = await ticketsService.getTicketTypesResponse();
    return res.status(httpStatus.OK).send(ticket);
  } catch (error) {
    return res.sendStatus(httpStatus.NO_CONTENT);
  }
}

export async function getTickets(req: AuthenticatedRequest, res: Response) {
  const { userId } = req;

  try {
    const ticket = await ticketsService.getTicketsResponse();
    if (!ticket) {
      return res.sendStatus(httpStatus.NOT_FOUND);
    }
    return res.status(httpStatus.OK).send(ticket);
  } catch (error) {
    return res.sendStatus(httpStatus.NOT_FOUND);
  }
}

export async function postTickets(req: AuthenticatedRequest, res: Response) {
  const { ticketTypeId } = req.body;
  try {
    const result = await ticketsService.postTicketReservation({
      ...req.body,
      ticketTypeId: ticketTypeId,
    });

    return res.send(httpStatus.CREATED).send(result);
  } catch (error) {
    return res.sendStatus(httpStatus.BAD_REQUEST);
  }
}
