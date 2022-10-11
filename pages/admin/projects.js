import Section from "../../components/Section";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import {
	newProjectSchema as schema,
	maxTxtAreaLength,
} from "../../utils/validationSchema";
import ContactInput from "../../components/Contact/ContactInput";
import GenericButton from "../../components/GenericButton";
import supabase from "../../utils/supabaseClient";
import MessageInput from "../../components/Contact/MessageInput";
import CheckboxInput from "../../components/Contact/CheckboxInput";
import capitalizeString from "../../utils/capitalizeString";
import { useState } from "react";
import PageLoader from "../../components/PageLoader";

/* export async function getStaticProps() {
	const { data, error } = await supabase.storage
		.from("project-assets")
		.list("projects");
	return {
		props: { data, error },
	};
} */

const NewProject = () => {
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

	const startLoading = () => setIsLoading(true);
	const stopLoading = () => setIsLoading(false);

	const finish = () => {
		stopLoading();
		reset();
	};

	const submitHandler = async formData => {
		startLoading();
		let imageURL;
		const imageFile = formData.image[0];
		const slug = formData.title.toLowerCase().replace(/\s/g, "-").trim();
		const bucketName = "project-assets";
		const filePath = `projects/${capitalizeString(slug)}/${imageFile.name}`;

		if (imageFile) {
			const { error: uploadError } = await supabase.storage
				.from(bucketName)
				.upload(filePath, imageFile);
			const { data: imageResult, error: urlError } = supabase.storage
				.from(bucketName)
				.getPublicUrl(filePath);
			if (uploadError?.statusCode !== "23505" && (uploadError || urlError)) {
				console.log("Upload failed", uploadError || urlError);
				stopLoading();
				return;
			}
			imageURL = imageResult.publicURL;
		}
		const tags = formData?.tags
			? formData.tags.replace(/\s/g, "").split(",")
			: null;
		const timestamp = new Date();
		formData.image = imageURL;
		formData.tags = tags;
		formData.created_at = timestamp;
		const { data, error: insertError } = await supabase
			.from("projects")
			.insert([{ ...formData, slug }]);
		console.log(data, insertError);
		if (insertError) {
			stopLoading();
			console.log("Insert failed", insertError);
			return;
		}
		finish();
	};

	return (
		<>
			<Section>
				<h1 className="text-5xl xl:text-6xl font-bold mb-4">Add Project</h1>
				<form
					className="grid grid-cols-2 gap-8 py-4 max-w-3xl w-full mx-auto text-lg"
					onSubmit={handleSubmit(submitHandler)}
				>
					<ContactInput
						register={{ ...register("title") }}
						autoComplete="none"
						placeholder="Title"
						error={errors.title}
						className="col-span-2"
					/>
					<ContactInput
						register={{ ...register("repo") }}
						autoComplete="none"
						placeholder="Github Reposititory - https://github.com..."
						error={errors.repo}
						required={false}
					/>
					<ContactInput
						register={{ ...register("website") }}
						autoComplete="none"
						placeholder="Demo URL - https://(...).netlify.app/"
						error={errors.website}
						required={false}
					/>
					<ContactInput
						register={{ ...register("image") }}
						autoComplete="none"
						error={errors.image}
						type="file"
					/>
					<CheckboxInput
						register={{ ...register("can_be_featured") }}
						label="Can be featured"
						required={false}
					/>
					<MessageInput
						register={{ ...register("description") }}
						className="h-40 col-span-2 w-full"
						error={errors.description}
						maxLength={maxTxtAreaLength}
						placeholder="Description"
						watch={watch("description")}
						required={false}
					/>
					<ContactInput
						register={{ ...register("tags") }}
						autoComplete="none"
						error={errors.tags}
						required={false}
						placeholder="Tags -  React, Tailwind"
						className="col-span-2"
					/>
					<GenericButton
						className="max-w-fit text-xl mx-auto mt-2 col-span-2"
						type="submit"
					>
						Add Project
					</GenericButton>
				</form>
			</Section>
			{isLoading && <PageLoader />}
		</>
	);
};

export default NewProject;
