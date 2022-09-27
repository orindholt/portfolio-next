import { useState, useContext } from "react";
import { useForm } from "react-hook-form";
import { AnimatePresence, motion as m } from "framer-motion";
import { yupResolver } from "@hookform/resolvers/yup";
import schema, { maxTxtAreaLength } from "../utils/validationSchema";
import Party from "../utils/Party";
import Link from "next/link";
import { formContext } from "../utils/Context";
import GenericButton from "../components/GenericButton";
import ContactInput from "../components/Contact/ContactInput";
import sendMail from "../utils/sendMail";
import PageLoader from "../components/PageLoader";
import MessageInput from "../components/Contact/MessageInput";
import capitalizeString from "../utils/capitalizeString";
import Section from "../components/Section";

const Contact = () => {
	const { setFormData } = useContext(formContext);
	const [name, setName] = useState("");
	const [submitted, setSubmitted] = useState(false);
	const [error, setError] = useState(true);
	const [isLoading, setIsLoading] = useState(false);

	const {
		register,
		handleSubmit,
		watch,
		reset,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(schema),
	});

	const submitHandler = async data => {
		setIsLoading(true);
		await sendMail(data);

		setIsLoading(false);
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
		<Section>
			{isLoading && <PageLoader />}
			<div className="my-auto pb-16">
				<m.h1
					initial={{ opacity: 0, y: -20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ type: "tween", duration: 1 }}
					className="text-6xl font-bold text-center"
				>
					Contact{" "}
					<span className="md:hover:text-orange-normal">
						<Link href="/about">me</Link>
					</span>
				</m.h1>
				<m.p className="text-center font-light mb-14 dark:text-gray-normal text-black dark:opacity-20 opacity-50 select-none font-mali">
					(at your own risk..)
				</m.p>
				<form
					className="grid grid-cols-2 gap-4 md:gap-8 max-w-4xl relative w-full mx-auto"
					onSubmit={handleSubmit(submitHandler)}
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
						register={{ ...register("phone") }}
						autoComplete="tel"
						placeholder="Phone"
						error={errors.phone}
						required={false}
					/>
					<ContactInput
						register={{ ...register("subject") }}
						autoComplete="none"
						placeholder="Subject"
						error={errors.subject}
					/>
					<MessageInput
						register={{ ...register("msg") }}
						className="h-40 col-span-2 w-full"
						error={errors.msg}
						maxLength={maxTxtAreaLength}
						watch={watch("msg")}
					/>
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
		</Section>
	);
};

export default Contact;
