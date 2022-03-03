
import { Form, Formik } from 'formik';
import { MySelect, MyTextInput } from '../components';
import formJSON from '../data/custom-form.json';
import * as Yup from 'yup';


const initialValues: { [ key: string ]: any } = {};
const requiredFields: { [ key: string ]: any } = {};


for (const input of formJSON) {
	initialValues[ input.name ] = input.value;

	if( !input.validation ) continue;

	let schema = Yup.string();

	for ( const rule of input.validation ) {
		if( rule.type === 'required' ) {
			// adding required prop
			schema = schema.required('Este campo es requerido');
		}

		if( rule.type === 'minLength' ) {
			schema = schema.min( (rule as any).value || 1, `El valor tiene que ser minimo de ${ (rule as any).value || 2 } caracteres`)
		}
		if( rule.type === 'email' ) {
			schema = schema.email("Debe ser un email")
		}
		// ... otras reglas

	}

	// create the object for each field
	requiredFields[ input.name ] = schema;

}

const validationSchema = Yup.object({ ...requiredFields });

export const DynamicForm = () => {
  	return (
		<div>
			<h1>Dynamic Forms</h1>
			
			
			<Formik
				initialValues={ initialValues }
				validationSchema={ validationSchema }
				onSubmit={ values => console.log( values ) }
			>
				{
					( formik ) => (
						<Form noValidate>
							
							{
								formJSON.map( ({ name, label, type, placeholder, options }) => {
									
									if( type === 'input' || type === 'password' || type === 'email' ){
										return <MyTextInput
													key={ name } 
													type={ type as any}
													label={ label } 
													name={ name } 
													placeholder={ placeholder } />
									
									} else if( type === 'select' ){
										return (
											<MySelect
												key={ name }
												label={ label }
												name={ name }
											>
												<option value="">Select an option</option>
												{
													options?.map( (option) => (
														<option key={ option.id } value={ option.id }>{ option.label }</option>	
													))
												}
											</MySelect>
											
											
										)
									}


									throw new Error(`El type: ${ type }, no es soportado`)
									
								})
								
							}

							<button type='submit'>Submit</button>
						</Form>
					)
				}
			</Formik>

		</div>
  	)
}
