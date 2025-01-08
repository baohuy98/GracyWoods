import React from "react";
import { CgArrowLeft, CgArrowRight } from "react-icons/cg";
import slide1 from "../utils/asset/slide1.jpg";
import slide2 from "../utils/asset/slide2.jpg";
import slide3 from "../utils/asset/slide3.jpg";
import slide4 from "../utils/asset/slide4.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export interface CarouselProps { }

const slides = [
    {
        thumbnail: slide1,
        title: "Tower of Dawn 1",
        content:
            "Nestled amidst the windswept northern reaches of the Western Defense Dam (WDD). guarding Alexandria against the tumultuous storms of Little Brother, stands the magnificent Towers of Dawn. As the capital of Alexandria, this towering city is the pride of the noble and proud Kigamons who call it home. Once ruled by the mighty Queen Tera Alexandria, the land was granted independence when she stepped down to focus on motherhood. ",
    },
    {
        thumbnail: slide2,
        title: "Tower of Dawn 2",
        content:
            "Nestled amidst the windswept northern reaches of the Western Defense Dam (WDD). guarding Alexandria against the tumultuous storms of Little Brother, stands the magnificent Towers of Dawn. As the capital of Alexandria, this towering city is the pride of the noble and proud Kigamons who call it home. Once ruled by the mighty Queen Tera Alexandria, the land was granted independence when she stepped down to focus on motherhood.",
    },
    {
        thumbnail: slide3,
        title: "Tower of Dawn 3",
        content:
            "Nestled amidst the windswept northern reaches of the Western Defense Dam (WDD). guarding Alexandria against the tumultuous storms of Little Brother, stands the magnificent Towers of Dawn. As the capital of Alexandria, this towering city is the pride of the noble and proud Kigamons who call it home. Once ruled by the mighty Queen Tera Alexandria, the land was granted independence when she stepped down to focus on motherhood.",
    },
    {
        thumbnail: slide4,
        title: "Tower of Dawn 4",
        content:
            "Nestled amidst the windswept northern reaches of the Western Defense Dam (WDD). guarding Alexandria against the tumultuous storms of Little Brother, stands the magnificent Towers of Dawn. As the capital of Alexandria, this towering city is the pride of the noble and proud Kigamons who call it home. Once ruled by the mighty Queen Tera Alexandria, the land was granted independence when she stepped down to focus on motherhood.",
    },
];

export default function Carousel(props: CarouselProps) {
    return (
        <div className="mx-auto px-[40px] h-full  relative ">
            {/* Swiper Component */}

            <div className="thumbnail_contain relative  w-[650px] h-[400px] rounded-2xl shadow-xl   ">

                <Swiper
                    slidesPerView={1}
                    spaceBetween={0}
                    loop={true}
                    pagination={false}
                    navigation={false}
                >
                    {slides.map((slide, index) => (
                        <SwiperSlide key={index} className="flex flex-col items-center rounded-lg  ">
                            <img

                                src={slide.thumbnail}
                                alt={slide.title}
                                className="rounded-lg shadow-md h-[400px] w-[650px] "
                            />

                        </SwiperSlide>
                    ))}
                </Swiper>

                <div className="text_contain absolute bottom-[-85%] right-[-90%]  bg-[#4d74b6] w-[800px] h-[400px] rounded-2xl shadow-xl z-[-1]">
                    <Swiper
                        slidesPerView={1}
                        spaceBetween={30}
                        loop={true}
                        pagination={false}
                        navigation={false}
                    >
                        {slides.map((slide, index) => (
                            <SwiperSlide key={index} className=" text-white flex flex-col justify-center h-[400px] p-[50px] mt-[40px] ">
                                <h3 className="text-xl font-semibold">{slide.title}</h3>
                                <p className="text-sm  mt-2 text-justify">{slide.content}</p>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>

                <div className=" bg-[#363636] w-[300px] rounded-s-3xl h-[100px] right-[-585px] bottom-[10px] absolute grid place-content-center    ">
                    <button className="border-2 border-solid cursor-pointer hover:bg-red-300 duration-500 ease-linear   border-[#8b3451] bg-transparent z-10 text-[#99234a] leading-[10px] font-semibold w-[150px] h-[40px] rounded-full ">
                        View Map
                    </button>
                </div>
                <div className=" absolute  top-[30px] right-[-15px] flex flex-col justify-between gap-4  z-10">
                    <button className=" bg-[#e23965] scale-125 rounded-full text-white hover:bg-red-400 duration-300 ease-linear w-[30px] h-[30px] flex items-center justify-center shadow-lg">
                        <CgArrowLeft />
                    </button>
                    <button className=" bg-[#e23965] scale-125 rounded-full text-white hover:bg-red-400 duration-300 ease-linear w-[30px] h-[30px] flex items-center justify-center shadow-lg">
                        <CgArrowRight />
                    </button>
                </div>
            </div>
        </div>
    );
}


