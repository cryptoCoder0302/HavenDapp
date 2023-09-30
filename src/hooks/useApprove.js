import { useCallback } from 'react';
import useBgs from './useBgs';
import { useWeb3React } from "@web3-react/core";
import { approve, getFarmContract } from '../contracts/utils';

const useApprove = (lpContract = null, farmContract = null) => {
 
  const {  connector,
    library,
    chainId,
    account,
    activate,
    deactivate,
    active,
    error,} = useWeb3React();
  const bgs = useBgs();
  if(farmContract === null)
   farmContract = getFarmContract(bgs);

  const handleApprove = useCallback(async () => {
    try {
      const tx = await approve(lpContract, farmContract, account);
      return tx;
    } catch (e) {
      return false;
    }
  }, [account, lpContract, farmContract]);

  return { onApprove: handleApprove };
}

export default useApprove;
