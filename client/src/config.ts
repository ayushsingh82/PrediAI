import { createPublicClient, createWalletClient, http, custom } from 'viem'
import { privateKeyToAccount } from 'viem/accounts'
import { seiTestnet } from 'viem/chains'

// Sei Testnet configuration
export const seiTestnetTry = {
  id: 1328,
  name: 'Sei Testnet',
  network: 'sei-testnet',
  nativeCurrency: {
    decimals: 18,
    name: 'SEI',
    symbol: 'SEI',
  },
  rpcUrls: {
    default: {
      http: ['https://evm-rpc-testnet.sei-apis.com'],
    },
    public: {
      http: ['https://evm-rpc-testnet.sei-apis.com'],
    },
  },
  blockExplorers: {
    default: { name: 'Sei Explorer', url: 'https://testnet.sei.io/explorer' },
  },
  testnet: true,
}

// Public client
export const publicClient = createPublicClient({
  chain: seiTestnet,
  transport: http()
})

// Wallet client
export const walletClient = createWalletClient({
  chain: seiTestnet,
  transport: custom(window.ethereum)
})

// Get Wallet Client function
export const getWalletClient = () => {
  if (typeof window !== 'undefined' && window.ethereum) {
    return createWalletClient({
      chain: seiTestnet,
      transport: custom(window.ethereum),
      account: window.ethereum.selectedAddress
    })
  }
  return null
}

// Chain configuration for wallet connection
export const chainConfig = {
  chainId: '0x530', // 1328 in hex
  chainName: 'Sei Testnet',
  nativeCurrency: {
    name: 'SEI',
    symbol: 'SEI',
    decimals: 18
  },
  rpcUrls: ['https://evm-rpc-testnet.sei-apis.com'],
  blockExplorerUrls: ['https://testnet.sei.io/explorer']
}

// JSON-RPC Account
// export const [account] = await walletClient.getAddresses()

// Local Account
export const account = privateKeyToAccount('0xdf57089febbacf7ba0bc227dafbffa9fc08a93fdc68e1e42411a14efcf23656e')


