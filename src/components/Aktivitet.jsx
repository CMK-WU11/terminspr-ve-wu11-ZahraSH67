import Image from "next/image"
import Link from "next/link"


export default function Aktivitet({ aktivitet }) {
	return (
	<>
		<Link href={`/aktiviteter/${aktivitet.id}`}>
			<article className="py-[1rem] mb-[3rem]">
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



