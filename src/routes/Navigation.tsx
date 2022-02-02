import { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Routes, Route, NavLink, Navigate } from 'react-router-dom';

import logo from '../logo.svg';
import { routes } from './routes';


export const Navigation = () => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <BrowserRouter>
                <div className="main-layout">
                    <nav>
                        <img src={ logo } alt="React Logo" />
                        <ul>
                            {
                                routes.map( route => {
                                    return(         
                                        <li key={route.name}>
                                            <NavLink to={route.to} className={ ({ isActive }) => isActive ? 'nav-active' : '' }>{route.name}</NavLink>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </nav>

                    <Routes>

                        {
                            routes.map(({Component, path, to}) =>(
                                <Route path={path} element={ <Component /> } key={to} />
                            ))
                        }
                        
                        <Route path="/*" element={ <Navigate to={ routes[0].to } replace /> } />
                    </Routes>

                </div>
            </BrowserRouter>
        </Suspense>
    )
}
