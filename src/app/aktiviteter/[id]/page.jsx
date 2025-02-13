import DrawerMenu from "@/components/navigation/DrawerMenu";
import CardDetail from "@/components/dataDisplay/CardDetail";

export async function generateMetadata({ params }) {
  const aktivitetId = params.id;
  const aktivitet = await fetch(
    `http://localhost:4000/api/v1/activities/${aktivitetId}`
  ).then((res) => res.json());

  return {
    title: aktivitet.name,
  };
}

const AktivitetDetalje = async ({ params }) => {
  const aktivitetId = params.id;

  return (
    <>
      <CardDetail id={aktivitetId} />
      <DrawerMenu />
    </>
  );
};

export default AktivitetDetalje;

  
 
  

