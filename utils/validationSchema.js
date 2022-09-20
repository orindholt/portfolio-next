import * as yup from "yup";

export const maxTxtAreaLength = 400;

const emailRegEx =
	/^([^.][a-z,0-9,!#$%&'*+\-/=?^_`{|}~.]{1,64})([^.,\s]@)([a-z\-]{1,255})(\.[a-z0-9]{2,})$/i;
const nameRegEx = /^\p{L}+$/iu;
const phoneRegEx = /(\+{1}\d{1,3})*(\d{8}$)|(^$)/;

const schema = yup
	.object({
		firstName: yup
			.string()
			.required("Please enter your first name")
			.matches(nameRegEx, "Your first name can't include special characters"),
		lastName: yup
			.string()
			.required("Please enter your last name")
			.matches(nameRegEx, "Your last name can't include special characters"),
		email: yup
			.string()
			.email("Invaild email")
			.matches(emailRegEx, "Please enter a vaild email")
			.required(),
		msg: yup
			.string()
			.required("Please enter a message")
			.max(maxTxtAreaLength, "How dare you try to bypass the max?!"),
		phone: yup
			.string()
			.matches(phoneRegEx, "Please enter a valid phone number"),
		subject: yup.string().required("Please enter a subject"),
	})
	.required();

export default schema;
