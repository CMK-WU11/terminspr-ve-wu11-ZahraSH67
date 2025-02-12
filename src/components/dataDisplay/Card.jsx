import Image from "next/legacy/image";
import Link from "next/link";

const getData = async (searchFilter) => {
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 1000);
  });
  
  const res = await fetch("http://localhost:4000/api/v1/activities");

  if (!res.ok) {
    throw new Error();
  }

  const aktiviteter = await res.json();

  if (!searchFilter) return aktiviteter;

  const filteredAktiviteter = aktiviteter.filter((aktivitet) =>
    aktivitet.name.toLowerCase().includes(searchFilter.toLowerCase())
  );

  return filteredAktiviteter;
};

const Card = async ({ searchFilter }) => {
  const aktiviteter = await getData(searchFilter);

  return (
    <div className=" flex flex-col gap-[31px] pt-[31px] pb-[70px]">
      {aktiviteter && aktiviteter.length > 0 ? (
        aktiviteter.map((aktivitet) => (
          // <>
            <div key={aktivitet.id}>
              <Link href={`/aktiviteter/${aktivitet.id}`}>
                <article>
                  <section className="relative w-auto mx-auto h-[344px] ">
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
            </div>
          // </>
        ))
      ) : (
        <p>
          Der blev ikke fundet nogle aktiviteter. Prøv at søge efter noget
          andet.
        </p>
      )}
    </div>
  );
};

export default Card;
