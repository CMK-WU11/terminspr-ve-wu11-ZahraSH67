import { cookies } from "next/headers"

export default async function Activitet({ activitet }) {
	const cookieStore = await cookies()
	const token = cookieStore.get("repe_token")
	const uid = cookieStore.get("repe_uid")

	return (
		// <section>

			<h2>{activitet.name}</h2>

	
		// </section>
	)
}