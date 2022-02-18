import { BrowserRouter } from 'react-router-dom';
import { Routes, Route, NavLink, Navigate } from 'react-router-dom';

import logo from '../logo.svg';
import { About } from '../pages/About';
import { UserPage } from '../pages/UserPage';
import { Home } from '../pages/Home';

export const Navigation = () => {
    return (
        <BrowserRouter>
            <div className="main-layout">
                <nav>
                    <img src={ logo } alt="React Logo" />
                    <ul>
                        <li>
                            <NavLink to="/user" className={ ({ isActive }) => isActive ? 'nav-active' : '' }>Lazy 1</NavLink>
                        </li>
                        <li>
                            <NavLink to="/about" className={ ({ isActive }) => isActive ? 'nav-active' : '' }>Lazy 2</NavLink>
                        </li>
                        <li>
                            <NavLink to="/home" className={ ({ isActive }) => isActive ? 'nav-active' : '' }>Lazy 3</NavLink>
                        </li>
                    </ul>
                </nav>

                <Routes>
                    <Route path="about" element={ <About /> } />
                    <Route path="user" element={  <UserPage /> } />
                    <Route path="home" element={  <Home /> } />
                    
                    <Route path="/*" element={ <Navigate to="/about" replace /> } />
                </Routes>

            </div>
        </BrowserRouter>
    )
}
