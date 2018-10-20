import { StorageSpace } from './storage-space';

export interface User {
  id: string;
  payment: String;
  name: String;
  billingAddress: String;
  email: String;
  rating: number;
  availability: StorageSpace[];
}
