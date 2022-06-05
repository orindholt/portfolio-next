import { useState, useContext } from "react";
import { useForm } from "react-hook-form";
import { AnimatePresence, motion as m } from "framer-motion";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Head from "next/head";
import Party from "../utils/Party";
import Link from "next/link";
import { formContext } from "../utils/Context";
import GenericButton from "../components/GenericButton";
import axios from "axios";
import ContactInput from "../components/ContactInput";

const maxTxtAreaLength = 400;
const emailRegEx =
	/^([^.][a-z,0-9,!#$%&'*+\-/=?^_`{|}~.]{1,64})([^.,\s]@)([a-z\-]{1,255})(\.[a-z0-9]{2,})$/i;
const nameRegEx = /^\p{L}+$/iu;

const capitalizeString = text => {
	if (typeof text === "string" && text.length >= 1) {
		return `${text.charAt(0).toUpperCase()}${text.substring(1)}`;
	} else return undefined;
};

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
			.matches(emailRegEx, "Please write a vaild email")
			.required(),
		msg: yup
			.string()
			.required("Please write a message")
			.max(maxTxtAreaLength, "How dare you try to bypass the max?!"),
		subject: yup.string().required("Please write a subject"),
	})
	.required();

const Contact = () => {
	const { setFormData } = useContext(formContext);
	const [name, setName] = useState("");
	const [submitted, setSubmitted] = useState(false);
	const [error, setError] = useState(true);

	const {
		register,
		handleSubmit,
		watch,
		reset,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(schema),
	});

	const onSubmit = data => {
		const config = {
			headers: {
				Accept: "application/json, text/plain, */*",
				"Content-Type": "application/json",
			},
		};
		axios.post("api/submit", JSON.stringify(data), config);

		setFormData(data);
		setName(data.firstName);
		setSubmitted(true);
		setError(false);
		reset();
		setTimeout(() => {
			setError(true);
		}, 4000);
	};

	return (
		<>
			<Head>
				<title>Oliver - Contact</title>
			</Head>
			<div className="my-auto pb-16">
				<m.h2
					initial={{ opacity: 0, y: -20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ type: "tween", duration: 1 }}
					className="text-6xl font-bold text-center"
				>
					Contact{" "}
					<span className="md:hover:text-orange-normal">
						<Link href="/about">me</Link>
					</span>
				</m.h2>
				<m.p className="text-center font-light mb-14 dark:text-gray-normal text-black dark:opacity-20 opacity-50 select-none">
					(at your own risk..)
				</m.p>
				<form
					className="grid grid-cols-2 gap-6 max-w-4xl relative w-full mx-auto"
					onSubmit={handleSubmit(onSubmit)}
				>
					<AnimatePresence>
						{!error && (
							<m.p
								exit={{ opacity: 0, y: -10 }}
								transition={{ duration: 1, delay: 1 }}
								className="text-green absolute -top-8 w-full text-center"
							>
								Thanks{submitted && `${" "}${capitalizeString(name)}`}, your
								message was sent!
							</m.p>
						)}
					</AnimatePresence>
					{Boolean(Object.keys(errors).length) && (
						<p
							role="alert"
							className="text-red absolute -top-8 w-full text-center"
						>
							{errors.firstName?.message ||
								errors.lastName?.message ||
								errors.email?.message ||
								errors.conEmail?.message ||
								errors.msg?.message}
						</p>
					)}
					<ContactInput
						register={{ ...register("firstName") }}
						autoComplete="given-name"
						placeholder="First Name"
						error={errors.firstName}
					/>
					<ContactInput
						register={{ ...register("lastName") }}
						autoComplete="family-name"
						placeholder="Last name"
						error={errors.lastName}
					/>
					<ContactInput
						register={{ ...register("email") }}
						autoComplete="email"
						placeholder="Email"
						error={errors.email}
						className="col-span-2"
					/>
					<ContactInput
						register={{ ...register("subject") }}
						autoComplete="none"
						placeholder="Subject"
						className="col-span-2"
						error={errors.subject}
					/>
					<div className="col-span-2 w-full relative">
						<textarea
							{...register("msg")}
							className={`form-item !resize-none w-full h-32 ${
								errors.msg && "border-red"
							}`}
							id="msg"
							maxLength={maxTxtAreaLength}
							placeholder="Message"
						></textarea>
						<label
							htmlFor="msg"
							className="absolute bottom-3 right-2 font-light text-sm text-gray-normal select-none"
						>
							{watch("msg")?.length || 0}/{maxTxtAreaLength}
						</label>
					</div>
					<GenericButton
						type="submit"
						className="col-span-2 mx-auto text-xl !px-6"
					>
						Send
					</GenericButton>
				</form>
			</div>
			<AnimatePresence>
				{!error && (
					<m.div exit={{ opacity: 0 }} transition={{ duration: 2 }}>
						<Party />
					</m.div>
				)}
			</AnimatePresence>
		</>
	);
};

export default Contact;
