"use client";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Link from "next/link";
import Image from "next/image";
import { card1, card2, card3, card4, card5, card6 } from "@images";

export default function Index() {
  const katalog = [
    { id: 1, title: "Тренажеры", image: card1, bgColor: "#D3E5F2" },
    { id: 2, title: "Мячи", image: card2, bgColor: "#E2C6BE" },
    { id: 3, title: "Спротивные обуви", image: card3, bgColor: "#DADBE0" },
    { id: 4, title: "Спортивные одежды", image: card4, bgColor: "#E2EEC0" },
    { id: 5, title: "Водный спорт", image: card5, bgColor: "#C2BCE8" },
    { id: 6, title: "Горный спорт", image: card6, bgColor: "#ABA520" },
    { id: 4, title: "Спортивные одежды", image: card4, bgColor: "#E2EEC0" },
    { id: 1, title: "Тренажеры", image: card1, bgColor: "#D3E5F2" },
  ];

  return (
    <div className="bg-[#FFF] py-5">
      <div className="container mx-auto">
        <h1 className="text-[#1F1D14] font-Fira Sans font-bold text-[32px] mb-[30px] ">
          Катаолог
        </h1>
       
          <Swiper
            slidesPerView={1}
            spaceBetween={10}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 4,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 5,
                spaceBetween: 30,
              },
            }}
            modules={[Pagination]}
            loop={true}
          >
            {katalog?.map((element, index) => (
              <SwiperSlide
                key={index}
                className=" mb-12  pt-6 pb-9 px-5 rounded-[8px] w-[187px] max-xs:w-[160px] max-sm:text-center "
                style={{ backgroundColor: element.bgColor }}
              >
                <Link href={"#"}>
                  <h4 className="font-Fira Sans text-[20px] h-12 mb-9 text-[#000]">
                    {element.title}
                  </h4>
                
                 <div className="max-sm:flex max-sm:justify-center">
                 <Image
                   src={element.image} 
                   alt="card-image"
                   width={126}
                   height={102}
                   />
                 </div>
                 </Link>  
              </SwiperSlide>
            ))}
          </Swiper>
       
      </div>
    </div>
  );
}
