import React, { useEffect, useState } from "react";
import LiveContainer from "../components/LiveContainer";
import axios from "axios";
import UpcomingContainer from "../components/UpcomingContainer";
import EmptyBox from "../components/EmptyBox";

function Football() {
  const [liveEvents, setLiveEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://cors-anywhere.herokuapp.com/https://api.smarkets.com/v3/events/?state=live&type=football_match&type_domain=football&with_new_type=false&sort=id&limit=20&include_hidden=false"
        );
        const liveEventsData = response.data.events;
        setLiveEvents(liveEventsData);
        console.log(liveEventsData);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching live events:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="bg-[#000000]">
      <div className="w-full max-w-[1200px] h-full mx-auto">
        {liveEvents.length !== 0 && (
          <h1 className="text-white/80 font-semibold text-4xl pt-5 text-center">
            In-play
          </h1>
        )}
        <div className="">
          {loading ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 place-items-center mt-5 justify-center items-center">
              <EmptyBox />
              <EmptyBox />
              <EmptyBox />
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 place-items-center mt-5 justify-center items-center">
              {liveEvents.slice(0, 9).map((data) => (
                <LiveContainer eventTitle={data.name} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Football;
