import { Router } from "express";
import { authenticateToken } from "@/middlewares";
import { getPayments, postPaymentsProcess } from "@/controllers";

const paymentsRouter = Router();

paymentsRouter
  .all("/*", authenticateToken)
  .get("/", getPayments)
  .post("/process", postPaymentsProcess);

export { paymentsRouter };
