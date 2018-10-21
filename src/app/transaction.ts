export interface Transaction {
  client_id: string;
  stash_id: string;
  address: string;
  description: string;
  start_date: string;
  end_date: string;
  boxes: number;
}
