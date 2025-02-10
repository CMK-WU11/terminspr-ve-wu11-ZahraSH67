// import Image from "next/image";
import Link from "next/link"
import Image from "next/image"

export default function Home(){
  return(   
    <div className="bg-[url('/splash-image.jpg')]  
    w-screen h-screen bg-cover bg-center flex justify-center 
    items-center relative">
       <div className="fixed top-[411px] left-0">
        <Image src="/logo.png" width={341} height={153} alt="logo"/>
      </div>
      <Link href="/aktiviteter">
        <div className="fixed bottom-0 left-0 right-0 mb-[54px] flex justify-center">
          <button>
          Kom i gang
          </button>
        </div>
      </Link>
    </div>
  )
}



