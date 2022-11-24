export interface IDassetsCheckoutSessionPriceEstimation {
  price: number;
  total_eth: number;
  eth_price: number;
  gas_price: number;
  gas: number;
  slippage: number;
}

export interface IDassetsCheckoutSessionAssetInfo {
  id: string;
  name: string;
  description: string | null;
  image_url: string | null;
}

export interface IDassetsCheckoutSession {
  id: string;
  created_at: Date;
  updated_at: Date;
  project: string;
  address: string | null;
  mint_tx: string | null;
  mint_request_id: string | null;
  mint_token_id: number | null;
  payment_id: string | null;
  network: string | null;
  contract_type: string;
  is_succeeded: boolean;
  is_minted: boolean;
  is_payed: boolean;
  is_expired: boolean;
  expires_at: any;
  url: string;
  payment_expires_at: any | null;
  stripe_pi_client_secret?: string | null;

  asset_info: IDassetsCheckoutSessionAssetInfo;
  price_estimation: IDassetsCheckoutSessionPriceEstimation | null;
}
