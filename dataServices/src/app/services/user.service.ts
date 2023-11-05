export class UserService {
  private static instance: UserService;

  users = [
    { name: 'John', age: 25 },
    { name: 'Jane', age: 24 },
    { name: 'Jack', age: 26 },
  ];

  constructor() {
    console.log('UserService created', new Date().getTime());
  }

  /*static create() {
    console.log('UserService.create() called', new Date().getTime());
    if (!UserService.instance) {
      UserService.instance = new UserService();
      console.log('UserService instance created', new Date().getTime());
    }

    return UserService.instance;
  }*/

  getUsers() {
    return this.users;
  }

  addUser(user: { name: string; age: number }) {
    this.users.push(user);
  }
}
