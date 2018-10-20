import { StorageSpace } from './storage-space';

export interface Transaction {
  start_date: Date;
  end_date: Date;
  description: String;
  client_id: string;
  stash_id: string;
  boxes: StorageSpace[];
}
