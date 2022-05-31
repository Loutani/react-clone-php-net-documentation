import { Link } from "react-router-dom"

const Footer = () => {
    return (
        <>
        <footer>
            <div className="container footer-content">
                <div className="row-fluid">
                    <ul className="footmenu">
                        <li><Link to='copyright'>Copyright © 2001-2022 The PHP Group</Link></li>
                        <li><Link to='my'>My PHP.net</Link></li>
                        <li><Link to='contact'>Contact</Link></li>
                        <li><Link to='sites'>Other PHP.net sites</Link></li>
                        <li><Link to='privacy'>Privacy policy</Link></li>
                        <li><a href="https://github.com/php/web-php/blob/master/index.php">View Source</a></li>
                    </ul>
                </div>
            </div>
        </footer>
        </>
    )
}

export default Footer