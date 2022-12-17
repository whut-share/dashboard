import { gql } from "graphql-tag";

export const GQL_CHAIN_NETWORKS_SELECT = gql`
  query GqlChainNetworksSelect {
    chain_networks {
      default_rpc
      archive_rpc
      key
      type
      block_time
      native_curr_symbol
      image_url
    }
  }
`;
