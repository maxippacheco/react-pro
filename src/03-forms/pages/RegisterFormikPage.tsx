import { Formik, Form } from 'formik';
import '../styles/styles.css';
import * as Yup from 'yup';
import { MyTextInput } from '../components';

export const RegisterFormikPage = () => {


  	return (
		<div>
			<h1>Register Formik Page</h1>

			<Formik
				initialValues={{
					name: "",
					email: "",
					password1: "",
					password2: ""
				}}
				onSubmit={ ( values ) => console.log(values)}
				validationSchema={ Yup.object({
					name: Yup.string().min(2, "Minimum 2 characters").max(15, 'Must be 15 characters or less').required('Required'),
					email: Yup.string().email('Put the correct email format').required('Required'),
					password1: Yup.string().min(6, 'Minimum 6 characters').required('Required'),
					password2: Yup.string().min(6, 'Minimum 6 characters').required('Required').oneOf([ Yup.ref('password1'), null ], 'Password must match')
				})}
			>
				{
					( { handleReset } ) => (
						<Form>
							<MyTextInput 
								name="name" 
								label="Name" 
								placeholder="Name"
							/>

							<MyTextInput 
								name="email" 
								label="Email" 
								placeholder="Email"
								type="email"
							/>

							<MyTextInput 
								name="password1" 
								label="Password" 
								placeholder="Password"
								type="password"
							/>

							<MyTextInput 
								name="password2" 
								label="Password" 
								placeholder="Password"
								type="password"
							/>

							<button type="submit">Submit</button>
							<button type="button" onClick={ handleReset }>Reset</button>
					
						</Form>

					)
				}
			</Formik>
		</div>
  	)
}
