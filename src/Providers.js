import React from "react";

import { Web3ReactProvider } from "@web3-react/core";
import { getLibrary } from "./utils/web3React";
import { ToastsProvider } from "./contexts/ToastsContext";



const Providers = ({ children }) => {
  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <ToastsProvider>
        {children}
      </ToastsProvider>
    </Web3ReactProvider>
  );
};

export default Providers;
