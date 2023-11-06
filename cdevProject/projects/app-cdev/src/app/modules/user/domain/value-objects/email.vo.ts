export class EmailVO {
  private readonly value: string;

  private constructor(value: string) {
    this.value = value;
  }

  static create(value: string): EmailVO {
    if (!value.match(/[\w-\.]+@([\w-]+\.)+[\w-]{2,4}/))
      throw new Error('Email invalid');

    return new EmailVO(value);
  }

  getValue(): string {
    return this.value;
  }
}
