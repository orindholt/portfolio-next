import Section from "../../components/Section";
import ContactInput from "../../components/Contact/ContactInput";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { password as passwordValidation } from "../../utils/validationSchema";
import * as yup from "yup";
import GenericButton from "../../components/GenericButton";
import { useRouter } from "next/router";
import supabase from "../../utils/supabaseClient";

const schema = yup.object({
	password: passwordValidation,
});

const Invite = () => {
	const router = useRouter();
	const session = supabase.auth.session();

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(schema),
	});

	const submitHandler = async ({ password }) => {
		if (session) {
			supabase.auth.setAuth(session.access_token);
			const { error } = await supabase.auth.update({ password });
			if (error) {
				console.log(error);
				return;
			}
			router.push("/admin");
		} else console.log("No session");
	};

	return (
		<Section>
			<h1 className="text-5xl font-bold mb-4">New Password</h1>
			<form
				className="flex flex-col gap-8 py-4 max-w-md w-full mx-auto text-lg"
				onSubmit={handleSubmit(submitHandler)}
			>
				<ContactInput
					register={{ ...register("password") }}
					autoComplete="current-password"
					placeholder="Password"
					type="password"
					error={errors.password}
				/>
				<GenericButton className="max-w-fit text-xl mx-auto mt-2" type="submit">
					Sign up
				</GenericButton>
			</form>
		</Section>
	);
};

export default Invite;
