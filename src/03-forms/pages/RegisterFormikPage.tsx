import { Form, Formik } from "formik";
import * as Yup from "yup";
import { MyTextInput } from "../components";
import "../styles/styles.css";

export const RegisterFormikPage = () => {
	// name: "",
	// email: "",
	// password1: "",
	// password2: "",

	return (
		<div>
			<h1>Register Formik Page</h1>
			<Formik
				initialValues={{
					name: "",
					email: "",
					password1: "",
					password2: "",
				}}
				onSubmit={(values) => {
					console.log(values);
				}}
				validationSchema={Yup.object({
					name: Yup.string()
						.min(2, "El nombre debe de ser de 3 caracteres o más")
						.max(15, "El nombre no debe de ser mayor a 15 caracteres")
						.required(),
					email: Yup.string().email("Revise el formato del correo").required(),
					password1: Yup.string().min(6, "minimo 6 caracteres").required(),
					password2: Yup.string()
						.oneOf([Yup.ref("password1")], "Las contraseñas no son iguales")
						.required(),
				})}
			>
				{({ handleReset }) => (
					<Form>
						<MyTextInput label="Nombre" name="name" placeholder="Your name" />
						<MyTextInput
							label="Email"
							name="email"
							type="email"
							placeholder="mail@mail.com"
						/>
						<MyTextInput
							label="Password"
							name="password1"
							type="password"
							placeholder="****"
						/>
						<MyTextInput
							label="Confirm Password"
							name="password2"
							type="password"
							placeholder="****"
						/>
						<button type="submit">Create</button>
						<button type="button" onClick={handleReset}>
							Reset Form
						</button>
					</Form>
				)}
			</Formik>
		</div>
	);
};
