
import React, { useState } from "react";
import Circular from "../../components/CircularTimeline";
import Carousel from "../../components/Carousel";



const items = [
  { id: 1, label: "3311 R.G.E" },
  { id: 2, label: "3312 R.G.E" },
  { id: 3, label: "3313 R.G.E" },
  { id: 4, label: "3314 R.G.E" },
  { id: 5, label: "3315 R.G.E" },
  { id: 6, label: "3316 R.G.E" },
];
const Home: React.FC = () => {

  const [backdrop, setBackDrop] = useState<number>(1)

  const handleChangeBackDropCirTimeLine = (index: number) => {
    setBackDrop(index)
  }

  return (
    <div className="   ">
      <div className="header_timeLine h-[100px] border-b-[5px] border-[#e9e9e3] px-[40px] py-[20px] bg-[#242424] ">
        <h1 className="text-white font-semibold text-[25px]">TIMELINE</h1>
      </div>

      <div className={`circular relative flex justify-center  items-center   h-screen  bg-slide${backdrop} bg-no-repeat bg-cover bg-center `}>
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 backdrop-blur-sm z-0"></div>
        <div className="circular_left w-fit translate-x-[-460px]    ">
          <Circular
            handleChangeBackDrop={handleChangeBackDropCirTimeLine}
          />
        </div>
        <div className="circular_right w-[50%] h-[400px] flex flex-col justify-between  text-white z-10 ">
          <h1 className="font-semibold text-[25px] ">Golgarian War</h1>
          <p className="text-[17px]  leading-[25px]">
            Vega Cho Hun Gan I expands his direct rule <br></br> over Golgarian requests more power over<br></br> Karawoodand Ambros
          </p>

          <p className="text-[17px] leading-[25px] ">
            Tera Alexandria and LusasLE Vunresist Vega's<br></br>expansion and declare war on the Sages
          </p>

          <p className="text-[17px] leading-[25px] ">
            Kruk and the Cretans remain neutral and act<br></br> as an intermediary within the conflict.<br></br>
            Garousbegin to appear on the islands of<br></br> Kyreenin large numbers.
          </p>
        </div>
      </div>

      <div className="carousel_container relative h-screen bg-[#242424] z-0">
        <div className="carousel ">
          <Carousel />
        </div>

      </div>
    </div>
  );
};

export default Home;  
