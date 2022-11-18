import { Router } from "express";
import { authenticateToken } from "@/middlewares";
import { getTickets, getTicketsType, postTickets } from "@/controllers";

const ticketsRouter = Router();

ticketsRouter
  // .all("/*", authenticateToken)
  .get("/types", getTicketsType)
  .get("/", getTickets)
  .post("/", postTickets);

export { ticketsRouter };
