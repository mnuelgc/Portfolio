import { getCollection } from "astro:content";

export async function getProjectStaticPaths() {
	const entries = await getCollection("projects");
	const ids = Array.from(new Set(entries.map((entry) => entry.data.projectId)));
	return ids.map((id) => ({ params: { id } }));
}
