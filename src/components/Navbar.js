import { Link, NavLink } from "react-router-dom";
import phpLogo from "./../php-logo.svg"
import currentVersionImage from "./../logo_php8_1.svg"
import { useState } from "react";

const Navbar = () => {
    const [search, setSearch] = useState('')

    const handleSearch = (e) => {
        setSearch(e.target.value)
    }

    return (
        <nav className="navbar navbar-fixed-top">
            <div className="navbar-inner clearfix">

                <Link to='/' className="logo">
                    <img src={phpLogo} alt="php logo" />
                </Link>

                <ul className="nav">
                    <li>
                        <NavLink to='downloads'>Downloads</NavLink>
                    </li>
                    <li>
                        <NavLink to='documentation'>Documentation</NavLink>
                    </li>
                    <li>
                        <NavLink to='getInvolved'>Get Involved</NavLink>
                    </li>
                    <li>
                        <NavLink to='help'>Help</NavLink>
                    </li>
                    <li>
                        <NavLink to='currentVersion'>
                            <img src={currentVersionImage} />
                        </NavLink>
                    </li>
                </ul>

                <form className="navbar-search">
                    <input type="text" value={search} onChange={handleSearch} className="search-query" placeholder="Search" />
                </form>
            </div>
        </nav>
    )
}

export default Navbar;