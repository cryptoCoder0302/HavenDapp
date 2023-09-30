import Nav from 'react-bootstrap/Nav';
import CButton from './CButton';
import logo from '../assets/OakFi-logomark.png';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <>
            <Nav defaultActiveKey="/home" as="ul" className="d-flex justify-content-between align-items-center">
                <Nav.Item as="li">
                    <Nav.Link href="/home" className='d-flex align-items-center fs-4 gap-2 fw-500'><img src={logo} alt="LoGo" /><span>Oak Fi</span></Nav.Link>
                </Nav.Item>
                <Nav.Item as="li" className='d-flex ff-clash align-items-start gap-3 fw-normal'>
                    <Link to='/'>Home</Link>
                    <Link to='/app/vaults'>Vaults</Link>
                </Nav.Item>
                <Nav.Item as="li">
                    <CButton>Connect wallet</CButton>
                </Nav.Item>
            </Nav>
        </>
    )
}
export default Header;