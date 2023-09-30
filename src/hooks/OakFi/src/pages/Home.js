import Header from '../components/Header';
import Button from 'react-bootstrap/Button';
import CButton from '../components/CButton';
import line42 from '../assets/Line 42.png';
import add from '../assets/add.png';
import Vector from '../assets/Vector.png';
import Reward from '../assets/reward.png';
import BNB from '../assets/tokens/Property 1=bnb.png'; 
import Doge from '../assets/tokens/Property 1=doge.png'; 
import OAK from '../assets/tokens/Property 1=oak.png'; 
import Ethereum from '../assets/tokens/Property 1=eth.png'; 
import XRP from '../assets/tokens/Property 1=xrp.png'; 
import KuCoin from '../assets/tokens/Property 1=kucoin.png'; 
import LiteCoin from '../assets/tokens/Property 1=ltc.png'; 
import USDC from '../assets/tokens/Property 1=usdc.png'; 
import Waves from '../assets/tokens/Property 1=waves.png'; 
import USDT from '../assets/tokens/Property 1=usdt.png'; 
import BTC from '../assets/tokens/Property 1=btc.png'; 
import Atom from '../assets/tokens/Property 1=atom-1.png'; 
import Earn from '../assets/external-link-alt.png';
import OakLogoMark from '../assets/OakFi-logomark@4x 1.png';
import '../sass/home.scss';
import { Col, Row } from 'react-bootstrap';
import Footer from '../components/Footer';

