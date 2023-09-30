import React from "react";
import Button from "../../../elements/Button";

import Metamask from "../../../icons/Metamask";
import TrustWallet from "components/icons/TrustWallet";
import useAuth from "../../../../hooks/useAuth";
import { SigningKey } from "ethers/lib/utils";
const SignIn = (props) =>  {
  const { login, logout } = useAuth();
  return (
    <div>
      <div className="d-flex gap-3 flex-column">
        <div className="d-flex w-100 flex-row align-items-center justify-content-around wallet-btn" onClick={()=>{login('injected');}}>
          <Metamask width="50" />
          <div className="me-2 fs-4 wallet-gradient-txt bg-clip-text fw-semibold">Metamask</div>
        </div>
        <div className="d-flex flex-row align-items-center justify-content-around wallet-btn" onClick={()=>{login('walletconnect');}}>
          <TrustWallet width="50" />
          <div className="me-2 fs-4 wallet-gradient-txt bg-clip-text fw-semibold">Trust Wallet</div>
        </div>
      </div>
    </div>
  );
}
export default SignIn;