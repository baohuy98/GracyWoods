import React, { useState } from "react";
import { CgArrowLeft, CgArrowRight } from "react-icons/cg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperType } from 'swiper';
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import slide1 from '../utils/asset/slide1.jpg'
import slide2 from '../utils/asset/slide2.jpg'
import slide3 from '../utils/asset/slide3.jpg'
import slide4 from '../utils/asset/slide4.jpg'
import Modal from "./Modal";

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
]
export default function Carousel(props: CarouselProps) {
    const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null)
    const [contentSwiper, setContentSwiper] = useState<SwiperType | null>(null)
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [currentSlide, setCurrentSlide] = useState(slides[0])

    const handlePrevClick = () => {
        if (thumbsSwiper) thumbsSwiper.slidePrev()
        if (contentSwiper) contentSwiper.slidePrev()
    }

    const handleNextClick = () => {
        if (thumbsSwiper) thumbsSwiper.slideNext()
        if (contentSwiper) contentSwiper.slideNext()
    }

    const handleToggleModal = () => {
        setIsModalOpen(!isModalOpen)
    }

    return (
        <div className=" h-full relative px-10">
            <div className="carousel_title h-[100px]  px-[40px] py-[20px] ">
                <h1 className="text-white font-semibold text-[25px]">LOCATIONS</h1>
            </div>
            <div className="thumbnail_contain relative w-[850px] h-[400px] rounded-2xl shadow-xl">
                <Swiper
                    onSwiper={setThumbsSwiper}
                    slidesPerView={1}
                    spaceBetween={0}
                    loop={true}
                    pagination={false}
                    navigation={false}
                    onSlideChange={(swiper: any) => {
                        if (contentSwiper && contentSwiper.realIndex !== thumbsSwiper?.realIndex) {
                            const realIndex = swiper.realIndex // Lấy chỉ số slide hiện tại
                            setCurrentSlide(slides[realIndex])
                            contentSwiper.slideTo(thumbsSwiper?.realIndex || 0)
                        }
                    }}
                >
                    {slides.map((slide, index) => (
                        <SwiperSlide key={index} className="flex flex-col items-center rounded-lg">
                            <img
                                src={slide.thumbnail}
                                alt={slide.title}
                                className="rounded-lg shadow-md h-[450px] w-[850px]"
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>

                <div className="text_contain absolute bottom-[-95%] right-[-800px] bg-[#4d74b6] w-[1000px] h-[400px] rounded-2xl shadow-xl z-[-1]">
                    <Swiper
                        onSwiper={setContentSwiper}
                        slidesPerView={1}
                        spaceBetween={30}
                        loop={true}
                        pagination={false}
                        navigation={false}
                        onSlideChange={() => {
                            if (thumbsSwiper && thumbsSwiper.realIndex !== contentSwiper?.realIndex) {
                                thumbsSwiper.slideTo(contentSwiper?.realIndex || 0)
                            }
                        }}
                    >
                        {slides.map((slide, index) => (
                            <SwiperSlide key={index} className="text-white flex flex-col justify-center h-[400px] p-[50px] mt-[40px]">
                                <h3 className="text-xl font-semibold mt-5">{slide.title}</h3>
                                <p className="text-base leading-[30px]  mt-2 text-justify">{slide.content}</p>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>

                <div className="bg-[#363636] w-[300px] rounded-s-3xl h-[100px] right-[-800px] bottom-[-30px] absolute grid place-content-center">
                    <button
                        onClick={handleToggleModal}
                        className="border-2 border-solid cursor-pointer hover:bg-red-300 duration-500 ease-linear border-[#8b3451] bg-transparent z-10 text-[#99234a] leading-[10px] font-semibold w-[150px] h-[40px] rounded-full">
                        View Map
                    </button>
                </div>

                <div className="absolute top-[30px] right-[-15px] flex flex-col justify-between gap-4 z-10">
                    <button
                        onClick={handlePrevClick}
                        className="bg-[#e23965] scale-125 rounded-full text-white hover:bg-red-400 duration-300 ease-linear w-[30px] h-[30px] flex items-center justify-center shadow-lg"
                    >
                        <CgArrowLeft />
                    </button>
                    <button
                        onClick={handleNextClick}
                        className="bg-[#e23965] scale-125 rounded-full text-white hover:bg-red-400 duration-300 ease-linear w-[30px] h-[30px] flex items-center justify-center shadow-lg"
                    >
                        <CgArrowRight />
                    </button>
                </div>
            </div>


            {isModalOpen && (
                <div className="modal absolute grid place-content-center w-full h-screen top-0 left-0   ">

                    <Modal
                        thumbnail={currentSlide.thumbnail}
                        onClose={handleToggleModal}
                    />
                </div>
            )}



        </div>
    )
}