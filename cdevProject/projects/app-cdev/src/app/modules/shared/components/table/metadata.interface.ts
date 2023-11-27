export interface Metadata {
  field: string;
  label: string;
  transform?: { name: string; parameter?: any };
}

export type Metadatas = Metadata[];
