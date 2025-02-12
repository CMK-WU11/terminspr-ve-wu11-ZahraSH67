import Heading from "../Heading";
import { limitText } from "@/utils/textUtils";

const KalenderCard = ({ aktivitet }) => {
  const limitedText = limitText(aktivitet.name, 14);
  return (
    <section>
      <div className="w-full h-[107px] bg-headingGray rounded-lg flex  flex-col mx-auto my-0 pl-[34px] pt-[19px] mb-[30px] pb-[26px]">
        <div>
          <Heading
            title={limitedText}
            fontSize="text-[36px] "
            color="text-black-500"
            lineHeight="leading-none"
          />
        </div>

        <Heading
          title={aktivitet.weekday + " " + aktivitet.time}
          fontSize="text-[18px] "
          color="text-black-500"
        />
      </div>
    </section>
  );
};

export default KalenderCard;
