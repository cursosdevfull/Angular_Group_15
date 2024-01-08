export class Auth {
  constructor(private email: string, private password: string) {
    if (!email.match(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/)) {
      throw new Error('Email invalid');
    }
  }

  properties() {
    return {
      email: this.email,
      password: this.password,
    };
  }
}
