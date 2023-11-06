import { Roles } from '../roots/user';

export class RolesVO {
  private readonly value: Roles;

  private constructor(value: Roles) {
    this.value = value;
  }

  static create(value: Roles): RolesVO {
    if (value.length < 1) throw new Error('Roles must have at least 1 role');

    return new RolesVO(value);
  }

  getValue(): Roles {
    return this.value;
  }
}
