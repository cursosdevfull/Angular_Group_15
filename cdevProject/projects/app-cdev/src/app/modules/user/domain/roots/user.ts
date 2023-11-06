import { Role } from '../entities/role';

export type Roles = Role[];

export interface UserEssentials {
  readonly id: string;
  readonly fullname: string;
  readonly email: string;
  readonly password: string;
  readonly roles: Roles;
  readonly image: string;
}

export interface UserOptionals {
  readonly refreshToken: string;
  readonly gender: GENDER;
}

export type UserProperties = UserEssentials & Partial<UserOptionals>;
export type GENDER = 'MALE' | 'FEMALE';

export class User {
  private readonly id: string;
  private fullname: string;
  private readonly email: string;
  private password: string;
  private refreshToken: string;
  private roles: Roles;
  private gender: GENDER;
  private image: string;

  constructor(properties: UserProperties) {
    Object.assign(this, properties);
  }

  properties(): UserProperties {
    return Object.assign({}, this) as unknown as UserProperties;
  }
}

/*const userProperties: UserProperties = {
  id: 'abc',
  fullname: 'José Pérez',
  email: 'carlo@correo.com',
  password: 'Prueba123456',
  refreshToken: 'abc123',
  roles: [new Role('abc'), new Role('efg')],
  gender: 'MALE',
};
//const user = new User(userProperties)
const user = UserFactory.create(userProperties);

const properties = user.properties();
console.log(properties);

console.log(user);*/
