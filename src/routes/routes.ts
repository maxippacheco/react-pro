import { lazy, LazyExoticComponent } from 'react';
import { NoLazy } from '../01-lazyload/pages/NoLazy';
// import { LazyPage1 } from '../01-lazyload/pages';
// import LazyPage1 from '../01-lazyload/pages/LazyPage1';


type JSXComponent = () => JSX.Element;

interface Route{
	to: string;
	path: string;
	Component: LazyExoticComponent<JSXComponent> | JSXComponent;
	name: string;
}


// cambiar nombre del chunk
const Lazy1 = lazy(() => import(/* webpackChunkName: "LazyLayout" */ '../01-lazyload/layout/LazyLayout'));
const Lazy2 = lazy(() => import(/* webpackChunkName: "LazyPage2" */ '../01-lazyload/pages/LazyPage2'));
const Lazy3 = lazy(() => import(/* webpackChunkName: "LazyPage3" */ '../01-lazyload/pages/LazyPage3'));


export const routes: Route[] = [
	{
		path: '/lazyload/*',
		to: '/lazyload',  //=> eliminar el / del final para que el navlink detecte la ruta activa
		Component: Lazy1,
		name: 'Lazy-Layout-Dash'
	},
	{
		to: '/no-lazy',
		path: 'no-lazy',
		Component: NoLazy,
		name: 'No-Lazy'
	},
];