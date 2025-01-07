
import React from "react";
import Circular from "../../components/CircularTimeline";





const Home: React.FC = () => {
  return (
    <div className=" h-[700px]  ">
      <div className="header_timeLine h-[100px] border-b-[5px] border-[#e9e9e3] px-[40px] py-[20px] ">
        <h1 className="text-white font-semibold text-[25px]">TIMELINE</h1>
      </div>

      <div className="circular relative flex justify-center  items-center   h-full bg-circular bg-no-repeat bg-cover bg-center  ">
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 backdrop-blur-sm z-0"></div>
        <div className="circular_left w-fit translate-x-[-460px]    ">
          <Circular />
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

      <div className="carousel_container relative">
        <h2>LOCATIONS</h2>

        <div className="carousel w-full h-[800px] ">

        </div>

      </div>
    </div>
  );
};

export default Home;  
