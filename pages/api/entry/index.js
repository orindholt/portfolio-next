import db from "../../../utils/db";

const collectionId = "blogs";

const entry = async (req, res) => {
	try {
		const { slug } = req.body;
		const entries = await db.collection(collectionId).get();
		const entriesData = entries.docs.map(entry => entry.data());

		if (entriesData.some(entry => entry.slug === slug)) {
			res.status(400).end();
		} else {
			const { id } = await db.collection(collectionId).add({
				...req.body,
				created: new Date().toISOString(),
			});
			res.status(200).json({ id });
		}
	} catch (e) {
		res.status(400).end();
	}
};

export default entry;
