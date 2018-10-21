import { StorageSpace } from './storage-space';

export interface User {
  id: string;
  name: string;
  billingAddress: string;
  email: string;
  rating: number;
  availability: number;
}
