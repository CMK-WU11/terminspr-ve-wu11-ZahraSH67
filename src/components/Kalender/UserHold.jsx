import IngenAktiviteter from "./IngenAktiviteter";
import VisAktiviteter from "./VisAktiviteter";

const UserHold = async ({ user }) => {
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 1000);
  });

  return (
    <div>
      {user?.activities?.length <= 0 ? (
        <IngenAktiviteter />
      ) : (
        <VisAktiviteter data={user.activities} lnk={"/aktiviteter"} />
      )}
    </div>
  );
};

export default UserHold;
