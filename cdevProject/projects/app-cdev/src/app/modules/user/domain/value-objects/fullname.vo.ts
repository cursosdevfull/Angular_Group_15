export class FullnameVO {
  private readonly value: string;

  private constructor(value: string) {
    this.value = value;
  }

  static create(value: string): FullnameVO {
    if (value.length < 5) throw new Error('Fullname must have at 5 characters');

    return new FullnameVO(value);
  }

  getValue(): string {
    return this.value;
  }
}
