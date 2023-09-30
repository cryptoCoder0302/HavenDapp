import { Button } from 'react-bootstrap';
import '../sass/customButton.scss'
import cls from 'classnames';

const CButton = (props) => {
    const { children, className, style, onClick} = props;
    return (
        <button className={cls('custom-btn rounded-5 fw-500 ff-clash', className)} style={style} onClick={onClick}>{children}</button>
    )
}
export default CButton;