function Home() {
  return (
    <div className='home pb-5'>
        <div className="px-5">
            <div className='pt-4'>
                <Header />
            </div>
            <div className='d-flex flex-column gap-3 align-items-center py-5'>
                <div className='w-75 py-5'>
                    <div className='fw-500 ff-clash'>
                        <p className='fs-12 m-0 line-height-15'>TOTAL VALUE LOCKED</p>
                        <p className='lightGreen fs-4 line-height-30'>$3,56O,790</p>
                    </div>
                    <div className='fs-48 fw-semibold ff-clash lh-1'>
                        Yield Optimizer on Kucoin Community Chain.
                    </div>
                    <Row className='d-flex justify-content-center mt-3'>
                        <Col lg={7} md={7} sm={12} className='fs-6 fw-normal ff-clash lh-sm'>
                            We’re a decentralised, yield optimizer that allows its users to earn compound interest on 
                            their crypto holdings. Optimizing crypto assets for the highest APYs.  
                        </Col>
                    </Row>
                    <CButton className="mt-3 mb-5 blue700">Launch App</CButton>
                </div>
            </div>
            <Row className='align-items-center my-5 pt-5'>
                <Col lg={4} md={5} sm={12} className="text-start">
                    <span className='ff-clash fw-semibold fs-2'>Oak Fi &nbsp;&nbsp;Optimizer</span>
                </Col>
                <Col lg={8} md={7} sm={12}>
                    <img src={line42} style={{width: "100%"}}/>
                </Col>
            </Row>
            <Row className="pb-5">
                <Col lg={6} md={12} sm={12} className="py-3">
                    <div className='liquidity d-flex flex-column align-items-start gap-3 pt-4 pb-5 px-4'>
                        <img src={add}/>
                        <p className='fw-500 fs-5'>Liquidity Pools</p>
                        <Row>
                            <Col lg={10} md={10} sm={10} className="d-flex flex-column gap-3">
                                <div className='d-flex text-start justify-content-start align-items-center grey100 gap-3'>
                                    <img src={Vector}/>
                                    <span>Stake LP Tokens from external DEX in Oak Fi Vault</span>
                                </div>
                                <div className='d-flex text-start justify-content-start align-items-center grey100 gap-3'>
                                    <img src={Vector}/>
                                    <span>Earn interest rewards on your LP which is held in Custody by  Oak Fi</span>
                                </div>
                                <div className='d-flex text-start justify-content-center align-items-center grey100 gap-3'>
                                    <img src={Vector}/>
                                    <span>Oak Fi reinvest your interest by purchasing more of the underlying token pair to increase rewards</span>
                                </div>
                                <div className='d-flex text-start justify-content-center align-items-center grey100 gap-3'>
                                    <img src={Vector}/>
                                    <span>Auto-Compound regularly and automatically repeats the process, saving you time and Fees</span>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Col>
                <Col lg={6} md={12} sm={12} className="py-3">
                    <div className='oak-reward d-flex flex-column align-items-start gap-3 pt-4 pb-5 px-4 h-100'>
                        <img src={Reward}/>
                        <p className='fw-500 fs-5'>Oak Reward Pools</p>
                        <Row>
                            <Col lg={10} md={10} sm={10} className="d-flex flex-column gap-3">
                                <div className='d-flex text-start justify-content-start align-items-center grey100 gap-3'>
                                    <img src={Vector}/>
                                    <span>Invest in OAK Token, stake it in Reward Pools for a specific asset</span>
                                </div>
                                <div className='d-flex text-start justify-content-start align-items-center grey100 gap-3'>
                                    <img src={Vector}/>
                                    <span>Earn shares of the platform’s revenue which is used to purchase the token</span>
                                </div>
                                <div className='d-flex text-start justify-content-center align-items-center grey100 gap-3'>
                                    <img src={Vector}/>
                                    <span>Oak Fi reinvest your interest and purchase another asset that becomes your reward.</span>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Col>
            </Row>
        </div>
        <div className="py-5 overflow-hidden">
            <h3>Featured</h3>
            <div className='featured px-3 pt-4 flex-wrap'>
                <Button className="token-btn">
                    <img src={BNB}/>
                    <span>BNB</span>
                </Button>
                <Button className="token-btn">
                    <img src={Doge}/>
                    <span>Doge</span>
                </Button>
                <Button className="token-btn">
                    <img src={OAK}/>
                    <span>OAK</span>
                </Button>
                <Button className="token-btn">
                    <img src={Ethereum}/>
                    <span>Ethereum</span>
                </Button>
                <Button className="token-btn">
                    <img src={XRP}/>
                    <span>XRP</span>
                </Button>
                <Button className="token-btn">
                    <img src={KuCoin}/>
                    <span>KuCoin</span>
                </Button>
            </div>
            <div className='featured px-3 py-4 flex-wrap'>
                <Button className="token-btn">
                    <img src={LiteCoin}/>
                    <span>Litecoin</span>
                </Button>
                <Button className="token-btn">
                    <img src={USDC}/>
                    <span>USDC</span>
                </Button>
                <Button className="token-btn">
                    <img src={Waves}/>
                    <span>Waves</span>
                </Button>
                <Button className="token-btn">
                    <img src={USDT}/>
                    <span>USDT</span>
                </Button>
                <Button className="token-btn">
                    <img src={BTC}/>
                    <span>BTC</span>
                </Button>
                <Button className="token-btn">
                    <img src={Atom}/>
                    <span>Atom</span>
                </Button>
            </div>
        </div>
        <Row className="d-flex justify-content-center">
            <Col lg={3} md={6} sm={10}>
                <h2 className="fw-semibold">OAK Token</h2>
                <p className="mx-3"><span className='lightGreen'>$OAK</span> is the native revenue-share and governance token for our protocol.</p>
            </Col>
        </Row>
        <div className='px-5'>
            <Row className='px-5 py-5'>
                <Col lg={6} md={12} sm={12} className="d-flex flex-column gap-3 mt-3">
                    <div className='oak-available text-start'>
                        <p className='fw-semibold'>OAK Hodl</p>
                        <Row>
                            <Col lg={11} md={10} sm={10} className="d-flex flex-column gap-3">
                                <p className='fw-500 grey300'>Oak holders share in our revenue by staking their OAK in OAK Hodl vaults.</p>
                            </Col>
                        </Row>
                        <div className='d-flex text-start justify-content-start align-items-center lightGreen gap-3'>
                            <img src={Earn} />
                            <span>Earn OAK</span>
                        </div>
                    </div>
                    <div className='oak-available text-start'>
                        <p className='fw-semibold'>OAK Hodl</p>
                        <Row>
                            <Col lg={11} md={10} sm={10} className="d-flex flex-column gap-3">
                                <p className='fw-500 grey300'>Staking OAK in OAK Reward Pool earns you specific tokens with the platform’s earnings.</p>
                            </Col>
                        </Row>
                        <div className='d-flex text-start justify-content-start align-items-center lightGreen gap-3'>
                            <img src={Earn} />
                            <span>Earn OAK</span>
                        </div>
                    </div>
                    <div className='oak-available text-start'>
                        <p className='fw-semibold'>OAK Hodl</p>
                        <Row>
                            <Col lg={11} md={10} sm={10} className="d-flex flex-column gap-3">
                                <p className='fw-500 grey300'>Our snapshot governance mechanism will give OAK holders a voting power in Oak Fi’s Dao soon.</p>
                            </Col>
                        </Row>
                        <div className='d-flex text-start justify-content-start align-items-center lightGreen gap-3'>
                            <img src={Earn} />
                            <span>Vote</span>
                        </div>
                    </div>
                </Col>
                <Col lg={6} md={12} sm={12} className="mt-3">
                    <div className='max-supply p-5 text-start position-relative'>
                        <h4 className='fw-semibold'>Fixed Max Supply</h4>
                        <div className='d-flex flex-column justify-content-between h-85'>
                            <Row>
                                <Col lg={9} md={9} sm={9}>
                                <p className='grey300'>A Fixed Maximum supply of 50,000 OAK tokens acts as a control against token inflation.</p> 
                                </Col>
                            </Row>
                            <div className='d-flex text-start justify-content-start align-items-center lightGreen gap-3'>
                                <img src={Earn} />
                                <span>Learn more</span>
                            </div>
                        </div>
                        <img src={OakLogoMark} className="bg-img"/>
                    </div>
                </Col>
            </Row>
        </div>
        <Footer />
    </div>
  );
}

export default Home;