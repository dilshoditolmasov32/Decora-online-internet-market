"use client";

import { memo } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Button } from "@mui/material";
import Image from "next/image";
import { nextIcon, puma, icon2, nike, adidas, reebok } from "@images";

const Index = () => {
  const cards = [
    {
      id: 1,
      icon: puma,
    },
    {
      id: 2,
      icon: icon2,
    },
    {
      id: 3,
      icon: nike,
    },
    {
      id: 4,
      icon: adidas,
    },
    {
      id: 5,
      icon: reebok,
    },
    {
      id: 6,
      icon: puma,
    },
    {
      id: 7,
      icon: icon2,
    },
  ];

  return (
    <>
      <div>
        <div className="container">
          <h2 className="text-[#1F1D14] text-[32px] font-Fira Sans font-bold mb-[30px]">
            О нас
          </h2>
          <div className="pt-[70px] pl-20 pr-[100px] pb-10 bg-[#1F1D14] rounded-[8px] max-lg:pt-[40px] max-lg:pl-[40px] max-lg:pr-[60px] max-lg:pb-[40px] max-sm:pl-7 max-sm:pr-7 max-xs:pl-4 max-xs:pr-4 max-xs:text-center">
            <p className="max-w-[718px] text-white text-[20px] font-Fira Sans opacity-80">
              Интернет магазин спортивных товаров{" "}
              <span className="font-bold leading-7 text-[20px] underline">
                7MARKETSPORT.UZ
              </span>{" "}
              предлагает широкий ассортимент продукции с доставкой по Ташкенту,
              области и другим регионам Узбекистана. Ведется работа как с
              розничными покупателями, так и с оптовыми клиентами. Разнообразие
              форм оплаты заметно упрощает процесс приобретения товара.
              Действует гибкая система скидок. Разнообразие форм оплаты заметно
              упрощает процесс приобретения товара. Действует гибкая система
              скидок.{" "}
            </p>
            <div className="flex justify-end">
              <Button>
                <Image src={nextIcon} alt="next-icon" />
              </Button>
            </div>
          </div>

          <div className="flex  flex-wrap gap-[30px] justify-between items-center my-20 bg-white rounded-[8px] py-10 px-12 max-md:my-16 max-sm:my-14 max-xs:my-10">
            <Swiper
              centeredSlides={true}
              autoplay={{
                delay: 1000,
                disableOnInteraction: true,
              }}
              breakpoints={{
                0: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                  },
                480: {
                    slidesPerView: 3,
                    spaceBetween: 30,
                  },
                640: {
                    slidesPerView: 4,
                    spaceBetween: 40,
                  },
                768: {
                    slidesPerView: 5,
                    spaceBetween: 40,
                  },
                1024: {
                    slidesPerView: 6,
                    spaceBetween: 30,
                  },
              }}
              modules={[Autoplay, Pagination, Navigation]}
              loop={true}
            >
              {cards?.map((item) => (
                <SwiperSlide key={item.id}>
                  <div className="flex justify-center items-center ">
                    <Image src={item.icon} alt="icon" className="h-[80px]" />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
};

export default memo(Index)
;
