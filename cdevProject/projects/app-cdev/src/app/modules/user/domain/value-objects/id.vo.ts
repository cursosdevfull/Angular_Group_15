import { validate } from 'uuid';

export class IdVO {
  private readonly value: string;

  private constructor(value: string) {
    this.value = value;
  }

  static create(value: string): IdVO {
    if (!validate(value)) throw new Error('Id must be a valid uuid');

    return new IdVO(value);
  }

  getValue(): string {
    return this.value;
  }
}
