import { Role } from './entities/role';

export class User {
  private readonly id: string;
  private fullname: string;
  private email: string;
  private image: string;
  private roles: Role[];

  constructor(
    id: string,
    fullname: string,
    email: string,
    image: string,
    roles: Role[]
  ) {
    this.id = id;
    this.fullname = fullname;
    this.email = email;
    this.image = image;
    this.roles = roles;
  }
}
