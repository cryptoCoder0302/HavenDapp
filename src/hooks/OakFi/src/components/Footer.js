import { Link } from "react-router-dom";
import Twitter from '../assets/twitter.png';
import Discord from '../assets/discord.png';
import Git from '../assets/github.png';

const Footer = () => {
    return (
        <div>
            <div className="d-flex justify-content-center gap-4">
                <Link>Docs</Link>
                <Link>Blog</Link>
                <Link>MediaKit</Link>
            </div>
            <div className="d-flex justify-content-center gap-4">
                <Link><img src={Twitter}/></Link>
                <Link><img src={Discord}/></Link>
                <Link><img src={Git}/></Link>
            </div>
        </div>
    )
}
export default Footer;