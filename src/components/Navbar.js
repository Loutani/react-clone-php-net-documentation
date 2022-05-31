import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='downloads'>Downloads</NavLink>
            <NavLink to='documentation'>Documentation</NavLink>
            <NavLink to='getInvolved'>Get Involved</NavLink>
            <NavLink to='help'>Help</NavLink>
            <NavLink to='currentVersion'>Current Version</NavLink>
        </>
    )
}

export default Navbar;