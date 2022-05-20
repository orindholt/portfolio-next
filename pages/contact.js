import { useState, useContext } from "react";
import { useForm } from "react-hook-form";
import { AnimatePresence, motion as m } from "framer-motion";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { IoCall, IoMail } from "react-icons/io5";
import Head from "next/head";
import Party from "../utils/Party";
import Link from "next/link";
import { formContext } from "../utils/Context";
import GenericButton from "../components/GenericButton";

const maxTxtAreaLength = 400;
const email = "oliver.rindholt@gmail.com";
const phone = "25702404";
const emailRegEx =
	/^([^.][a-z,0-9,!#$%&'*+\-/=?^_`{|}~.]{1,64})([^.,\s]@)([a-z\-]{1,255})(\.[a-z0-9]{2,})$/i;
const nameRegEx = /^\p{L}+$/iu;

const encode = data => {
	return Object.keys(data)
		.map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
		.join("&");
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
		conEmail: yup
			.string()
			.required("Please repeat your email")
			.oneOf([yup.ref("email")], "This email doesn't seem to match"),
		msgArea: yup
			.string()
			.required("Please write a message")
			.max(maxTxtAreaLength, "How dare you try to bypass the max?!"),
	})
	.required();

const Contact = () => {
	const { setFormData } = useContext(formContext);
	const [name, setName] = useState("");
	const [submitted, setSubmitted] = useState(false);
	const [error, setError] = useState(true);
	const capitalizeString = text => {
		if (typeof text === "string" && text.length >= 1) {
			return `${text.charAt(0).toUpperCase()}${text.substring(1)}`;
		} else return undefined;
	};

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
		if (data.conEmail) delete data?.conEmail;
		fetch("/", {
			method: "POST",
			headers: { "Content-Type": "application/x-www-form-urlencoded" },
			body: encode({ "form-name": "contact", data }),
		})
			.then(() => console.log("Message has been sent."))
			.catch(error => console.error(error));
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
				<meta name="description" content="Generated by create next app" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<>
				<m.h2
					initial={{ opacity: 0, y: -20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ type: "tween", duration: 1 }}
					className="text-6xl font-bold text-center transition-colors"
				>
					Contact{" "}
					<span className="hover:text-orange-normal transition-colors">
						<Link href="/about">me</Link>
					</span>
				</m.h2>
				<m.p className="text-center font-light mb-14 dark:text-gray-normal text-black dark:opacity-20 opacity-50 select-none">
					(at your own risk..)
				</m.p>
				<form
					className="grid grid-cols-2 gap-6 max-w-3xl mx-auto relative"
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
								errors.msgArea?.message}
						</p>
					)}
					<input
						{...register("firstName")}
						autoComplete="given-name"
						type="text"
						placeholder="First name"
						aria-invalid={errors.firstName ? true : false}
						className={`form-item ${errors.firstName && "border-red"}`}
					/>
					<input
						{...register("lastName")}
						autoComplete="family-name"
						type="text"
						placeholder="Last name"
						aria-invalid={errors.lastName ? true : false}
						className={`form-item ${errors.lastName && "border-red"}`}
					/>
					<input
						{...register("email")}
						type="text"
						autoComplete="email"
						placeholder="Email"
						aria-invalid={errors.email ? true : false}
						className={`form-item col-span-2 ${errors.email && "border-red"}`}
					/>
					<input
						{...register("conEmail")}
						type="text"
						autoComplete="none"
						placeholder="Confirm email"
						aria-invalid={errors.conEmail ? true : false}
						className={`form-item col-span-2 ${
							errors.conEmail && "border-red"
						}`}
					/>
					<div className="col-span-2 w-full relative">
						<textarea
							{...register("msgArea")}
							className={`form-item !resize-none w-full h-32 ${
								errors.msgArea && "border-red"
							}`}
							id="msgArea"
							maxLength={maxTxtAreaLength}
							placeholder="Message"
						></textarea>
						<label
							htmlFor="msgArea"
							className="absolute bottom-3 right-2 font-light text-sm text-gray-normal select-none"
						>
							{watch("msgArea")?.length || 0}/{maxTxtAreaLength}
						</label>
					</div>
					<GenericButton
						type="submit"
						classes="col-span-2 mx-auto text-xl !px-6"
					>
						Send
					</GenericButton>
				</form>
				<p className="my-2 dark:opacity-10 opacity-40">Or</p>
				<div className="flex flex-col gap-2 items-center">
					<a
						href={`mailto:${email}`}
						className="flex items-center justify-center gap-1 font-medium hover:scale-105 transition-transform hover:text-orange-normal"
					>
						<IoMail />
						<p>{email}</p>
					</a>
					<a
						href={`tel:+45${phone}`}
						className="flex items-center justify-center gap-1 font-medium hover:scale-105 transition-transform hover:text-orange-normal"
					>
						<IoCall />
						<p>+45 {phone}</p>
					</a>
				</div>
			</>
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
