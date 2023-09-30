import { useCallback, useEffect, useState } from 'react';
import BigNumber from 'bignumber.js';
import { useWeb3React } from "@web3-react/core";
import {
  getFarmContract,
  getWethContract,
  getFarms,
  getTotalLPWethValue,
  getBnbBusdContract,
  getBusdContract,
  getPoolApr,
  getBgsTokenPriceInUsd,
  getERC20Contract,
  getBnbPrice
} from '../contracts/utils';
import useBgs from './useBgs';
import useBlock from './useBlock';


const useAllStakedValue = () => {
  const [balances, setBalance] = useState([]);
  const { account } = useWeb3React();
  const bgs = useBgs();
  const farms = getFarms(bgs);
  const farmContract = getFarmContract(bgs);
  const wethContact = getWethContract(bgs);
  const bnbbusdContract = getBnbBusdContract(bgs);
  const busdContract = getBusdContract(bgs);
  const bgsContract = getERC20Contract(bgs);
  const [bgsPrice, setBgsPrice] = useState();

  const block = useBlock();

  const fetchAllStakedValue = useCallback(async () => {
    const bgsPool = farms.filter((farm) => farm.pid === 0);
      console.log('bgsPool = ', bgsPool)
    const bPrice = await  getBgsTokenPriceInUsd(bgsContract,wethContact,bgsPool[0].lpContract, bgs)
    setBgsPrice(bPrice);
     
    const balances = await Promise.all(
      farms.map(
        ({
          pid,
          lpContract,
          tokenContract,
        }) =>
          getTotalLPWethValue(
            farmContract,
            wethContact,
            lpContract,
            tokenContract,
            bnbbusdContract, wethContact, busdContract,
            pid,
            account
          ),
      ),
    );
    const balancesWithApr = balances.map((farm) => {
     
      
      console.log("bgsPrice = ", bgsPrice.toString());

      const apr = getPoolApr(  farm.lpTotalSupply === "0"
      ? new BigNumber(10 ** 100)
      : bgsPrice
          .times(new BigNumber(farm.tokenAmountTotal))
          .times(new BigNumber(2))
          .div(new BigNumber(farm.lpTotalSupply)),
          bgsPrice,
          farm.lpTokenRatio,
          new BigNumber(farm.earningsPerBlock),
          new BigNumber(farm.poolWeight)
          );
      return {...farm, apr}

    });

    setBalance(balancesWithApr);
  }, [ farmContract, farms, wethContact]);

  useEffect(() => {
    if (account && farmContract && bgs) {
      fetchAllStakedValue()
    }
    let refreshInterval = setInterval(fetchAllStakedValue, 100000);
    return () => clearInterval(refreshInterval);
  }, [account, block, farmContract, setBalance, bgs, fetchAllStakedValue])
  console.log("balances = ", balances);
  return balances;
}

export default useAllStakedValue;
