import { Router } from "express";
import { authenticateToken } from "@/middlewares";
import { getTickets, getTicketsType } from "@/controllers";

const ticketsRouter = Router();

ticketsRouter
  .all("/*", authenticateToken)
  .get("/types", getTicketsType)
  .get("/", getTickets)
  .post("/");

export { ticketsRouter };
