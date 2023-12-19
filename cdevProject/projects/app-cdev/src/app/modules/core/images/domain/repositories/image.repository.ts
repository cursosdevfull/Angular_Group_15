import { Observable } from 'rxjs';

export interface ImageRepository {
  uploadImage(file: File): Observable<string>;
}
