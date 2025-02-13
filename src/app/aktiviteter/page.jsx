import Card from "@/components/dataDisplay/Card";
import DrawerMenu from "@/components/navigation/DrawerMenu";
import { Suspense } from "react";
import Loading from "@/components/ui/Loading";
// import StaticHeading from "@/components/ui/StaticHeading";
import Heading from "@/components/ui/Heading";

export const metadata = {
  title: "Landrup Dans - en web app til en danseskole ",
};

const Aktiviteter = () => {
  return (
    <main className="p-[28px] bg-[#5E2E53]">
      <Heading title="Aktiviteter" fontSize="text-[36px]" color="text-white"/>
      <div className=" flex flex-col gap-[31px]  pb-[50px] pt-[44px]">
        <Suspense
          fallback={<Loading loadingBesked={"Henter aktiviteter ..."} />}
        >
          <Card />
        </Suspense>
      </div>
      <DrawerMenu />
    </main>
  );
};

export default Aktiviteter;





