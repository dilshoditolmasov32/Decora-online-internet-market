import { memo } from "react";
import { Breadcrumb } from "antd";
import { HomeOutlined } from "@ant-design/icons";
import Image from "next/image";
import { eye, calendar } from "@images";
import { ActionProduct } from "@/components";

const Index = () => {
  const data = [
    {
      title: "Как правильно выбрать эллиптический тренажер?",
      text: "Эллиптические тренажёры популярны среди людей любого возраста и с разным уровнем физической подготовкb Эллиптические тренажёры популярны среди людей любого возраста и с разным уровнем физической подготовки...",
    },
    {
      title: "Как правильно выбрать эллиптический тренажер?",
      text: "Эллиптические тренажёры популярны среди людей любого возраста и с разным уровнем физической подготовкb Эллиптические тренажёры популярны среди людей любого возраста и с разным уровнем физической подготовки...",
    },
    {
      title: "Как правильно выбрать эллиптический тренажер?",
      text: "Эллиптические тренажёры популярны среди людей любого возраста и с разным уровнем физической подготовкb Эллиптические тренажёры популярны среди людей любого возраста и с разным уровнем физической подготовки...",
    },
    {
      title: "Как правильно выбрать эллиптический тренажер?",
      text: "Эллиптические тренажёры популярны среди людей любого возраста и с разным уровнем физической подготовкb Эллиптические тренажёры популярны среди людей любого возраста и с разным уровнем физической подготовки...",
    },
    {
      title: "Как правильно выбрать эллиптический тренажер?",
      text: "Эллиптические тренажёры популярны среди людей любого возраста и с разным уровнем физической подготовкb Эллиптические тренажёры популярны среди людей любого возраста и с разным уровнем физической подготовки...",
    },
    {
      title: "Как правильно выбрать эллиптический тренажер?",
      text: "Эллиптические тренажёры популярны среди людей любого возраста и с разным уровнем физической подготовкb Эллиптические тренажёры популярны среди людей любого возраста и с разным уровнем физической подготовки...",
    },
    {
      title: "Как правильно выбрать эллиптический тренажер?",
      text: "Эллиптические тренажёры популярны среди людей любого возраста и с разным уровнем физической подготовкb Эллиптические тренажёры популярны среди людей любого возраста и с разным уровнем физической подготовки...",
    },
    {
      title: "Как правильно выбрать эллиптический тренажер?",
      text: "Эллиптические тренажёры популярны среди людей любого возраста и с разным уровнем физической подготовкb Эллиптические тренажёры популярны среди людей любого возраста и с разным уровнем физической подготовки...",
    },
  ];

  return (
    <>
      <div className="container ">
        <Breadcrumb
          items={[
            {
              href: "/",
              title: (
                <div className="flex items-center gap-[10px]  hover:bg-none">
                  <HomeOutlined />
                  <span className="text-[#000] font-Fira Sans text-[16px] opacity-60">
                    Главная
                  </span>
                </div>
              ),
            },
            {
              title: (
                <>
                  <p className="text-[#1F1D14] text-[17px]">
                    Полезные информации
                  </p>
                </>
              ),
            },
          ]}
          className="my-6 flex items-center"
        />
        <h2 className="text-[#1F1D14] text-[32px] font-Fira Sans font-bold  mt-5">
          Полезные информации
        </h2>
        <div className="flex gap-6 flex-wrap my-[30px] sm:grid sm:grid-cols-2  ">
          {data?.map((item, index) => (
            <div
              key={index}
              className="pt-[38px] pl-[35px] pb-[45px] pr-[35px] max-w-[608px]
                       bg-white rounded-[8px] max-xs:p-5 sm:p-8"
            >
              <h3 className="text-[#1F1D14] text-[32px] font-Fira Sans font-bold mb-[9px] max-xs:text-[20px] sm:text-[28px] ">
                {item.title}
              </h3>
              <p className="text-[16px] leading-5 opacity-70 max-w-[454px]">
                {item.text}
              </p>

              <div className="flex gap-8 items-center mt-[100px] max-xs:mt-[50px] sm:mt-[80px]">
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
          ))}
        </div>
        <button
          className="px-8 border-[2px] hover:bg-[#fbd029] transform transition-transform duration-500 ease-in-out border-[#FBD029] rounded-[5px] py-[15px] max-sm:w-[99%] max-xs:mx-5 max-xs:w-[90%]
            "
        >
          Показать ещё
        </button>
      </div>

      <ActionProduct />
    </>
  );
};

export default  memo(Index);
