import { Col, Row } from 'react-bootstrap';
import cls from 'classnames';
import { useRef, useState } from 'react';
import { FaAngleDown, FaAngleLeft, FaExternalLinkAlt } from 'react-icons/fa';
import ProgressBar from 'react-bootstrap/ProgressBar';
import CButton from '../components/CButton';
import USDTToUSDC from '../assets/Frame 571.png';
import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import useWindowDimensions from '../hooks/useWindowDimensions';
import AreaChart from '../components/AreaChart';

import '../sass/approve.scss';
import { Link } from 'react-router-dom';
const Approve = () => {

    const { height, width } = useWindowDimensions();
    const [activeFlag, setActiveFlag] = useState("Deposit");
    const handleLPButton = (val) => {
        setActiveFlag(val);
    }
    const cryptoData = {};
    return (
        <div className="approve my-4 px-4">
            <Row className="d-flex justify-content-center m-0 w-100">
                <Col lg={9} md={12} sm={12}>
                    <div className='d-flex align-items-center pt-2 pb-5 gap-1'>
                        <FaAngleLeft />
                        <Link to="/app/vaults"><span className='fw-500 ff-inter'>Back to all vaults</span></Link>
                    </div>
                    <div className='d-flex flex-column gap-4'>
                        <Row className={cls('d-flex', 'rounded-3', 'bgDivColor', 'p-4', width<768?'gap-2':'')}>
                            <Col lg={6} md={6} sm={12} className='d-flex align-items-start justify-content-start gap-2'>
                                <img src={USDTToUSDC} />
                                <div className='d-flex flex-column align-items-start'>
                                <p className='fw-500 fs-4 m-0'>USDT-USDC LP</p> 
                                <div className='d-flex align-items-center gap-2'>
                                    <p className='fw-500 fs-14 ff-inter'><span className='grey300'>Chain:</span> KCC Chain</p>  
                                    <p className='fw-500 fs-14 ff-inter'><span className='grey300'>Platform:</span> MojitoSwap</p>  
                                </div>
                                <div className='d-flex gap-2'>
                                        <div className='d-flex align-items-center gap-1'>
                                            <FaExternalLinkAlt />
                                            <span className='fw-500'>Buy Token</span>
                                        </div>
                                        <div className='d-flex align-items-center gap-1'>
                                            <FaExternalLinkAlt />
                                            <span className='fw-500'>Add Liquidity</span>
                                        </div>
                                </div>
                                </div>
                            </Col>
                            <Col lg={6} md={6} sm={12} className="d-flex justify-content-end align-items-center text-start gap-3">
                                <div>
                                    <p className="fs-12 m-0">DEPOSITED</p>
                                    <p className="fs-5 m-0">$0.00</p>
                                </div>
                                <div>
                                    <p className="fs-12 m-0">MONTHLY YIELD</p>
                                    <p className="fs-5 m-0">$0.00</p>
                                </div>
                                <div>
                                    <p className="fs-12 m-0">DAILY YIELD</p>
                                    <p className="fs-5 m-0">$0.00</p>
                                </div>
                                <div>
                                    <p className="fs-12 m-0">AVG APY</p>
                                    <p className="fs-5 m-0">0%</p>
                                </div>
                            </Col> 
                        </Row>
                        <Row className={cls(width<768?'gap-3':'')}>
                            <Col lg={5} md={5} sm={12} className="ps-0">
                                <div className='bgDivColor p-3 rounded-3'>
                                    <div className='bgBlueColor rounded-5 payment-type p-1'>
                                        <button className={cls('rounded-5', 'fw-500', 'w-50', activeFlag=='Deposit'?'active':'')} onClick={() =>handleLPButton('Deposit')}>Deposit</button>
                                        <button className={cls('rounded-5', 'fw-500', 'w-50', activeFlag=='Withdraw'?'active':'')} onClick={() => handleLPButton('Withdraw')}>Withdraw</button>
                                    </div>
                                    <p className='my-3 fw-500 text-start'>Deposit your LP</p>  
                                    <div className='mb-3'>
                                        <div className='d-flex justify-content-between fs-12'>
                                            <p className='m-0'>Balance: 50 USDT-USDC LP</p>
                                            <p className='lightGreen m-0'>Max</p>
                                        </div>
                                        <div className='d-flex justify-content-between align-items-center rounded-2 bgBlueColor px-3 py-2'>
                                            <div>
                                                <span className='fs-14 fw-light'>USDT-USDC LP</span>
                                                <FaAngleDown />
                                            </div>
                                            <span className='fs-14 black200'>12.5.00</span>
                                        </div>
                                    </div>
                                    <div className='progress-area py-3 position-relative'>
                                        <ProgressBar>
                                            <ProgressBar className='progress-item active' now={25} key={1} />
                                            <ProgressBar className='progress-item' now={25} key={2} />
                                            <ProgressBar className='progress-item' now={25} key={3} />
                                            <ProgressBar className='progress-item' now={25} key={4} />
                                        </ProgressBar>
                                        <div className='circle-items d-flex justify-content-between align-items-center'>
                                            <OverlayTrigger
                                                placement={'bottom'}
                                                overlay={
                                                    <Tooltip id={`tooltip-${'bottom'}`}>
                                                    0%
                                                    </Tooltip>
                                                }
                                                >
                                                <Button variant="secondary" className="tooltip-btn"><div className="circle active"></div></Button>
                                            </OverlayTrigger>
                                            <OverlayTrigger
                                                placement={'bottom'}
                                                overlay={
                                                    <Tooltip id={`tooltip-${'bottom'}`}>
                                                    25%
                                                    </Tooltip>
                                                }
                                                >
                                                <Button variant="secondary" className="tooltip-btn"><div className="circle active"></div></Button>
                                            </OverlayTrigger>
                                            <OverlayTrigger
                                                placement={'bottom'}
                                                overlay={
                                                    <Tooltip id={`tooltip-${'bottom'}`}>
                                                    50%
                                                    </Tooltip>
                                                }
                                                >
                                                <Button variant="secondary" className="tooltip-btn"><div className="circle"></div></Button>
                                            </OverlayTrigger>
                                            <OverlayTrigger
                                                placement={'bottom'}
                                                overlay={
                                                    <Tooltip id={`tooltip-${'bottom'}`}>
                                                    75%
                                                    </Tooltip>
                                                }
                                                >
                                                <Button variant="secondary" className="tooltip-btn"><div className="circle"></div></Button>
                                            </OverlayTrigger>
                                            <OverlayTrigger
                                                placement={'bottom'}
                                                overlay={
                                                    <Tooltip id={`tooltip-${'bottom'}`}>
                                                    100%
                                                    </Tooltip>
                                                }
                                                >
                                                <Button variant="secondary" className="tooltip-btn"><div className="circle"></div></Button>
                                            </OverlayTrigger>
                                        </div>
                                    </div>
                                    <div className='my-4'>
                                        <CButton className="ff-inter w-100">{activeFlag}</CButton>
                                    </div>
                                    <div className='rounded-3 bgBlueColor p-3'>
                                        <Row>
                                            <Col lg={12} md={12} sm={12} className="text-start">
                                                <p className='fw-500'>Oak Fees</p>
                                                <Row className='fw-light fs-12'>
                                                    <Col lg={6} md={6} sm={6}>
                                                        <span>Deposit fee</span>
                                                    </Col>
                                                    <Col lg={6} md={6} sm={6}>
                                                        <span>Withdrawal fee</span>
                                                    </Col>
                                                </Row> 
                                                <Row className='fw-500 fs-5'>
                                                    <Col lg={6} md={6} sm={6}>
                                                        <p>0%</p>
                                                    </Col>
                                                    <Col lg={6} md={6} sm={6}>
                                                        <p>0%</p>
                                                    </Col>
                                                </Row> 
                                                <p className='fw-light fs-12 m-0'>Performance fee</p>
                                                <p className='fw-500 fs-5'>5.3%</p>
                                                <p className='fw-light fs-12'>Performance fees are already subtracted from the displayed APY.</p>
                                            </Col>
                                        </Row>        
                                    </div>
                                </div>
                            </Col>
                            <Col lg={7} md={7} sm={12} className="pe-0">
                                <div className='bgDivColor rounded-3 py-3 px-4'>
                                    <div className='d-flex justify-content-between align-items-center'>
                                       <span className='fs-5 fw-semibold'>History</span>
                                       <div className='bgBlueColor history-type p-1'>
                                            <button className="fw-500 fs-12 ff-inter active">TVL</button>
                                            <button className="fw-500 fs-12 ff-inter">PRICE</button>
                                            <button className="fw-500 fs-12 ff-inter">APY</button>
                                        </div>
                                    </div>
                                    <div className='position-relative mt-3'>
                                        <div className='spark-line'>
                                            <AreaChart data={cryptoData}/>
                                        </div>
                                    </div>
                                    <div className='grey300 fs-14 fw-500 d-flex justify-content-end gap-3 my-3'>
                                         <span className=''>1D</span>
                                         <span className='lightGreen'>1W</span>
                                         <span className=''>1M</span>
                                         <span className=''>1Y</span>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Col>
            </Row>
            
        </div>
    )
}
export default Approve;