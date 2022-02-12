import { createContext,  } from 'react';

import styles from '../styles/styles.module.css';
import { useProduct } from '../hooks/useProduct';
import { ProductContextProps, Product, onChangeArgs } from '../interfaces/interfaces';
import { ProductButtons, ProductImage, ProductTitle } from '.';



// CONTEXT
export const ProductContext = createContext( {} as ProductContextProps );
const { Provider } = ProductContext;


export interface Props{
	product: Product;
	children?: React.ReactElement | React.ReactElement[]; 
	className?: string;
	style?: React.CSSProperties;
	onChange?: ( args: onChangeArgs ) => void;
	value?: number;
}


export const ProductCard = ({ children, product, className, style, onChange, value }: Props) => {

	const { counter, increaseBy } = useProduct({ onChange, product, value });

	console.log({counter, value});
	

  	return(
		<Provider value={{
			counter,
			increaseBy,
			product
		}}>
			<div 
				className={`${ styles.productCard } ${ className }`}
				style={ style }
			>
				{ children }
			</div>
	  </Provider>
  	)
}


ProductCard.Title = ProductTitle;
ProductCard.Image = ProductImage;
ProductCard.Buttons = ProductButtons;
