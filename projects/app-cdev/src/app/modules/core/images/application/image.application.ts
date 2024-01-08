import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ImageRepository } from '../domain/repositories/image.repository';
import { ImageInfrastructure } from '../infrastructure/image.infrastructure';

@Injectable({
  providedIn: 'root',
})
export class ImageApplication {
  constructor(
    @Inject(ImageInfrastructure) private readonly repository: ImageRepository
  ) {}

  uploadFile(file: File): Observable<string> {
    return this.repository.uploadImage(file);
  }
}
