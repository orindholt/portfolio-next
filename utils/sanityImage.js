import imageUrlBuilder from "@sanity/image-url";
import { client } from "./sanityClient";

const builder = imageUrlBuilder(client);

const urlFor = source => {
	return builder.image(source);
};

export default urlFor;
