"use client";
import { memo } from "react";
import Image from "next/image";
import { share, print } from "@images";
import { ActionProduct } from "@/components";

const Index = () => {
  return (
    <>
      <div>
        <div className="container">
          <h2 className="text-[#1F1D14] text-[32px] font-Fira Sans font-bold mb-[30px]">
            Главная
          </h2>
          <div className="flex gap-6 mt-[35px] mb-[50px]  max-sm:flex max-sm:flex-wrap max-xs:my-6 ">
            <div>
              <div className="py-[9px] px-4 bg-white h-[256px] rounded-[6px] max-sm:w-[335px]   max-xs:h-[200px]">
                <p className="flex items-center py-[9px] gap-1 ">
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="17"
                      height="26"
                      viewBox="0 0 17 26"
                      fill="none"
                    >
                      <rect
                        width="2.28245"
                        height="26.4608"
                        transform="matrix(0.975738 0.218942 -0.266986 0.9637 14.7734 0)"
                        fill="#FBD029"
                      />
                      <rect
                        width="2.28245"
                        height="26.4608"
                        transform="matrix(0.975738 0.218942 -0.266986 0.9637 7.06445 0)"
                        fill="#FBD029"
                      />
                    </svg>
                  </span>
                  О нас
                </p>
                <p className="my-[6px] px-[34px]">Вканация</p>
              </div>
            </div>
            <div className="pt-[40px] pb-[70px] pl-[50px] pr-[65px] bg-white rounded-[6px] max-md:p-[36px] max-xs:p-5 ">
              <h3 className="text-[#000] text-[24px] font-bold mb-[17px]  ">
                7 SPORT MARKET
              </h3>
              <p className="leading-[22.4px] text-[16px] mb-[30px] ">
                В составе томатов в большом количестве содержатся сахара,
                клетчатка, пектины, бета-каротин, витамины В1, В2, В5, В6, В9,
                С, К, Н и РР, а также нужные организму человека.
              </p>
              <p className="leading-[22.4px] text-[16px] mb-[30px] ">
                Овощи содержат в себе много полезных витаминов, которые
                укрепляют здоровье и иммунитет и являются необходимым
                компонентом в рационе человека. Тепличный помидор - всегда
                доступен для вас и в сети супермаркетов “Makro” вы всегда можете
                найти его по выгодной цене и заказать их с доставкой в Ташкенте.
              </p>
              <p className="leading-[22.4px] text-[16px] mb-[30px] ">
                В составе томатов в большом количестве содержатся сахара,
                клетчатка, пектины, бета-каротин, витамины В1, В2, В5, В6, В9,
                С, К, Н и РР, а также нужные организму человека.
              </p>
              <p className="leading-[22.4px] text-[16px] mb-[30px] ">
                Овощи содержат в себе много полезных витаминов, которые
                укрепляют здоровье и иммунитет и являются необходимым
                компонентом в рационе человека. Тепличный помидор - всегда
                доступен для вас и в сети супермаркетов “Makro” вы всегда можете
                найти его по выгодной цене и заказать их с доставкой в Ташкенте.
              </p>
              <div className="flex justify-end mt-[30px] gap-8 ">
                <p className="flex gap-[5px] items-center">
                  Поделиться: <Image src={share} alt="share" />
                </p>
                <p className="flex gap-[5px] items-center">
                  Распечатать:: <Image src={print} alt="print" />
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ActionProduct />
    </>
  );
};

export default memo(Index);;
