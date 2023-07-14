import * as Yup from "yup"

export const contactFormSchema = Yup.object({
  email: Yup.string().email("Please enter a valid email!").required("Email is required!"),
	fullName: Yup.string().required("Name is required!").min(5, "Name is too short!"),
	message: Yup.string().required("Message cannot be empty!"),
	phone: Yup.string().matches(/^(?!\b(0)\1+\b)(\+?\d{1,3}[. -]?)?\(?\d{3}\)?([. -]?)\d{3}\3\d{4}$/,"Enter your phone number without spaces or hyphens!"),
	subject: Yup.string(),
})