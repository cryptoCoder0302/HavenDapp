
import { useState, useEffect, useContext } from 'react';
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { BsFillExclamationDiamondFill, BsApple } from 'react-icons/bs'
import { getConstData } from '../utils/getConstData';
import { MenuContext } from '../../contexts/MenuConnectContext';
import vesting from '../assets/vesting.svg';
import gear from '../assets/gear.svg'
import rank1 from '../assets/rank-1.svg';
import rank2 from '../assets/rank-2.svg';
import rank3 from '../assets/rank-3.svg';
import token from '../assets/token.png';
import '../scss/perpstat.scss';

const PerpsStats = () => {
    const [warnTxt, setWarnTxt] = useState("")
    const {title, setTitle} = useContext(MenuContext);

    useEffect(() => {
        setWarnTxt(getConstData("warn"));
        setTitle('Perps Stats');
    }, [])

    return (
        <div className="stats-content py-5 px-4">
            <div className="net-warn fs-5 mb-4 py-3 px-2 gap-3 d-flex align-items-center justify-content-start">
                <BsFillExclamationDiamondFill />
                {warnTxt}
            </div>
            <div className="mb-3">
                <h5 className="text-start">Global Trading Stats (Starting Sept. 29)</h5>
                <Row className='mt-3 text-serif'>
                    <Col lg={6} md={6} sm={12} className="pt-3">
                        <div className="overflow-hidden px-5 pt-3 bg-gradient-to-r position-relative rounded-4 d-flex flex-column align-items-start text-start">
                            <h4 className="fs-3 fw-bold m-0">$36,984,396.90</h4>
                            <p className="">Total Volume (position size)</p>  
                            <img className="bg-img-opacity" src={vesting} />
                        </div>
                    </Col>
                    <Col lg={6} md={6} sm={12} className="pt-3">
                        <div className="overflow-hidden px-5 pt-3 bg-gradient-to-r position-relative rounded-4 d-flex flex-column align-items-start text-start">
                            <h4 className="fs-3 fw-bold m-0">$2,606,515.16</h4>
                            <p className="">24hr Volume (position size)</p>  
                            <img className="bg-img-opacity" src={vesting} />
                        </div>
                    </Col>
                    <Col lg={6} md={6} sm={12} className="pt-3">
                        <div className="overflow-hidden px-5 pt-3 bg-gradient-to-r position-relative rounded-4 d-flex flex-column align-items-start text-start">
                            <h4 className="fs-3 fw-bold m-0">$99,253.94</h4>
                            <p className="">Total Fees</p>  
                            <img className="bg-img-opacity" src={vesting} />
                        </div>
                    </Col>
                    <Col lg={6} md={6} sm={12} className="pt-3">
                        <div className="overflow-hidden px-5 pt-3 bg-gradient-to-r position-relative rounded-4 d-flex flex-column align-items-start text-start">
                            <h4 className="fs-3 fw-bold m-0">$3,309.22</h4>
                            <p className="">24hr Fees</p>  
                            <img className="bg-img-opacity" src={vesting} />
                        </div>
                    </Col>
                    <Col lg={6} md={6} sm={12} className="pt-3">
                        <div className="overflow-hidden px-5 pt-3 bg-gradient-to-r position-relative rounded-4 d-flex flex-column align-items-start text-start">
                            <h4 className="fs-3 fw-bold m-0">$38,927.46</h4>
                            <p className="">Total Platform PNL</p>  
                            <img className="bg-img-opacity" src={vesting} />
                        </div>
                    </Col>
                    <Col lg={6} md={6} sm={12} className="pt-3">
                        <div className="overflow-hidden px-5 pt-3 bg-gradient-to-r position-relative rounded-4 d-flex flex-column align-items-start text-start">
                            <h4 className="fs-3 fw-bold m-0">$7,016.05</h4>
                            <p className="">24hr Platform PNL</p>  
                            <img className="bg-img-opacity" src={vesting} />
                        </div>
                    </Col>
                </Row>
            </div>
            <div className="d-flex justify-content-between mt-5 mb-3">
                <h1 className='fs-5'>Top Traders</h1>
                <div className="d-flex gap-3">
                    <input type="text" className="rounded-3 border border-1 border-dark px-3 py-1 fs-5" placeholder='Search address...'/>
                    <button className="border-0 bg-white"><img src={gear}/></button>
                </div>
            </div>
            <div className="rounded-4 flex-column traders">
                
                <Row className="leaderboards-lank m-0">
                    <Col lg={5} md={12} sm={12} className="d-flex align-items-center gap-5">
                        <div className="d-flex flex-column align-items-center">
                            <img src={rank1} width="50"/>
                            <small className="text-gray-300">Rank</small>
                        </div>
                        <div className='d-flex align-items-center gap-3 py-2 px-3 rounded-3 bg-gray-500'>
                            <img src={token} width="50"/>
                            <span class="fs-5 fw-semibold">0x7066...a36D</span>
                            <Link target={'_blank'} to="https://etherscan.io/address/0x706621AE65B78886041303b712B912F8c912a36D"><BsApple /></Link>
                        </div>
                    </Col>
                    <Col lg={7} md={12} sm={12} className="d-flex trader-item gap-2">
                        <div className="d-flex flex-column justify-content-center bg-gray-500 rounded-3 text-start px-3 py-2">
                            <small className="m-0 text-gray-300">Trades</small>
                            <b>12</b>
                        </div>
                        <div className="d-flex flex-column justify-content-center bg-gray-500 rounded-3 text-start px-3 py-2">
                            <small className="m-0 text-gray-300">PNL</small>
                            <b>$33,977.26</b>
                        </div>
                        <div className="d-flex flex-column justify-content-center bg-gray-500 rounded-3 text-start px-3 py-2">
                            <small className="m-0 text-gray-300">Volume</small>
                            <b>$3,581,933.10</b>
                        </div>
                    </Col>
                </Row>
                <Row className="leaderboards-lank m-0">
                    <Col lg={5} md={12} sm={12} className="d-flex align-items-center gap-5">
                        <div className="d-flex flex-column align-items-center">
                            <img src={rank2} width="50"/>
                            <small className="text-gray-300">Rank</small>
                        </div>
                        <div className='d-flex align-items-center gap-3 py-2 px-3 rounded-3 bg-gray-500 '>
                            <img src={token} width="50"/>
                            <span class="fs-5 fw-semibold">0x7066...a36D</span>
                            <Link target={'_blank'} to="https://etherscan.io/address/0x706621AE65B78886041303b712B912F8c912a36D"><BsApple /></Link>
                        </div>
                    </Col>
                    <Col lg={7} md={12} sm={12} className="d-flex trader-item gap-2">
                        <div className="d-flex flex-column justify-content-center bg-gray-500 rounded-3 text-start px-3 py-2">
                            <small className="m-0 text-gray-300">Trades</small>
                            <b>12</b>
                        </div>
                        <div className="d-flex flex-column justify-content-center bg-gray-500 rounded-3 text-start px-3 py-2">
                            <small className="m-0 text-gray-300">PNL</small>
                            <b>$33,977.26</b>
                        </div>
                        <div className="d-flex flex-column justify-content-center bg-gray-500 rounded-3 text-start px-3 py-2">
                            <small className="m-0 text-gray-300">Volume</small>
                            <b>$3,581,933.10</b>
                        </div>
                    </Col>
                </Row>
                <Row className="leaderboards-lank m-0">
                    <Col lg={5} md={12} sm={12} className="d-flex align-items-center gap-5">
                        <div className="d-flex flex-column align-items-center">
                            <img src={rank3} width="50"/>
                            <small className="text-gray-300">Rank</small>
                        </div>
                        <div className='d-flex align-items-center gap-3 py-2 px-3 rounded-3 bg-gray-500 '>
                            <img src={token} width="50"/>
                            <span class="fs-5 fw-semibold">0x7066...a36D</span>
                            <Link target={'_blank'} to="https://etherscan.io/address/0x706621AE65B78886041303b712B912F8c912a36D"><BsApple /></Link>
                        </div>
                    </Col>
                    <Col lg={7} md={12} sm={12} className="d-flex trader-item gap-2">
                        <div className="d-flex flex-column justify-content-center bg-gray-500 rounded-3 text-start px-3">
                            <small className="m-0 text-gray-300">Trades</small>
                            <b>12</b>
                        </div>
                        <div className="d-flex flex-column justify-content-center bg-gray-500 rounded-3 text-start px-3">
                            <small className="m-0 text-gray-300">PNL</small>
                            <b>$33,977.26</b>
                        </div>
                        <div className="d-flex flex-column justify-content-center bg-gray-500 rounded-3 text-start px-3">
                            <small className="m-0 text-gray-300">Volume</small>
                            <b>$3,581,933.10</b>
                        </div>
                    </Col>
                </Row>
                <Row className="leaderboards-lank m-0">
                    <Col lg={5} md={12} sm={12} className="d-flex align-items-center gap-5">
                        <div className="d-flex flex-column align-items-center">
                            <h2 className='text-gray-300 fw-bold'>4</h2>
                            <small className="text-gray-300">Rank</small>
                        </div>
                        <div className='d-flex align-items-center gap-3 py-2 px-3 rounded-3 bg-gray-500 '>
                            <img src={token} width="50"/>
                            <span class="fs-5 fw-semibold">0x7066...a36D</span>
                            <Link target={'_blank'} to="https://etherscan.io/address/0x706621AE65B78886041303b712B912F8c912a36D"><BsApple /></Link>
                        </div>
                    </Col>
                    <Col lg={7} md={12} sm={12} className="d-flex trader-item gap-2">
                        <div className="d-flex flex-column justify-content-center bg-gray-500 rounded-3 text-start px-3">
                            <small className="m-0 text-gray-300">Trades</small>
                            <b>12</b>
                        </div>
                        <div className="d-flex flex-column justify-content-center bg-gray-500 rounded-3 text-start px-3">
                            <small className="m-0 text-gray-300">PNL</small>
                            <b>$33,977.26</b>
                        </div>
                        <div className="d-flex flex-column justify-content-center bg-gray-500 rounded-3 text-start px-3">
                            <small className="m-0 text-gray-300">Volume</small>
                            <b>$3,581,933.10</b>
                        </div>
                    </Col>
                </Row>
                <Row className="leaderboards-lank m-0">
                    <Col lg={5} md={12} sm={12} className="d-flex align-items-center gap-5">
                        <div className="d-flex flex-column align-items-center">
                            <h2 className='text-gray-300 fw-bold'>5</h2>
                            <small className="text-gray-300">Rank</small>
                        </div>
                        <div className='d-flex align-items-center gap-3 py-2 px-3 rounded-3 bg-gray-500 '>
                            <img src={token} width="50"/>
                            <span class="fs-5 fw-semibold">0x7066...a36D</span>
                            <Link target={'_blank'} to="https://etherscan.io/address/0x706621AE65B78886041303b712B912F8c912a36D"><BsApple /></Link>
                        </div>
                    </Col>
                    <Col lg={7} md={12} sm={12} className="d-flex trader-item gap-2">
                        <div className="d-flex flex-column justify-content-center bg-gray-500 rounded-3 text-start px-3">
                            <small className="m-0 text-gray-300">Trades</small>
                            <b>12</b>
                        </div>
                        <div className="d-flex flex-column justify-content-center bg-gray-500 rounded-3 text-start px-3">
                            <small className="m-0 text-gray-300">PNL</small>
                            <b>$33,977.26</b>
                        </div>
                        <div className="d-flex flex-column justify-content-center bg-gray-500 rounded-3 text-start px-3">
                            <small className="m-0 text-gray-300">Volume</small>
                            <b>$3,581,933.10</b>
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    )
}
export default PerpsStats;