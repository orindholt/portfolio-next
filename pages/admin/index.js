import Section from "../../components/Section";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { adminSchema as schema } from "../../utils/validationSchema";
import ContactInput from "../../components/Contact/ContactInput";
import GenericButton from "../../components/GenericButton";
import supabase from "../../utils/supabaseClient";
import { useRouter } from "next/router";
import { useEffect } from "react";
import PasswordInput from "../../components/Contact/PasswordInput";

const Admin = () => {
	const session = supabase.auth.session();
	const router = useRouter();

	const reroute = () => router.push("/admin/projects");

	useEffect(() => {
		if (session) reroute();
	}, []);

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(schema),
	});

	const submitHandler = async ({ email, password }) => {
		const { error } = await supabase.auth.signIn({
			email,
			password,
		});
		if (error) {
			console.log(error);
			return;
		}
		console.log("Logged in!");
		reroute();
	};

	return (
		<Section>
			<h1 className="text-5xl xl:text-6xl font-bold mb-4">
				Admin Authentication
			</h1>
			<form
				className="flex flex-col gap-8 py-4 max-w-md w-full mx-auto text-lg"
				onSubmit={handleSubmit(submitHandler)}
			>
				<ContactInput
					register={{ ...register("email") }}
					autoComplete="email"
					placeholder="Email"
					error={errors.email}
				/>
				<PasswordInput
					register={{ ...register("password") }}
					autoComplete="current-password"
					placeholder="Password"
					type="password"
					error={errors.password}
				/>
				<GenericButton className="max-w-fit text-xl mx-auto mt-2" type="submit">
					Login
				</GenericButton>
			</form>
		</Section>
	);
};

export default Admin;
