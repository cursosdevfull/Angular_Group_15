export interface StoragePort {
  save(key: string, value: any): void;
  get(key: string): string | null;
  remove(key: string): void;
  clear(): void;
}
