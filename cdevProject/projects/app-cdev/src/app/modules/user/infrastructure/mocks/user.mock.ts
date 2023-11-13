import { v4 as uuidv4 } from 'uuid';

import { Role } from '../../domain/entities/role';
import { User } from '../../domain/roots/user';

export class UserMock {
  private static users: User[] = [
    new User({
      id: uuidv4(),
      fullname: 'José Pérez',
      email: 'carlo@correo.com',
      password: 'Prueba123456',
      image: 'photo.jpg',
      roles: [new Role('abc'), new Role('efg')],
      gender: 'MALE',
    }),
    new User({
      id: uuidv4(),
      fullname: 'Carla Sotomayor',
      email: 'carla@correo.com',
      password: 'Prueba123456',
      image: 'photo.jpg',
      roles: [new Role('abc'), new Role('efg')],
      gender: 'FEMALE',
    }),
    new User({
      id: uuidv4(),
      fullname: 'Javier Cueto',
      email: 'javier@correo.com',
      password: 'Prueba123456',
      image: 'photo.jpg',
      roles: [new Role('abc'), new Role('efg')],
      gender: 'MALE',
    }),
    new User({
      id: uuidv4(),
      fullname: 'Lucía Salas',
      email: 'lucia@correo.com',
      password: 'Prueba123456',
      image: 'photo.jpg',
      roles: [new Role('abc'), new Role('efg')],
      gender: 'FEMALE',
    }),
  ];

  static async add(user: User): Promise<User> {
    this.users.push(user);
    return Promise.resolve(user);
  }

  static async getAll(): Promise<User[]> {
    //return Promise.resolve(Object.assign([], this.users))
    return Promise.resolve([...this.users]);
  }
}
