import { v4 as uuidv4 } from 'uuid';

import { Role } from '../../domain/entities/role';
import { User } from '../../domain/roots/user';
import { UserFactory } from '../../domain/roots/user.factory';
import { Welcome5 } from '../user.infrastructure';

export class UserDto {
  static fromDataToDomain(data: Welcome5[]): User[] {
    return data.map((el: Welcome5) =>
      UserFactory.create({
        id: uuidv4(),
        fullname: el.name,
        email: el.email,
        password: 'Prueba123456',
        image: 'photo.jpg',
        roles: [new Role('abc'), new Role('efg')],
        gender: 'MALE',
      })
    );
  }
}
