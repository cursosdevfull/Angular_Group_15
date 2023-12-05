import { Inject, Injectable } from '@angular/core';

import { StoragePort } from '../domain/ports/storage.port';
import { StorageAdapter } from '../infrastructure/storage.adapter';

@Injectable()
export class StorageApplication {
  constructor(@Inject(StorageAdapter) private readonly port: StoragePort) {}

  save(key: string, value: any): void {
    this.port.save(key, value);
  }

  get(key: string): string | null {
    return this.port.get(key);
  }

  remove(key: string): void {
    this.port.remove(key);
  }

  clear(): void {
    this.port.clear();
  }
}
