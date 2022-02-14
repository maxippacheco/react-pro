import { useCallback, useContext } from 'react';

import styles from '../styles/styles.module.css';
import { ProductContext } from './ProductCard';

export interface Props{
	className?: string;
	style?: React.CSSProperties;
}

export const ProductButtons = ({ className, style }: Props) => {

	// maxCount
	const { increaseBy, counter, maxCount } = useContext( ProductContext );


	// SOLUCION DEL PROFE
	// Si hay un valor evalualo sino retorna false
	const isMaxReached = useCallback( 
		() => !!maxCount && counter === maxCount, 
		[ counter, maxCount ] 
	);
	
	// MI SOLUCION
	// const isMaxReached = useCallback(() => {
	// 	if ( counter === maxCount ) {
	// 		return true;
	// 	}else{
	// 		return false;
	// 	}
	//   },[ counter, maxCount])
	


	// useCallbalck isMaxReached, [ counter, maxCount ]
	// TRUE si el count === maxCount
	// FALSE si no lo es


	return(
		<div 
			className={`${ styles.buttonsContainer } ${ className }`} 
			style={ style }
		>
			<button
				className={styles.buttonMinus}
				onClick={ ()  => increaseBy( -1 ) }
			>
				-
			</button>

			<div className={styles.countLabel}> { counter } </div>
			
			<button 
				className={`${ styles.buttonAdd }  ${  isMaxReached() && styles.disabled }`}
				onClick={() => increaseBy(+1)}
			> + </button>
		</div>

	)
}