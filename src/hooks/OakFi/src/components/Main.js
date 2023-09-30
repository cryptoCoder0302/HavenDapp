import { Outlet, useLocation } from "react-router-dom";
import { useState, useEffect } from 'react';
import useWindowDimensions from '../hooks/useWindowDimensions';
import cls from 'classnames';
import Footer from "./Footer"
import Header from "./Header"

const Main = () => {
    const { height, width } = useWindowDimensions();
    const [showProfile, setShowProfile] = useState(false);
    let location = useLocation();
    useEffect(() => {
        console.log(location.pathname);
        if (location.pathname == '/app/vaults') {
            setShowProfile(true);
        } else {
            setShowProfile(false);
        }
    }, [location])

    return (
        <div className="main">
            <div className="header px-5 py-4">
                <Header />
                {
                    showProfile &&  
                        <div className="d-flex justify-content-between flex-wrap">
                            <div className="pt-4 px-3">
                            <h5 className="fw-500 text-start">Portfolio</h5> 
                            <div className="d-flex text-start gap-3">
                                    <div>
                                        <p className="fs-12 m-0">DEPOSITED</p>
                                        <p className="fs-4 m-0">$0.00</p>
                                    </div>
                                    <div>
                                        <p className="fs-12 m-0">MONTHLY YIELD</p>
                                        <p className="fs-4 m-0">$0.00</p>
                                    </div>
                                    <div>
                                        <p className="fs-12 m-0">DAILY YIELD</p>
                                        <p className="fs-4 m-0">$0.00</p>
                                    </div>
                                    <div>
                                        <p className="fs-12 m-0">AVG APY</p>
                                        <p className="fs-4 m-0">0%</p>
                                    </div>
                            </div>
                            </div>
                            <div className={cls('d-flex', 'align-items-end', 'gap-3', 'px-3', width<673?'text-start':'text-end')}>
                                <div>
                                    <small className="fw-500">TVM</small>
                                    <p className="fs-4 ff-inter fw-semibold m-0">$406.74M</p>
                                </div>
                                <div>
                                    <small className="fw-500">VAULTS</small>
                                    <p className="fs-4 ff-inter fw-semibold m-0">26</p>
                                </div>
                            </div>
                        </div>
                }
            </div>  
            <div>
                <Outlet />
            </div>
            <div className="py-5">
                <Footer />
            </div>
        </div>
    )
}
export default Main;