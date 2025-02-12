import Header from "@/components/Header"
import { serverFetch } from "@/lib/server-fetch"
import Aktivitet from "@/components/Aktivitet"
import Footer from "@/components/Footer"

//From Brians repetition code 

export default async function Aktiviteter(){
    const data = await serverFetch("http://localhost:4000/api/v1/activities")
    console.log("DATA IS:", data)
    return(
        <div className="bg-[#5E2E53] p-[1rem]">
            <Header title="Aktiviteter" />

			<ul>
				{data.map(aktivitet => <Aktivitet key={aktivitet.id} aktivitet={aktivitet} />)}

			</ul>
            <Footer />
      
        </div>
    )
}





