import { memo } from "react";
import { Button } from "@mui/material";
import Image from "next/image";
import { sport_img, eye, calendar } from "@images";

const Index = () => {
  return (
    <>
      <div className="my-20 max-lg:my-16  max-md:my-10 ">
        <div className="container">
          <h2 className="text-[#1F1D14] text-[32px] font-Fira Sans font-bold mb-8 ">
            Полезное
          </h2>
          <div className="flex gap-6 max-md:grid max-md:grid-cols-1 max-md:justify-items-center">
            <div
              className="bg-white rounded-[8px] max-w-[608px] w-full pt-[38px] 
                px-[35px] max-lg:p-7"
            >
              <h2 className="text-[#1F1D14] text-[32px] font-Fira Sans font-bold mb-[9px] max-lg:text-[28px]">
                Как правильно выбрать эллиптический тренажер?
              </h2>
              <p className="text-[16px] leading-5 opacity-70">
                Эллиптические тренажёры популярны среди людей любого возраста и
                с разным уровнем физической подготовкb Эллиптические тренажёры
                популярны среди людей любого возраста и с разным уровнем
                физической подготовки...
              </p>

              <div className="flex gap-8 items-center mt-[100px]">
                <div className="flex gap-[5px]">
                  <Image src={calendar} alt="calendar" />
                  27.01.2022
                </div>
                <div className="flex gap-[5px]">
                  <Image src={eye} alt="eye" />
                  250
                </div>
              </div>
            </div>
            <div className="max-w-[608px] w-full ">
              <div className="flex justify-center items-center bg-white py-[18px] rounded-[8px]">
                <div className="p-4">
                  <Image
                    src={sport_img}
                    alt="sport-image"
                    className="max-lg:max-w-[500px] max-lg:w-full"
                  />
                </div>
              </div>
              <Button
                sx={{
                  background: "white",
                  width: "100%",
                  marginTop: "15px",
                  paddingY: "15px",
                  color: "#000000",
                  lineHeight: "22px",
                  fontFamily: "Fira Sans",
                }}
              >
                Посмотрет все
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default  memo(Index);
