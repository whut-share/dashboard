import { gql } from "graphql-tag";

export const GQL_CHAIN_NETWORKS_SELECT = gql`
  query GqlChainNetworksSelect {
    chain_networks {
      id
      default_rpc
      archive_rpc
      type
      block_time
      native_curr_symbol
      icon_url
      scan_url
    }
  }
`;
