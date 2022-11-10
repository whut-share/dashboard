import { gql } from "graphql-tag";

export const GQL_DASSETS_CHECKOUT_SESSIONS_UPDATE_ONE = gql`
  mutation GqlDassetsCheckoutSessionsUpdateOne(
    $id: ObjectId!
    $data: IDassetsCheckoutSessionUpdate!
  ) {
    dassetsCheckoutSessionUpdate(data: $data, id: $id) {
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
