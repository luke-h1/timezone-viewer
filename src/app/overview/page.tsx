"use client";

import { getLocalTime, getLocalTimezone } from "@frontend/util/time";
import { useEffect, useState } from "react";

export default function OverView() {
  const currentTime = getLocalTime();
  const currentTimezone = getLocalTimezone();
  const [time, setTime] = useState(currentTime);

  useEffect(() => {
    setInterval(() => {
      setTime(getLocalTime());
    }, 1000);
  }, []);

  return (
    <div className="wrapper center pt-l">
      <main className="mono">
        <p>&#8962; Everything all at once</p>
        <h4>
          Your time is: <span className="glow">{`${time}`}</span>{" "}
          <span className="highlight">{`${currentTimezone}`}</span>
        </h4>
      </main>
    </div>
  );
}
