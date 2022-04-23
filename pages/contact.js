import {useState} from "react";
import {useForm} from "react-hook-form";
import ErrorMsg from "../components/ErrorMsg";

const Contact = () => {
	const maxTxtAreaLength = 400;
	const emailRegEx =
		/^([^.][a-z,0-9,!#$%&'*+\-/=?^_`{|}~.]{1,64})([^.,\s]@)([a-z\-]{1,255})(\.[a-z0-9]{2,})$/gi;
	const {
		register,
		handleSubmit,
		getValues,
		watch,
		formState: {errors},
	} = useForm();
	const onSubmit = data => console.log(data);

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
					{...register("conEmail", {required: true})}
					type="text"
					autoComplete="none"
					placeholder="Confirm email"
					className={`form-item col-span-2 ${
						errors.firstName && "border-red-500"
					}`}
				/>
				<div className="col-span-2 w-full relative">
					<textarea
						{...register("msgArea", {
							required: true,
							maxLength: maxTxtAreaLength,
						})}
						className={`form-item !resize-none w-full h-32 ${
							errors.email && "border-red-500"
						}`}
						id="msgArea"
						maxLength={maxTxtAreaLength}
						placeholder="Message"
					></textarea>
					<label
						htmlFor="msgArea"
						className="absolute bottom-3 right-2 font-light text-sm text-gray select-none"
					>
						{watch("msgArea")?.length || 0}/{maxTxtAreaLength}
					</label>
				</div>
				<button
					type="submit"
					className="bg-orange rounded-md mx-auto col-span-2 text-white py-1 max-w-[11.25rem] w-full font-bold text-xl transition-all border-3 border-orange border-solid hover:bg-opacity-0 hover:text-orange hover:scale-105"
				>
					Send
				</button>
			</form>
		</>
	);
};

export default Contact;
