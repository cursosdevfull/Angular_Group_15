import { StoragePort } from '../domain/ports/storage.port';

export class StorageAdapter implements StoragePort {
  save(key: string, value: any): void {
    sessionStorage.setItem(key, value);
  }
  get(key: string): string | null {
    return sessionStorage.getItem(key);
  }
  remove(key: string): void {
    sessionStorage.removeItem(key);
  }
  clear(): void {
    sessionStorage.clear();
  }
}
