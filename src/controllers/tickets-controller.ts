import { AuthenticatedRequest } from "@/middlewares";
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
  try {
    const ticket = await ticketsService.getTicketsResponse();

    return res.status(httpStatus.OK).send(ticket);
  } catch (error) {
    return res.sendStatus(httpStatus.NO_CONTENT);
  }
}

// export async function postTickets(req: AuthenticatedRequest, res: Response) {

//     try {
        
//     } catch (error) {
//         return res.sendStatus(httpStatus.NO_CONTENT);
//     }
// }
