"use client";

import { useEffect, useState } from "react";
import IngenAktiviteter from "../ui/IngenAktiviteter";
import VisAktiviteter from "../ui/VisAktiviteter";
import Loading from "../ui/Loading"; 

const UserHold = ({ user }) => {
  const [activities, setActivities] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchActivities = async () => {
      await new Promise((resolve) => setTimeout(resolve, 1000));

      setActivities(user?.activities || []);
      setLoading(false);
    };

    fetchActivities();
  }, [user]);

  if (loading) {
    return <Loading loadingBesked="Henter dine aktiviteter ..." />;
  }

  return (
    <div>
      {activities.length === 0 ? (
        <IngenAktiviteter />
      ) : (
        <VisAktiviteter data={activities} lnk={"/aktiviteter"} />
      )}
    </div>
  );
};

export default UserHold;
