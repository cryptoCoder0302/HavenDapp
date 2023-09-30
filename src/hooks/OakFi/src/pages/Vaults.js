import { useState } from "react";
import { Col, Row } from "react-bootstrap";
import { FaAngleDown, FaAngleUp } from 'react-icons/fa'
import search from '../assets/search.png';
import SwitchToggle from "../components/SwitchToggle";
import angleDown from '../assets/angle-down.png';
import angleUp from '../assets/angle-up.png';
import USDTToUSDC from '../assets/USDT-USDC.png';
import POLYToBNB from '../assets/POLY-BNB.png';
import ATOMToWAVES from '../assets/ATOM-WAVES.png';
import USDTToUSDC1 from '../assets/USDT-USDC(1).png';
import USDTToETH from '../assets/USDT-ETH.png';
import USDTToBTC from '../assets/USDT-BTC.png';
import USDTToAPEX from '../assets/USDT-APEX.png';
import '../sass/vaults.scss';
import { Link } from "react-router-dom";
const Vaults = () => {

    const [triggerFlag, setTriggerFlag] = useState(false);

    const handleTrigger = () => {
        setTriggerFlag(!triggerFlag);
    }
    return (
        <div className="vaults mt-4 px-4">
            <Row className="d-flex justify-content-center m-0 w-100">
                <Col lg={9} md={12} sm={12}>
                    <Row className="">
                        <Col lg={7} md={7} sm={12} className="position-relative search-input pt-2">
                            <input type="text" placeholder="Search vaults" className="fw-500 border-0 w-100 rounded-1 bgDivColor fs-14 grey300"/>
                            <img src={search} className="position-absolute" />
                        </Col>
                        <Col lg={5} md={5} sm={12}>
                            <div className="d-flex justify-content-end gap-3 pt-2">
                                <span className="fw-500 m-0">Hide zero balances</span>
                                <SwitchToggle className="" onClick={handleTrigger} />
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={7} md={7} sm={12} className="d-flex justify-content-between align-items-center mt-4 flex-wrap">
                            <button className="rounded-1 fw-500 bgDarkDivColor white-color py-1 px-2 mt-2">Filters:</button>
                            <button className="d-inline-flex align-items-center gap-2 rounded-1 bgDivColor fw-500 fs-14 py-1 px-2 mt-2">
                                <span className="grey300">Platform:</span>
                                <span className="white-color">All</span>
                                <FaAngleDown />
                            </button>
                            <button className="d-inline-flex align-items-center gap-2 rounded-1 bgDivColor fw-500 fs-14 py-1 px-2 mt-2">
                                <span className="grey300">Vault type:</span>
                                <span className="white-color">Stable LPs</span>
                                <FaAngleDown />
                            </button>
                            <button className="d-inline-flex align-items-center gap-2 rounded-1 bgDivColor fw-500 fs-14 py-1 px-2 mt-2">
                                <span className="grey300">Asset:</span>
                                <span className="white-color">All</span>
                                <FaAngleDown />
                            </button>
                        </Col>
                    </Row>
                    <div className="py-3 token-tbl">
                        <div className="d-flex flex-column gap-3 content px-3">
                            <Row className="d-flex justify-content-between bgDarkDivColor fs-12 fw-500 rounded-3 py-3 px-2">
                                <Col lg={3} md={3}>
                                    <div className="d-flex align-items-center justify-content-start gap-2">
                                        <div>VAULT</div>
                                        <div className="d-inline-flex flex-column">
                                            <FaAngleUp />
                                            <FaAngleDown />
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={2} md={2} className="d-flex align-items-center justify-content-center gap-2">
                                    WALLET
                                    <div className="d-inline-flex flex-column">
                                        <FaAngleUp />
                                        <FaAngleDown />
                                    </div>
                                </Col>
                                <Col lg={2} md={2} className="d-flex align-items-center justify-content-center gap-2">
                                    DEPOSITED
                                    <div className="d-inline-flex flex-column">
                                        <FaAngleUp />
                                        <FaAngleDown />
                                    </div>
                                </Col>
                                <Col lg={2} md={2} className="d-flex align-items-center justify-content-center gap-2">
                                    APY
                                    <div className="d-inline-flex flex-column">
                                        <FaAngleUp />
                                        <FaAngleDown />
                                    </div>
                                </Col>
                                <Col lg={2} md={2} className="d-flex align-items-center justify-content-center gap-2">
                                    DAILY
                                    <div className="d-inline-flex flex-column">
                                        <FaAngleUp />
                                        <FaAngleDown />
                                    </div> 
                                </Col>
                                <Col lg={1} md={1} className="d-flex align-items-center justify-content-start gap-2">
                                    TVL
                                    <div className="d-inline-flex flex-column">
                                        <FaAngleUp />
                                        <FaAngleDown />
                                    </div>
                                </Col>
                            </Row>
                            <Link to="/app/approve">
                                <Row className="d-flex justify-content-between align-items-center cursor-pointer bgDivColor fw-500 rounded-3 py-3 px-2" >
                                    <Col lg={3} md={3}>
                                        <div className="d-flex justify-content-start align-items-center gap-2">
                                            <img src={USDTToUSDC} />
                                            <div>
                                                <p className="m-0 fw-500 grey300 fs-12">Platform: MojitoSwap</p>
                                                <p className="m-0 fw-500">USDT - USDC LP</p>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col lg={2} md={2}>
                                        0
                                    </Col>
                                    <Col lg={2} md={2}>
                                        0
                                    </Col>
                                    <Col lg={2} md={2}>
                                        33.06%
                                    </Col>
                                    <Col lg={2} md={2}>
                                        0.078%
                                    </Col>
                                    <Col lg={1} md={1}  className="d-flex justify-content-start">
                                        <div>
                                            $1.83K
                                        </div>
                                    </Col>
                                </Row>
                            </Link>
                            <Row className="d-flex justify-content-between align-items-center cursor-pointer bgDivColor fw-500 rounded-3 py-3 px-2">
                                <Col lg={3} md={3}>
                                    <div className="d-flex justify-content-start align-items-center gap-2">
                                        <img src={POLYToBNB} />
                                        <div>
                                            <p className="m-0 fw-500 grey300 fs-12">Platform: MojitoSwap</p>
                                            <p className="m-0 fw-500">POLY - BNB LP</p>
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={2} md={2}>
                                    0
                                </Col>
                                <Col lg={2} md={2}>
                                    0
                                </Col>
                                <Col lg={2} md={2}>
                                    33.06%
                                </Col>
                                <Col lg={2} md={2}>
                                    0.078%
                                </Col>
                                <Col lg={1} md={1} >
                                    $1.83K
                                </Col>
                            </Row>
                            <Row className="d-flex justify-content-between align-items-center cursor-pointer bgDivColor fw-500 rounded-3 py-3 px-2">
                                <Col lg={3} md={3}>
                                    <div className="d-flex justify-content-start align-items-center gap-2">
                                        <img src={ATOMToWAVES} />
                                        <div>
                                            <p className="m-0 fw-500 grey300 fs-12">Platform: MojitoSwap</p>
                                            <p className="m-0 fw-500">ATOM - WAVES LP</p>
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={2} md={2}>
                                    0
                                </Col>
                                <Col lg={2} md={2}>
                                    0
                                </Col>
                                <Col lg={2} md={2}>
                                    33.06%
                                </Col>
                                <Col lg={2} md={2}>
                                    0.078%
                                </Col>
                                <Col lg={1} md={1} >
                                    $1.83K
                                </Col>
                            </Row>
                            <Row className="d-flex justify-content-between align-items-center cursor-pointer bgDivColor fw-500 rounded-3 py-3 px-2">
                                <Col lg={3} md={3}>
                                    <div className="d-flex justify-content-start align-items-center gap-2">
                                        <img src={USDTToUSDC1} />
                                        <div>
                                            <p className="m-0 fw-500 grey300 fs-12">Platform: MojitoSwap</p>
                                            <p className="m-0 fw-500">USDT-USDC LP</p>
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={2} md={2}>
                                    0
                                </Col>
                                <Col lg={2} md={2}>
                                    0
                                </Col>
                                <Col lg={2} md={2}>
                                    33.06%
                                </Col>
                                <Col lg={2} md={2}>
                                    0.078%
                                </Col>
                                <Col lg={1} md={1} >
                                    $1.83K
                                </Col>
                            </Row>
                            <Row className="d-flex justify-content-between align-items-center cursor-pointer bgDivColor fw-500 rounded-3 py-3 px-2">
                                <Col lg={3} md={3}>
                                    <div className="d-flex justify-content-start align-items-center gap-2">
                                        <img src={USDTToETH} />
                                        <div>
                                            <p className="m-0 fw-500 grey300 fs-12">Platform: MojitoSwap</p>
                                            <p className="m-0 fw-500">USDT - ETH LP</p>
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={2} md={2}>
                                    0
                                </Col>
                                <Col lg={2} md={2}>
                                    0
                                </Col>
                                <Col lg={2} md={2}>
                                    33.06%
                                </Col>
                                <Col lg={2} md={2}>
                                    0.078%
                                </Col>
                                <Col lg={1} md={1} >
                                    $1.83K
                                </Col>
                            </Row>
                            <Row className="d-flex justify-content-between align-items-center cursor-pointer bgDivColor fw-500 rounded-3 py-3 px-2">
                                <Col lg={3} md={3}>
                                    <div className="d-flex justify-content-start align-items-center gap-2">
                                        <img src={USDTToBTC} />
                                        <div>
                                            <p className="m-0 fw-500 grey300 fs-12">Platform: MojitoSwap</p>
                                            <p className="m-0 fw-500">USDT - BTC LP</p>
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={2} md={2}>
                                    0
                                </Col>
                                <Col lg={2} md={2}>
                                    0
                                </Col>
                                <Col lg={2} md={2}>
                                    33.06%
                                </Col>
                                <Col lg={2} md={2}>
                                    0.078%
                                </Col>
                                <Col lg={1} md={1} >
                                    $1.83K
                                </Col>
                            </Row>
                            <Row className="d-flex justify-content-between align-items-center cursor-pointer bgDivColor fw-500 rounded-3 py-3 px-2">
                                <Col lg={3} md={3}>
                                    <div className="d-flex justify-content-start align-items-center gap-2">
                                        <img src={USDTToAPEX} />
                                        <div>
                                            <p className="m-0 fw-500 grey300 fs-12">Platform: MojitoSwap</p>
                                            <p className="m-0 fw-500">USDT - APEX LP</p>
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={2} md={2}>
                                    0
                                </Col>
                                <Col lg={2} md={2}>
                                    0
                                </Col>
                                <Col lg={2} md={2}>
                                    33.06%
                                </Col>
                                <Col lg={2} md={2}>
                                    0.078%
                                </Col>
                                <Col lg={1} md={1} >
                                    $1.83K
                                </Col>
                            </Row>
                        </div>
                    </div>
                </Col>
            </Row>
        </div>
    )
}
export default Vaults;