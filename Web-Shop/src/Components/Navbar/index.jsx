import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { ShoppingCartContext } from "../../Context";


const Navbar = () => {
    const context = useContext(ShoppingCartContext);
    const activeStyle = 'underline underline-offset-4';

    return (
        <nav className="flex justify-between items-center fixed z-10 top-0 w-full py-5 px-8 text-sm font-light navGradient">
            {/* Lado izquierdo del Navbar */}
            <ul className="flex items-center gap-3">
                <li className="font-semibold text-lg">
                    <NavLink
                        to='/'>
                            YoyoShop
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/'
                        className={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        }>
                            All
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/woman'
                        className={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        }>
                            Woman
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/men'
                        className={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        }>
                            Men
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/electronics'
                        className={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        }>
                            Eletronics
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/decoration'
                        className={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        }>
                            Decoration
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/kitchen'
                        className={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        }>
                            Kitchen
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/beauty'
                        className={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        }>
                            Beauty
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/others'
                        className={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        }>
                            Others
                    </NavLink>
                </li>
            </ul>
            {/* Lado derecho del Navbar */}
            <ul className="flex items-center gap-3">
                <li className="text-black/60">
                    crisyoyo@gmil.com
                </li>
                <li>
                    <NavLink
                        to='/my-account'
                        className={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        }>
                            My Account
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/my-orders'
                        className={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        }>
                            My Orders
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/sign-in'
                        className={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        }>
                            Sign In
                    </NavLink>
                </li>
                <li>
                    🛒 {context.count}
                </li>

            </ul>
        </nav>
    )
}

export default Navbar