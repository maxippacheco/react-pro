import { Formik, Form } from "formik";
import * as Yup from 'yup';
import "../styles/styles.css";
import { MyCheckbox, MySelect, MyTextInput } from '../components'


export const FormikAbstractation = () => {


  	return (
		<div>
			<h1>Formik Abstractation</h1>

			<Formik
				initialValues={{
					firstName: "",
					lastName: "",
					email: "",
					terms: false,
					jobType: ""
				}}
				onSubmit={ ( values ) => console.log(values)}
				validationSchema={ Yup.object({
					firstName: Yup.string().max(15, 'Must be 15 characters or less').required('Required'),
					lastName: Yup.string().max(10, 'Must be 10 characters or less').required('Required'),
					email: Yup.string().email('Put the correct email format').required('Required'),
					// terms: Yup.bool().isTrue().required('Please accept the conditions')
					terms: Yup.boolean().oneOf([ true ], 'Accept the terms and conditions'),
					jobType: Yup.string().required('Required').notOneOf([ 'it-jr' ], 'This job is not required' )
				})}
			>
				{
					( formik ) => (
						<Form>
							<MyTextInput 
								name="firstName" 
								label="First Name" 
								placeholder="First Name"
							/>
							
							<MyTextInput 
								name="lastName" 
								label="Last Name" 
								placeholder="Last Name"
							/>

							<MyTextInput 
								name="email" 
								label="Email" 
								placeholder="Email"
								type="email"
							/>
							
							<MySelect label="Job Type" name="jobType">
								<option value="">Pick Something</option>
								<option value="developer">Developer</option>
								<option value="designer">Designer</option>
								<option value="it-senior">IT Senior</option>
								<option value="it-jr">IT Jr.</option>
							</MySelect>

							<MyCheckbox 
								label="Terms & Conditions"
								name="terms"
							/>

							<button type="submit">Submit</button>
					
						</Form>

					)
				}
			</Formik>

		</div>
  	);
};
