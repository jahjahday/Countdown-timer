import { useState, useEffect } from "react";
import { FaFacebookSquare, FaPinterest, FaInstagram } from "react-icons/fa";
import "./App.css";

function App() {
  // const [line, setLine] = useState("");
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  // const deadline = (evt) => {
  // setLine(evt.target.value);
  // };

  const deadline = "December, 31, 2023";

  const getTime = () => {
    const time = Date.parse(deadline) - Date.now();

    setDays(Math.floor(time / (1000 * 60 * 60 * 24)));
    setHours(Math.floor((time / (1000 * 60 * 60)) % 24));
    setMinutes(Math.floor((time / 1000 / 60) % 60));
    setSeconds(Math.floor((time / 1000) % 60));
  };

  useEffect(() => {
    const interval = setInterval(() => getTime(deadline), 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-[#1e1f29] h-[100vh] flex font-body justify-center relative">
      <div className="absolute top-[25%]">
        <heading className="text-white text-[2rem] text-center">
          WE'RE LAUNCHING SOON
        </heading>
        <div className="flex justify-between mt-[80px]">
          <div className="w-[50%] mr-4 text-center">
            <h1 className="bg-[rgba(152,166,189,0.2)] text-[#fb6087] text-[3rem] h-[80%]">
              {days}
            </h1>
            <h2 className="text-[#8486a9] mt-4">Days</h2>
          </div>
          <div className="w-[40%] mr-4 text-center">
            <h1 className="bg-[rgba(152,166,189,0.2)] text-[#fb6087] text-[3rem] h-[80%]">
              {hours}
            </h1>
            <h2 className="text-[#8486a9] mt-4">Hours</h2>
          </div>
          <div className="w-[40%] mr-4 text-center">
            <h1 className="bg-[rgba(152,166,189,0.2)] text-[#fb6087] text-[3rem] h-[80%]">
              {minutes}
            </h1>
            <h2 className="text-[#8486a9] mt-4">Minutes</h2>
          </div>
          <div className="w-[40%] text-center">
            <h1 className="bg-[rgba(152,166,189,0.2)] text-[#fb6087] text-[3rem] h-[80%]">
              {seconds}
            </h1>
            <h2 className="text-[#8486a9] text-[400] mt-4">Seconds</h2>
          </div>
        </div>
        <div className="flex mt-[10em] ml-[8.5em] justify-between w-[40%]">
          <FaFacebookSquare size={30} className="hov" />
          <FaPinterest size={30} className="hov" />
          <FaInstagram size={30} className="hov" />
        </div>
      </div>
    </div>
  );
}

export default App;
