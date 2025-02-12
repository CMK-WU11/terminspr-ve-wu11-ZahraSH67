import Heading from "./Heading";

const StaticHeading = () => {
  return (
    <div className="fixed top-0 inset-x-0 z-10 bg-[#5E2E53] h-[86px] flex items-center p-[28px] ">
      <Heading
        title="Aktiviteter"
        fontSize="text-4xl"
        color="text-headingGray"
      />
    </div>
  );
};

export default StaticHeading;