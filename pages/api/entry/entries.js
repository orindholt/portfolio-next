import db from "../../../utils/db";

const collectionId = "blogs";

const entries = async (req, res) => {
	try {
		const entries = await db.collection(collectionId).orderBy("created").get();
		const entriesData = entries.docs.map(entry => ({
			id: entry.id,
			...entry.data(),
		}));
		res.status(200).json({ entriesData });
	} catch (e) {
		res.status(400).end();
	}
};

export default entries;