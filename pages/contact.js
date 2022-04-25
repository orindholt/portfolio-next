import {useState} from "react";
import {useForm} from "react-hook-form";
import ErrorMsg from "../components/ErrorMsg";

const Contact = () => {
	const emailRegEx =
		/^([^.][a-z,0-9,!#$%&'*+\-/=?^_`{|}~.]{1,64})([^.,\s]@)([a-z\-]{1,255})(\.[a-z0-9]{2,})$/gi;
	const {
		register,
		handleSubmit,
		watch,
		validate,
		getValues,
		formState: {errors},
	} = useForm();
	const onSubmit = data => console.log(data);

	console.log(Object.values(errors)[0]?.type);

	return (
		<>
			<h2 className="text-6xl font-bold text-center">Contact me</h2>
			<p className="text-center font-light mb-14 dark:text-gray text-darkGray">
				(at your own risk..)
			</p>
			<form
				className="grid grid-cols-2 gap-6 max-w-3xl mx-auto relative"
				onSubmit={handleSubmit(onSubmit)}
			>
				{Object.keys(errors).length ? (
					<ErrorMsg
						name={Object.keys(errors)[0]}
						error={Object.values(errors)[0]?.type}
					/>
				) : (
					""
				)}
				<input
					{...register("firstName", {required: true})}
					autoComplete="given-name"
					type="text"
					placeholder="First name"
					className={`form-item ${errors.firstName && "border-red-500"}`}
				/>
				<input
					{...register("lastName", {required: true})}
					autoComplete="family-name"
					type="text"
					placeholder="Last name"
					className={`form-item ${errors.lastName && "border-red-500"}`}
				/>
				<input
					{...register("email", {required: true, pattern: emailRegEx})}
					type="text"
					autoComplete="email"
					placeholder="Email"
					className={`form-item col-span-2 ${errors.email && "border-red-500"}`}
				/>
				<input
					{...register("conEmail", {
						required: true,
						validate: v => v === getValues("email"),
					})}
					type="text"
					autoComplete="none"
					placeholder="Confirm email"
					className={`form-item col-span-2 ${
						errors.conEmail && "border-red-500"
					}`}
				/>
				<textarea
					className={`form-item col-span-2 !resize-none ${
						errors.email && "border-red-500"
					}`}
					placeholder="Message"
				></textarea>
				<button
					type="submit"
					className="bg-orange rounded-sm mx-auto col-span-2 text-white py-1 max-w-xs w-full font-bold text-xl hover:scale-105 transition-transform"
				>
					Send
				</button>
			</form>
		</>
	);
};

export default Contact;
