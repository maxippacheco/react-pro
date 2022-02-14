import { useEffect, useRef, useState } from 'react';
import { Product, onChangeArgs, InitialValues } from '../interfaces/interfaces';

interface useProductArgs{
	product: Product;
	onChange?: ( args: onChangeArgs ) => void;
	value?: number;
	initialValues?: InitialValues;
}

export const useProduct = ( { onChange, product, value = 0, initialValues }: useProductArgs ) => {
	
	const [ counter, setCounter ] = useState<number>( initialValues?.count || value );
	const isMounted = useRef(false);
	

	const increaseBy = (value: number) => {

		// tomo counter + value, o como maximo 0
		// let newValue = Math.max( counter + value, 0 );

		let newValue = initialValues?.maxCount
							? Math.min( Math.max( counter + value, 0 ), initialValues.maxCount)
							: Math.max( counter + value , 0 );

		// if ( initialValues?.maxCount ) {			
		// 	// voy a tomar el minimo de esos dos y no el maximo
		// 	newValue = Math.min( newValue, initialValues.maxCount );		
		// }
				
		// valor max 0
		setCounter( newValue );
		

	  	onChange && onChange({ count: newValue, product });
	};


	const reset = () => setCounter( initialValues?.count || value );


	useEffect(() => {
		if ( !isMounted.current ) return;

		setCounter( value );
	
	}, [ value ]);

	useEffect(() => {
		isMounted.current = true;
	}, []);
	
	


	return{
		counter,
		value,
		isMaxCountReached: !!initialValues?.count && initialValues.maxCount === counter,
		maxCount: initialValues?.maxCount,

		increaseBy,
		reset
	}

};


