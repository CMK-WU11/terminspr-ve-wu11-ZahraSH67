import Header from "@/components/Header"
import { serverFetch } from "@/lib/server-fetch"
import Activitet from "@/components/Activitet"
import Link from "next/link"


export default async function Aktiviteter(){
    const data = await serverFetch("http://localhost:4000/api/v1/activities")
    console.log("DATA IS:", data)
    return(
        <div className="bg-[#5E2E53]">
            <Header title="Aktiviteter" />
            <Link href="/activitet" className="">
				{data.map(activitet => <Activitet key={activitet.id} activitet={activitet} />)}
                <div>
        <Image src={activity.asset.url} height={150} width={150}alt="activity-pic" className="h-[25em] w-full rounded-l-lg rounded-tr-lg"  />
      </div>


            </Link>
        </div>
    )
}





