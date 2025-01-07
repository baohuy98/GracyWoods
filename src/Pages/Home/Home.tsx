
import React from "react";
import Circular from "../../components/CircularTimeline";






const Home: React.FC = () => {
  return (
    <div className=" h-[700px]  ">
      <div className="header_timeLine h-[100px] border-b-[5px] border-[#e9e9e3] px-[40px] py-[20px] ">
        <h1 className="text-white font-semibold text-[25px]">TIMELINE</h1>
      </div>

      <div className="circular relative flex justify-between h-full  items-center bg-circular bg-no-repeat bg-cover bg-center  ">
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 backdrop-blur-sm z-0"></div>
        <div className="circular_left w-fit   ">
          <Circular />
        </div>
        <div className="circular_right w-[50%] text-white z-10 ">
          <h1>Golgarian War</h1>
          <p>
            Vega Cho Hun Gan I expands his direct rule over Golgarian requests more power over Karawoodand Ambros
          </p>

          <p>
            Tera Alexandria and LusasLE Vunresist Vega's expansion and declare war on the Sages
          </p>

          <p>
            Kruk and the Cretans remain neutral and act as an intermediary within the conflict.
            Garousbegin to appear on the islands of Kyreenin large numbers.
          </p>
        </div>
      </div>

      <div className="carousel_container relative">
        <h2>LOCATIONS</h2>

        <div className="carousel ">

        </div>

      </div>
    </div>
  );
};

export default Home;  
