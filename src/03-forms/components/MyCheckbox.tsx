import { ErrorMessage, useField } from "formik";

interface Props{
	label: string;
	name: string;
	// cualq otra propiedad que mande la persona
	[x: string]: any;
}

export const MyCheckbox = ({ label, ...props }: Props) => {

  const [ field ] = useField({...props, type: 'checkbox'});

  	return (
		<>
			<label>
				<input type="checkbox" { ...field } { ...props } /> 
				{ label }
			</label>
			<ErrorMessage name={ props.name } component="span" />
		</>
  	);
};

{/* {
	// errores
	meta.touched && meta.error && (
		<span className="error">{ meta.error }</span>
	)
} */}