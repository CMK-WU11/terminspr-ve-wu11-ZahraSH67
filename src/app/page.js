import Image from "next/image";
// import logo from "/public/images/logo.png";
import Link from "next/link";
import Button from "@/components/ui/Button";

export default function Home (){
  
  return(   
    <div className="bg-[url('/splash-image.jpg')]  
    w-screen h-screen bg-cover bg-center flex justify-center 
    items-center relative">
       <div className="fixed top-[320px] left-0">
        <Image src="/logo.png" width={341} height={153} alt="logo"/>
      </div>
      <Link href="/aktiviteter">
        <div className="fixed bottom-0 left-0 right-0 mb-[54px] flex justify-center">
        <Button title="Kom i gang" animate={true} />
        </div>
      </Link>
    </div>

  )
}


