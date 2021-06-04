import Web3 from 'web3'
import { AbiItem } from 'web3-utils'
import { Contract } from 'web3-eth-contract'
import Token from '../type/Token'

export const getContract = (address: string, abi: AbiItem, web3: Web3): Contract | null => {
  try {
    return new web3.eth.Contract(abi, address)
  } catch (error) {
    console.error('Failed to get contract', error)
    return null
  }
}

export const getTokensFromConfig = async (chainId: number): Promise<Token[]> => {
  const tokens: Token[] = []

  try {
    if (chainId) {
      const response = (await import(`../config/${chainId}.json`)).default as Token[]

      response.forEach(t => {
        tokens.push({
          name: t.name,
          address: t.address,
          symbol: t.symbol,
          decimals: t.decimals,
          logoURI: t.logoURI,
        })
      })
    }
  } catch (error) {
    console.error(error)
  }
  return tokens
}