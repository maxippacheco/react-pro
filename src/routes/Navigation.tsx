import { BrowserRouter } from 'react-router-dom';
import { Routes, Route, NavLink, Navigate } from 'react-router-dom';

import logo from '../logo.svg';
import { ShoppingPage } from '../02-component-patterns/pages/ShoppingPage';

export const Navigation = () => {
    return (
        <BrowserRouter>
            <div className="main-layout">
                <nav>
                    <img src={ logo } alt="React Logo" />
                    <ul>
                        <li>
                            <NavLink to="/" className={ ({ isActive }) => isActive ? 'nav-active' : '' }>Shopping</NavLink>
                        </li>
                        <li>
                            <NavLink to="/lazy2" className={ ({ isActive }) => isActive ? 'nav-active' : '' }>Lazy 2</NavLink>
                        </li>
                        <li>
                            <NavLink to="/s" className={ ({ isActive }) => isActive ? 'nav-active' : '' }>Lazy 3</NavLink>
                        </li>
                    </ul>
                </nav>

                <Routes>
                    <Route path="/" element={ <ShoppingPage /> } />
                    
                    <Route path="/*" element={ <Navigate to="/" /> } />
                </Routes>

            </div>
        </BrowserRouter>
    )
}
