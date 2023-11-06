export class PasswordVO {
  private readonly value: string;

  private constructor(value: string) {
    this.value = value;
  }

  static create(value: string): PasswordVO {
    if (!value.match(/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}/))
      throw new Error('Password invalid');

    return new PasswordVO(value);
  }

  getValue(): string {
    return this.value;
  }
}
