import Link from "next/link";
import Image from "next/image";

export default function DrawerMenu(){
    return(

        <div className="fixed inset-x-0 bottom-0 bg-white shadow-lg bg-[#EAEAEA] border-none">
        <div className="flex justify-around items-center h-16">

          <Link href="/aktiviteter">
            <div className="flex justify-center items-center w-10 h-10 rounded-full border  border-black">
                <Image src="/home.png"  width={60} height={60} alt="aktiviteter icon"  className="w-6 h-6"/>

            </div>
          </Link>

          <Link href="/search">
            <div className="flex justify-center items-center w-10 h-10 rounded-full border  border-black">
                <Image src="/search.png" width={60} height={60} alt="søg icon"  className="w-6 h-6"/>
            </div>
          </Link> 

          <Link href="/kalender">
            <div className="flex justify-center items-center w-10 h-10 rounded-full border border-black">
                <Image src="/calendar.png" width={60} height={60} alt="kalender icon" className="w-6 h-6"/>
            </div>
          </Link>

        </div>
      </div>

    )

}




