// import { cookies } from "next/headers"
import Image from "next/image"
import Link from "next/link"


export default async function Aktivitet({ aktivitet }) {
	// const cookieStore = await cookies()
	// const token = cookieStore.get("repe_token")
	// const uid = cookieStore.get("repe_uid")

	return (

	// 	<div>
    //     <Image src={activitet.asset.url} height={150} width={150}alt="activity-pic" className="h-[25em] w-full rounded-l-lg rounded-tr-lg"  />
	// 	<h2>{activitet.name}</h2>
	// 	<p>{activitet.minAge}-{activitet.maxAge} år</p>
    //   </div>


	<>
		<Link href={`/aktiviteter/${aktivitet.id}`}>
			<article className="py-[1rem]">
			<section className="relative w-auto mx-auto h-[344px]">
				{aktivitet.asset && aktivitet.asset.url && (
				<Image
					src={aktivitet.asset.url}
					alt="aktivitet"
					layout="fill"
					objectFit="cover"
					style={{ borderRadius: "40px 40px 0px 40px" }}
				/>
				)}
				<div
				className="absolute bottom-0 left-0 bg-[#E1A1E9] w-full h-[96px] flex flex-col justify-center  pl-4"
				style={{
					borderRadius: "0px 40px 0px 40px",
					opacity: 0.8,
				}}
				>
				<div className="text-lg pl-[15px]">
					<h2>{aktivitet.name}</h2>
					<h2>
					{aktivitet.minAge}-{aktivitet.maxAge} år
					</h2>
				</div>
				</div>
			</section>
			</article>
			</Link>

		
	</>

		
	

	
	)
}



