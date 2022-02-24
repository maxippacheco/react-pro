import { ChangeEvent, useState } from 'react';

// initState es del tipo de dato q recibo => generico
export const useForm = <T>( initState: T ) => {

	const [formData, setFormData] = useState(initState);	


	const onChange = (evento: ChangeEvent<HTMLInputElement> ) => {

		setFormData( prev => ({
				...prev,
				[ evento.target.name ]: evento.target.value
		}));

	} 

	const reset = () => setFormData({ ...initState });

	const isValidEmail = ( email: string ) => {
      const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
  	}	

	return{
		...formData,

		// properties
		formData,

		// methods
		isValidEmail,
		onChange,
		reset,
	}
}