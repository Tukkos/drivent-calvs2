import { AuthenticatedRequest } from "@/middlewares";
import paymentsService from "@/services/payments-service";
import { Response } from "express";
import httpStatus from "http-status";

export async function getPayments(req: AuthenticatedRequest, res: Response) {
  const ticketId = req.query as any;
  try {
    // if (ticketId.ticketId === undefined) {
    //     return res.sendStatus(httpStatus.BAD_REQUEST);
    // };

    const result = await paymentsService.getPaymentResponse(ticketId);

    return res.status(httpStatus.OK).send(result);   
  } catch (error) {
    return res.sendStatus(httpStatus.NOT_FOUND);
  }
}
