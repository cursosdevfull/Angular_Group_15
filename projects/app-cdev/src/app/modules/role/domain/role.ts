export class Role {
  private readonly id: string;
  private readonly name: string;

  constructor(id: string, name: string) {
    this.id = id;
    this.name = name;
  }

  properties() {
    return {
      id: this.id,
      name: this.name,
    };
  }
}
