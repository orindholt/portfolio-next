import { string, object, mixed, boolean } from "yup";

export const maxTxtAreaLength = 400;

const emailRegEx =
	/^([^.][a-z,0-9,!#$%&'*+\-/=?^_`{|}~.]{1,64})([^.,\s]@)([a-z\-]{1,255})(\.[a-z0-9]{2,})$/i;
const nameRegEx = /^\p{L}+$/iu;
const phoneRegEx = /(\+{1}\d{1,3})*(\d{8}$)|(^$)/;

const firstName = string()
	.required("Please enter your first name")
	.matches(nameRegEx, "Your first name can't include special characters");
const lastName = string()
	.required("Please enter your last name")
	.matches(nameRegEx, "Your last name can't include special characters");
const email = string()
	.required("Please enter your email")
	.email("Please enter a vaild email")
	.matches(emailRegEx, "Please enter a vaild email");
const msg = string()
	.required("Please enter a message")
	.max(maxTxtAreaLength, "How dare you try to bypass the max?!");
const phone = string().matches(phoneRegEx, "Please enter a valid phone number");
const subject = string().required("Please enter a subject");
export const password = string().required("Please enter a password");
const title = string().required("Please enter a title");
const repo = string().optional();
const demo = string().optional();
const image = mixed().required("You need to upload an image");
const featured = boolean().optional();
const description = string().optional();
const tags = string().optional();

export const contactSchema = object({
	firstName,
	lastName,
	email,
	msg,
	phone,
	subject,
});

export const adminSchema = object({
	email,
	password,
});

export const newProjectSchema = object({
	title,
	repo,
	demo,
	image,
	featured,
	description,
	tags,
});
