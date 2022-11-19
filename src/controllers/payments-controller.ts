import { AuthenticatedRequest } from "@/middlewares";
import paymentsService from "@/services/payments-service";
import ticketsService from "@/services/tickets-service";
import { Response } from "express";
import httpStatus from "http-status";

export async function getPayments(req: AuthenticatedRequest, res: Response) {
  const { ticketId } = req.query;
  try {
    if (ticketId === undefined) {
      return res.sendStatus(httpStatus.BAD_REQUEST);
    }

    await ticketVallidation(req, res);

    const result = await paymentsService.getPaymentResponse(Number(ticketId));
    return res.status(httpStatus.OK).send(result);   
  } catch (error) {
    return res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR);
  }
}

export async function ticketVallidation(req: AuthenticatedRequest, res: Response) {
  const { ticketId } = req.query;
  const { userId } = req;
  try {
    const ticket = await ticketsService.getTicketResponseByTitcketId(Number(ticketId));
    if (!ticket) {
      return res.sendStatus(httpStatus.NOT_FOUND);
    }

    const userTicket = await ticketsService.getTicketsResponseByTicketAndUserId(Number(userId), Number(ticketId));
    if (!userTicket) {
      return res.sendStatus(httpStatus.UNAUTHORIZED);
    }
  } catch (error) {
    return res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR);
  }
}
