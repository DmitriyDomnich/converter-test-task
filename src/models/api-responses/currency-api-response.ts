export interface CurrencyApiResponse {
  base_code: string;
  time_next_update_unix: number;
  conversion_rates: Record<string, number>;
}
