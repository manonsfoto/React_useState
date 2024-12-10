import { useState } from "react";
import "./DayNightSwitch.css";
const DayNightSwitch = () => {
  const [isNight, setIsNight] = useState<boolean>(false);
  const switchMode = () => {
    setIsNight(!isNight);
  };
  return (
    <section
      className={`section_dayNightSwitch flex ${isNight ? "night" : "day"}`}
    >
      <h1>{isNight ? "Night" : "Day"}</h1>
      <button onClick={switchMode} className="btn_switch">
        Chage to {isNight ? "Day" : "Night"}
      </button>
    </section>
  );
};

export default DayNightSwitch;
