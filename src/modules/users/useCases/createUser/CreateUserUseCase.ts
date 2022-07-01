import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  name: string;
  email: string;
  admin?: boolean;
  created_at?: Date;
  updated_at?: Date;
}

class CreateUserUseCase {
  constructor(private usersRepository: IUsersRepository) { }

  execute({ email, name, admin, created_at, updated_at }: IRequest): User {
    const userExists = this.usersRepository.findByEmail(email);
    if (userExists)
      throw new Error("E-mail already exists! ");
    const user = this.usersRepository.create({ name, email, admin, created_at, updated_at });

    return user;
  }
}

export { CreateUserUseCase };
