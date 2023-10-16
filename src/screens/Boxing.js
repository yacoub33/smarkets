import axios from "axios";
import React, { useEffect, useState } from "react";
import UpcomingContainer from "../components/UpcomingContainer";
import EmptyBox from "../components/EmptyBox";

function Boxing() {
  const [boxingEvents, setBoxingEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://cors-anywhere.herokuapp.com/https://api.smarkets.com/v3/events/?state=upcoming&type=boxing_match&with_new_type=false&sort=id&limit=20&include_hidden=false"
        );
        const boxingEventsData = response.data.events;
        setBoxingEvents(boxingEventsData);
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
        <h1 className="text-white/80 font-semibold text-4xl pt-5 text-center">
          Upcoming
        </h1>
        <div className="">
          {loading ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 place-items-center mt-5 justify-center items-center">
              <EmptyBox />
              <EmptyBox />
              <EmptyBox />
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 place-items-center mt-5 justify-center items-center">
              {boxingEvents.splice(0, 9).map((data) => (
                <UpcomingContainer eventTitle={data.name} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Boxing;
