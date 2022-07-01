import { Request, Response } from "express";

import { ListAllUsersUseCase } from "./ListAllUsersUseCase";

class ListAllUsersController {
  constructor(private listAllUsersUseCase: ListAllUsersUseCase) { }

  handle(request: Request, response: Response): Response {
    const user_id = request.headers["user_id"].toString();
    try {

      const users = this.listAllUsersUseCase.execute({ user_id });
      return response.status(201).json(users);

    } catch (err) {
      return response.status(400).json({ error: err.message });
    }


  }
}

export { ListAllUsersController };
