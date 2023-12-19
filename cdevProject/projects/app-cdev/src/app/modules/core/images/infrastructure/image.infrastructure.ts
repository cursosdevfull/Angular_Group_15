import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { mergeMap, Observable, of } from 'rxjs';

import environment from '../../../../../assets/config/enviroment.json';
import { ImageRepository } from '../domain/repositories/image.repository';

@Injectable({
  providedIn: 'root',
})
export class ImageInfrastructure implements ImageRepository {
  constructor(private readonly http: HttpClient) {}

  uploadImage(file: File): Observable<string> {
    let path = '';
    return this.http
      .get<{ url: string; filename: string }>(
        `${environment.apiUrl}/v1/helpers/generate-url-presigned?typeFile=image-user&contentType=jpeg`,
        {}
      )
      .pipe(
        mergeMap((data: any) => {
          path += data.filename;
          const url = data.url;

          return this.http.put(url, file, {
            headers: { 'Content-Type': 'image/jpeg' },
          });
        }),
        mergeMap(() => {
          return of(path);
        })
      );
  }
}
