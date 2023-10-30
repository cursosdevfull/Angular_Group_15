export class UserService {
  private list = ['Carlos', 'María', 'Daniela', 'Alberto'];
  //private static instance: UserService;

  constructor() {}

  /*static create() {
    if (!this.instance) {
      this.instance = new UserService();
    }

    return this.instance;
  }*/

  getList() {
    return this.list;
  }

  addUser(user: string) {
    this.list.push(user);
  }

  remove() {
    this.list.pop();
  }
}
