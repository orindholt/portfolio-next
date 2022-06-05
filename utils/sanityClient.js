import { createClient } from "next-sanity";

export const client = createClient({
	projectId: "94ov5h9s",
	dataset: "production",
	apiVersion: "2022-05-23",
	useCdn: false,
});
