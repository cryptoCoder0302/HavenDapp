import React, { createContext, useEffect, useState } from 'react';
import { useWeb3React } from "@web3-react/core";
import { BGS } from '../../contracts';

export const Context = createContext({
  bgs: undefined,
});

const BgsProvider = ({ children }) => {
  const {  connector,
    library,
    chainId,
    account,
    activate,
    deactivate,
    active,
    error,} = useWeb3React();
  
  const  [ethereum, setEthereum] = useState();
  const [bgs, setBgs] = useState();

  window.bgs = bgs;
  window.eth = ethereum;
 
  useEffect(() => {
      if(library)
        setEthereum(library.provider);
  }, [library]);

  useEffect(() => {
    if (ethereum) {
      const chainId = Number(ethereum.chainId);
      const bgsLib = new BGS(ethereum, chainId, false, {
        defaultAccount: ethereum.selectedAddress,
        defaultConfirmations: 1,
        autoGasMultiplier: 1.5,
        testing: false,
        defaultGas: '6000000',
        defaultGasPrice: '1000000000000',
        accounts: [],
        ethereumNodeTimeout: 10000,
      });
      setBgs(bgsLib);
      window.bgssauce = bgsLib;
    }
  }, [ethereum, library]);

  return <Context.Provider value={{ bgs }}>{children}</Context.Provider>
}

export default BgsProvider;
