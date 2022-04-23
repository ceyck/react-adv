import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import "../styles/styles.css";

export const FormikComponents = () => {
	return (
		<div>
			<h1>Formik Components</h1>

			<Formik
				initialValues={{
					firstName: "",
					lastName: "",
					email: "",
					terms: false,
					jobType: "",
				}}
				onSubmit={(values) => {
					console.log(values);
				}}
				validationSchema={Yup.object({
					firstName: Yup.string()
						.max(15, "Debe de tener 15 caracteres o menos")
						.required("Requerido"),
					lastName: Yup.string()
						.max(15, "Debe de tener 15 caracteres o menos")
						.required("Requerido"),
					email: Yup.string()
						.email("El correo no tiene un formato válido")
						.required("Requerido"),
					terms: Yup.boolean().oneOf(
						[true],
						"Debe de aceptar las condiciones."
					),
					jobType: Yup.string()
						.notOneOf(["it-jr"], "Esta opción no es permitida")
						.required("Requerido"),
				})}
			>
				{(formik) => (
					<Form>
						<label htmlFor="firstName">First Name</label>
						<Field name="firstName" type="text" />
						<ErrorMessage component="span" name="firstName" />
						<label htmlFor="lastName">Last Name</label>
						<Field name="lastName" type="text" />
						<ErrorMessage component="span" name="lastName" />
						<label htmlFor="email">Email</label>
						<Field name="email" type="email" />
						<ErrorMessage component="span" name="email" />

						<label htmlFor="jobType">Job Type</label>
						<Field name="jobType" as="select">
							<option value="">Pick something</option>
							<option value="developer">Developer</option>
							<option value="designer">Designer</option>
							<option value="it-senior">It Senior</option>
							<option value="it-jr">It Junior</option>
						</Field>
						<ErrorMessage component="span" name="jobType" />
						<label>
							Terms and conditions
							<Field name="terms" type="checkbox" />
						</label>
						<ErrorMessage component="span" name="terms" />

						<button type="submit">Submit</button>
					</Form>
				)}
			</Formik>
		</div>
	);
};
