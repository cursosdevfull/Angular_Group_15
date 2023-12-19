export class Image {
  private readonly typeFile: string;
  private readonly contentType: string;

  constructor(typeFile: string, contentType: string) {
    this.typeFile = typeFile;
    this.contentType = contentType;
  }

  properties() {
    return {
      typeFile: this.typeFile,
      contentType: this.contentType,
    };
  }
}
