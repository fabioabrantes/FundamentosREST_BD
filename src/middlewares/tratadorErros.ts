import type { Request, Response, NextFunction } from "express";
import { AppErrosCustom } from "../errors/errorsAplications.ts";

function tratadorErros(
  error: Error,
  request: Request,
  response: Response,
  next: NextFunction
) {
  if (error instanceof AppErrosCustom) {
    response.status(error.statusCode).json({ message: error.message });
  }

  response.status(500).json({
    status: "Error server",
    message: "Internal error on server or database",
  });
}

export { tratadorErros };
