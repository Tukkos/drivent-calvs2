import { Router } from "express";
import { authenticateToken } from "@/middlewares";
import { getTicketsType } from "@/controllers";

const ticketsRouter = Router();

ticketsRouter
  .all("/*", authenticateToken)
  .get("/types", getTicketsType)
  .get("/")
  .post("/");

export { ticketsRouter };
