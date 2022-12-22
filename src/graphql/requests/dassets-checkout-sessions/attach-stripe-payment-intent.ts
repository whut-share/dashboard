import { gql } from "graphql-tag";

export const GQL_MINTER_CHECKOUT_SESSIONS_ATTACH_STRIPE_PAYMENT_INTENT = gql`
  mutation GqlMinterCheckoutSessionsAttachStripePaymentIntent($id: ObjectId!) {
    minterCheckoutSessionAttachStripePaymentIntent(id: $id) {
      id
      created_at
      updated_at
      project
      address
      mint_tx
      mint_request_id
      mint_token_id
      payment_id
      network
      contract_type
      is_succeeded
      is_minted
      is_payed
      is_expired
      expires_at
      url
      payment_expires_at
      stripe_pi_client_secret
      price_estimation {
        price
        total_eth
        eth_price
        gas_price
        gas
        slippage
      }
      asset_info {
        id
        name
        description
        image_url
      }
    }
  }
`;
