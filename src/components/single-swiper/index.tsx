"use client";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "../swiper/swiper.css";
import "./index.css";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import Image from "next/image";


interface SingleSwipperProps {
  colors?: string[];
}




const Index: React.FC<SingleSwipperProps> = ({ colors }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
 
  const images1 = [
    { url: "https://swiperjs.com/demos/images/nature-1.jpg" },
    { url: "https://swiperjs.com/demos/images/nature-2.jpg" },
    { url: "https://swiperjs.com/demos/images/nature-3.jpg" },
    { url: "https://swiperjs.com/demos/images/nature-5.jpg" },
  ];

  return (
    <>
      <Swiper
        
        spaceBetween={10}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="single_swipper mb-2 max-w-[700px] w-full  max-md:max-w-full "
      >
        {images1?.map((image, index) => (
          <SwiperSlide
            key={index}
            className="my_swiper flex justify-center items-center bg-white rounded-[10px] px-24 py-14 max-sm:px-4 max-sm:py-5 max-w-[700px] w-full  max-md:max-w-full"
          >
            <div className="relative w-full h-[300px] max-sm:h-[200px]">
              <Image
                src={image.url}
                alt={`Nature ${index + 1}`}
                layout="fill"
                objectFit="contain"
                className="rounded-[10px]"
              />
            </div>
          </SwiperSlide>
        ))}
        <div className="swiper-button-next"></div>
        <div className="swiper-button-prev"></div>
      </Swiper>

      <div className="small_swipper">
        <Swiper
          spaceBetween={10}
          slidesPerView={4}
          freeMode={true}
          watchSlidesProgress={true}
          modules={[FreeMode, Navigation, Thumbs]}
          className="single_swipper_bottom max-w-[710px] w-full max-md:max-w-full"
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 10,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 10,
            },
          
          }}
        >
          {images1?.map((image, index) => (
            <SwiperSlide
              key={index}
              className="swiper_slide rounded-[5px] border-[2px] border-solid border-[#FBD029] bg-white py-[11px] px-3"
            >
              <div className="relative bg-black w-full max-w-[140px] h-[100px] flex justify-center mx-5">
                <Image
                  src={image.url}
                  alt={`Thumb ${index + 1}`}
                  layout="fill"
                  objectFit="contain"
                  className="rounded-[5px]"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}

export default Index;