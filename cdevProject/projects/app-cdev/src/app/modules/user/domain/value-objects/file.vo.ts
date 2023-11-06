export class FileVO {
  private readonly value: string;

  private constructor(value: string) {
    this.value = value;
  }

  static create(value: string, types: string[]): FileVO {
    if (!types.includes(value.split('.').pop()!))
      throw new Error('File type invalid');

    return new FileVO(value);
  }

  getValue(): string {
    return this.value;
  }
}
