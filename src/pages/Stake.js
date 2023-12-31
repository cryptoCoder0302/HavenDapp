import { useContext, useEffect, useState } from 'react';
import { BsFillExclamationDiamondFill } from 'react-icons/bs';
import { getConstData } from '../utils/getConstData';
import CustomButton from '../components/Button';
import cls from 'classnames';
import myToken from '../assets/logo2.png';
import { MenuContext } from '../contexts/MenuConnectContext';
import '../scss/stake.scss';

const Stake = () => {
    const [warnTxt, setWarnTxt] = useState("")
    const [sHAVEN_detail, setSHAVEN_detail] = useState("")
    const [rangeVal, setRangeVal] = useState(0)
    const {title, setTitle} = useContext(MenuContext);

    useEffect(() => {
        setWarnTxt(getConstData("warn"));
        setSHAVEN_detail(getConstData("sHAVEN_detail"));
        setTitle('Stake');
    }, [])


    const getRangeVal = (e) => {
        setRangeVal(e.target.value);
    }

    return (
        <>
            <div className="stake-content py-5 px-4">
                <div className="net-warn fs-5 mb-4 py-3 px-2 gap-3 d-flex align-items-center justify-content-start">
                    <BsFillExclamationDiamondFill />
                    {warnTxt}
                </div>
                <div className="">
                    <div className="d-flex flex-column stake-area rounded-4 p-4 pt-3 gap-4">
                        <h1 className="text-start fs-2 fw-bold text-color text-serif" > Stake HAVEN </h1>
                        <div className="token-staking d-flex gap-4">
                            <div className={cls('rounded-4', 'p-2', 'active')}>
                                <h1 className="bg-gradient-txt bg-clip-text fs-2 fw-bolder text-serif">sHAVEN</h1>
                                <p className="fs-5 fw-semibold text-serif mb-0">Single Sided Staking</p>
                            </div>
                            <div className={cls('rounded-4', 'p-2')}>
                                <h1 className="bg-gradient-txt bg-clip-text fs-2 fw-bolder text-serif">slHAVEN</h1>
                                <p className="fs-5 fw-semibold text-serif mb-0">HAVEN Liquidity Staking</p>
                            </div>
                        </div>
                        <div className="token-detail rounded-3 px-3 py-2">
                            <p className="m-0">
                                <label className="fw-bold text-decoration-underline">sHAVEN</label> - {sHAVEN_detail}
                            </p>
                        </div>
                        <div>
                            <h5 className="text-start fw-bolder text-serif">Lockup Period</h5>
                            <div className='d-flex lock-period justify-content-evenly flex-wrap'>
                                <div className="mt-2 py-2 rounded-4 px-4 active">
                                    <p className="text-color">None</p>
                                    <p className="fs-5 active">13% APR</p>
                                </div>
                                <div className="mt-2 py-2 rounded-4 px-4">
                                    <p className="text-color ">14 days</p>
                                    <p className="fs-5">13% APR</p>
                                </div>
                                <div className="mt-2 py-2 rounded-4 px-4">
                                    <p className="text-color ">120 days</p>
                                    <p className="fs-5">13% APR</p>
                                </div>
                                <div className="mt-2 py-2 rounded-4 px-4">
                                    <p className="text-color ">240 days</p>
                                    <p className="fs-5">13% APR</p>
                                </div>
                                <div className="mt-2 py-2 rounded-4 px-4">
                                    <p className="text-color ">360 days</p>
                                    <p className="fs-5">13% APR</p>
                                </div>
                            </div>
                        </div>
                        <div className="staking-amount">
                            <h5 className="text-start fw-bolder text-serif">Staking Amount</h5>
                            <div>
                                <p className="text-start fw-semibold bg-gradient-txt bg-clip-text">Enter HAVEN Amount</p>
                                <div className="position-relative token-amount-preview">
                                    <div className="text-start d-flex align-items-center">
                                        <button type="button" tabIndex="-1" disabled=""></button>
                                        <input type="number" className="w-100 py-2 px-2 fs-5" min="0" max="0" step="1" disabled={true} placeholder="0" autoComplete="off" />
                                        <button type="button" tabIndex="-1" disabled="" ></button>
                                    </div>
                                    <button className="position-absolute pr-3 top-0 border-0 ">
                                        <span className="bg-clip-text bg-gradient-txt">
                                            Max 
                                        </span>
                                    </button>
                                </div>
                                <div className="d-flex align-items-center token-amount-control">
                                    <div className="w-100 py-2 px-3">
                                        <input type="range" onChange={getRangeVal} value={rangeVal} min="0" max="100" style={{WebkitBackgroundSize:`${rangeVal}%, 100%`}} />
                                    </div>
                                    <div className="ps-3 pe-2 fs-5">{rangeVal}%</div>
                                </div>
                                <div className="token-buy d-flex align-items-center justify-content-between py-2 px-3">
                                    <h6 className='fw-semibold text-serif m-0 text-gray-300'>HAVEN Balance: <span className="fw-bolder">0 ($0.00)</span></h6>
                                    <button className="pr-3 top-0 border-0 ">
                                        <span className="bg-clip-text bg-gradient-txt">
                                            Buy HAVEN
                                        </span>
                                    </button>
                                </div>
                                <div className="mt-4 d-flex mb-2">
                                    {/* <button className="w-100 py-3 rounded-5 border-0 fw-semibold stake-btn">Please enter valid inputs to stake.</button> */}
                                    <CustomButton className="w-100 stake-btn">Please enter valid inputs to stake.</CustomButton>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="d-flex py-4 px-5 gap-4 rounded-4 free-token flex-column align-items-start text-serif mt-3">
                        <div className="text-start">
                            <h1 className="fs-5 m-0">Lock Amount:</h1>
                            <p className="text-color m-0 fs-4 fw-bold">100 HAVEN</p>
                            <div className="fw-semibold">($6.69)</div>
                        </div>
                        <div className="text-start">
                            <h1 className="fs-5 m-0">Lockup Period:</h1>
                            <p className="text-color m-0 fs-4 fw-bold">0 days</p>
                        </div>
                        <div className="text-start">
                            <h1 className="fs-5 m-0">APR:</h1>
                            <p className="text-color m-0 fs-4 fw-bold">12.5%</p>
                        </div>
                        <div className="text-start">
                            <h1 className="fs-5 m-0">Earn Amount (every 365 days):</h1>
                            <p className="text-color m-0 fs-4 fw-bold">13 HAVEN</p>
                            <div className="fw-semibold">($0.86)</div>
                        </div>
                        <div className="text-start">
                            <p className="fs-4 fw-bold m-0">You will receive a free sHAVEN NFT upon staking!</p>
                        </div>
                        <div className="d-flex justify-content-center w-100">
                            <img className="w-56 h-auto" src={myToken} alt="" data-xblocker="passed" width='230' style={{visibility: 'visible'}} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Stake;