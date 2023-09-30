import Container from 'react-bootstrap/Container';
import { HiMenuAlt2 } from 'react-icons/hi';
import { Nav, Navbar } from 'react-bootstrap';
import CustomButton from './Button';
import { IoDiamondOutline } from "react-icons/io5";
import { Col, Button } from 'react-bootstrap';
import { getWindowDimensions } from '../utils/GlobalFuns';
import logo from '../assets/logo2.png';
import { useContext, useEffect, useState } from 'react';
import { MenuContext } from '../contexts/MenuConnectContext';
import Modals from "./elements/Modals/";
import Sign from "./partials/Form/Sign";
import { useWeb3React } from "@web3-react/core";
import useAuth from "../hooks/useAuth";

function Header() {
  const [windowSize, setWindowSize] = useState(getWindowDimensions());
  const { show, setShow } = useContext(MenuContext);
  const { title, setTitle } = useContext(MenuContext);
  const [modalTitle, setModalTitle] = useState("");
  const [isShow, setIsShow] = useState(false);
  const { account, active } = useWeb3React();
  const { login, logout } = useAuth();

  useEffect(() => {
    setModalTitle("Connect Wallet");
      function handleWindowResize() {
          setWindowSize(getWindowDimensions());
      }
      window.addEventListener('resize', handleWindowResize);
      return () => {
        window.removeEventListener('resize', handleWindowResize);
      };
  }, [])

  const handleHamburger = () => {
    setShow(!show);
  }
  const walletControl = () => {
    if(active)
    {
      logout();
      return;
    }
    setIsShow(true);
  };
  useEffect(() => {
    if(account)
      setIsShow(false);
  }, [account]);
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container className="d-flex align-items-center justify-content-between">
          {
            windowSize.width <= 1024 && <div className="hamburger-area"><Button onClick={handleHamburger} className="btn-hamburger position-relative"><HiMenuAlt2 /></Button></div>
          }
          <Navbar.Brand className="ft-bold ml-4" href="#home">{title}</Navbar.Brand>
          <div className="d-flex gap-2" id="basic-navbar-nav">
              <Nav.Link className="round-1x5 d-flex align-items-center justify-content-center gap-2" href="#home"><img src={logo} width="25"/>$0.0710</Nav.Link>
              <Nav.Link className="round-1x5 d-flex align-items-center justify-content-center gap-2" href="#link"> <IoDiamondOutline />$1,288.79</Nav.Link>
              <CustomButton className="connectWallet" onClick={ walletControl }>
                {account
                  ? account.replace(/(.{4}).*(.{4})/, "$1...$2")
                  : "Connect Wallet"}
              </CustomButton>
          </div>
        </Container>
      </Navbar>
      <Modals show={isShow} title={modalTitle} onHide={() => setIsShow(false)}>
        <Sign onClose={() => setIsShow(false)} />
      </Modals>
    </>
  );
}

export default Header;