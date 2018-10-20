import { StorageSpace } from './storage-space';

export interface Transaction {
  start_date: Date;
  end_date: Date;
  client_id: string;
  stash_id: string;
  boxes: StorageSpace[];
}
