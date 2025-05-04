"use client";
import { memo, useEffect, useState } from "react";
import Image from "next/image";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { TextField } from "@mui/material";
import { styled } from "@mui/system";
import { useMask } from "@react-input/mask";
import Stack from "@mui/material/Stack";
import { delete_icon, click, payme } from "@images";
import { KartaModal } from "@/components";
import { korzinkaValidationSchema } from "@/utils/validation";
import { korzinkaPropsType, Product } from "@types";
import { getBasketProduct } from "@service";

const Index = () => {
  const [basket, setBasket] = useState<Product[]>([]);
  const [open, setOpen] = useState(false);
  const [counts, setCounts] = useState<{ [key: string]: number }>({});
  const [totalCost, setTotalCost] = useState(0);

  useEffect(() => {
    const fetData = async () => {
      const response = await getBasketProduct();
      if (response) {
        setBasket(response);
        const initialCounts = response.reduce((acc: any, item: any) => {
          acc[item.product_id] = 1;
          return acc;
        }, {});
        setCounts(initialCounts);
      }
    };

    fetData();
  }, []);

  useEffect(() => {
    const calculateTotalCost = () => {
      const total = basket.reduce((acc, item) => {
        return acc + item.cost * (counts[item.product_id] || 0);
      }, 0);
      setTotalCost(total);
    };

    calculateTotalCost();
  }, [counts, basket]);

  const CustomTextField = styled(TextField)({
    "& label.Mui-focused": {
      color: "#F8B400",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "#F8B400",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "#FBD029",
      },
      "&:hover fieldset": {
        borderColor: "#FBD029",
      },
      "&.Mui-focused fieldset": {
        borderColor: "#F8B400",
      },
    },
  });

  const handleSubmit = (values: unknown) => {
    console.log(values);
  };

  const handleCounter = (product_id: string | number, increment: boolean) => {
    setCounts((prev) => ({
      ...prev,
      [product_id]: Math.max((prev[product_id] || 1) + (increment ? 1 : -1), 1),
    }));
  };

  const initialValues: korzinkaPropsType = {
    full_name: "",
    phone_number: "",
    address: "",
  };

  const inputRef = useMask({
    mask: "+998 (___) ___-__-__",
    replacement: { _: /\d/ },
  });

  const handleKartaSubmit = () => {
    setOpen(true);
  };

  return (
    <>
      <div>
        <div className="container">
          <div className="flex gap-6 mb-[150px] mt-[15px] max-lg:grid max-lg:grid-cols-1 max-lg:justify-items-center max-lg:mb-[120px] max-md:mb-[80px] max-sm:mb-[60px] max-xs:mb-[40px]">
            <div className="max-w-[713px] w-full bg-white rounded-[8px] px-[30px] pt-[20px] pb-[66px] max-lg:max-w-[980px] max-lg:w-full  max-xs:p-3 ">
              <div className="flex justify-between max-xs:my-5">
                <h3 className="text-black font-bold font-Fira Sans text-[24px] leading-[28.8px]">
                  Ваша корзина
                </h3>
                <button className=" text-[#FF1313] text-[13px] leading-3">
                  Очистить все
                </button>
              </div>
              <div>
                {basket?.map((item) => (
                  <div
                    key={item.product_id}
                    className="flex justify-between p-[10px] mt-[10px] w-full bg-[#F2F2F2] rounded-[8px] mb-[10px]"
                  >
                    <div className="flex max-lg:flex max-lg:gap-10 max-sm:flex max-sm:gap-5 lg:gap-6 max-xs:grid max-xs:grid-cols-1 max-xs:p-5 ">
                      <div>
                        <Image
                          width={145}
                          height={180}
                          src={item?.image_url[0]}
                          alt="product_image"
                          className="w-[145px] h-[120px] max-lg:w-[180px] max-lg:h-auto max-sm:w-auto max-sm:h-auto max-xs:w-[140px]"
                        />
                      </div>
                      <div>
                        <p className="text-[#1F1D14] text-[20px] font-Fira Sans max-w-[292px] ">
                          {item.product_name}
                        </p>
                        <div className="flex gap-[40px] mt-[25px] ">
                          <div className="flex items-center gap-[9px]  ">
                            <button
                              onClick={() =>
                                handleCounter(item.product_id, false)
                              }
                              className="w-[32px] h-[32px] bg-white rounded-[50%] text-[32px] flex justify-center items-center"
                            >
                              -
                            </button>
                            <span className="text-[20px] text-black font-Fira Sans">
                              {counts[item.product_id]}
                            </span>
                            <button
                              onClick={() =>
                                handleCounter(item.product_id, true)
                              }
                              className="w-[32px] h-[32px] bg-white rounded-[50%] text-[32px] flex justify-center items-center"
                            >
                              +
                            </button>
                          </div>
                          <h3 className="text-[#000] text-[22px] font-semibold">
                            {item.cost * counts[item.product_id]}
                            <span className="text-[#1F1D14] text-[16px]">
                              uzs
                            </span>
                          </h3>
                        </div>
                      </div>
                    </div>
                    <div>
                      <button className="w-[32px] h-[32px] bg-white flex items-center justify-center rounded-[50%] ">
                        <Image src={delete_icon} alt="delete_icon" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-[#06F] text-[20px] underline mb-[18px]">
                Все информация о доставке
              </p>
              <div className="text-[#000] text-[20px] max-w-[385px] w-full">
                <p>
                  Если у вас имеется вопросы позаоните по номеру:{" "}
                  <span className="text-[#06F] text-[20px] ">
                    +998 (93) 571 14 42{" "}
                  </span>
                </p>
              </div>
            </div>
            <div className="max-w-[504px] w-full p-10 bg-white rounded-[8px] max-lg:max-w-[980px] max-lg:w-full max-xs:p-3">
              <h4 className="mb-4 text-[20px] font-bold text-[#1F1D14]">
                Итого
              </h4>
              <div className="flex justify-between mb-4 ">
                <div>
                  Кол-во товаров:
                  <h3 className="text-[#1F1D14] text-[24px] font-bold">{Object.values(counts).reduce((a, b) => a + b, 0)}</h3>
                </div>
                <div className="text-end">
                  Сумма:
                  <h3 className="text-[#000] text-[22px] font-semibold">
                    <span className="text-[#1F1D14] text-[24px]">
                      {totalCost} uzs
                    </span>
                  </h3>
                </div>
              </div>
              <h4 className="my-6 text-[20px] font-bold text-[#1F1D14]">
                Ваши данные
              </h4>

              <Formik
                initialValues={initialValues}
                validationSchema={korzinkaValidationSchema}
                onSubmit={handleSubmit}
              >
                <Form>
                  <Stack spacing={2}>
                    <p className=" text-[#1F1D14] ">Имя /Фамиля</p>
                    <Field
                      name="full_name"
                      type="text"
                      label="Имя /Фамиля"
                      as={CustomTextField}
                      variant="outlined"
                      helperText={
                        <ErrorMessage
                          name="full_name"
                          component="p"
                          className="text-[red] text-[15px]"
                        />
                      }
                    />
                    <p className=" text-[#1F1D14] ">Ваш номер</p>
                    <Field
                      name="phone_number"
                      type="text"
                      label="+998 __ ___ __ __"
                      as={CustomTextField}
                      variant="outlined"
                      inputRef={inputRef}
                      helperText={
                        <ErrorMessage
                          name="phone_number"
                          component="p"
                          className="text-[red] text-[15px]"
                        />
                      }
                    />
                    <p className=" text-[#1F1D14] ">Адрес доставки</p>

                    <Field
                      name="address"
                      type="text"
                      label="Область/город/улица/дом"
                      as={CustomTextField}
                      variant="outlined"
                      helperText={
                        <ErrorMessage
                          name="address"
                          component="p"
                          className="text-[red] text-[15px]"
                        />
                      }
                    />
                  </Stack>
                  <h4 className="my-6 text-[20px] font-bold text-[#1F1D14]">
                    Тип оплаты
                  </h4>
                  <div className="flex flex-wrap gap-4 max-xs:flex max-xs:justify-between ">
                    <button className="py-[17px] px-[25px] bg-[#F2F2F2] rounded-[8px] w-[130px] flex justify-center items-center ">
                      <Image src={click} alt="click_icon" />
                    </button>
                    <button className="py-[17px] px-[25px] bg-[#F2F2F2] rounded-[8px] w-[130px]  flex justify-center items-center">
                      <Image src={payme} alt="payme_icon" />
                    </button>
                    <button
                      className="py-[17px] px-[15px] bg-[#F2F2F2] rounded-[8px] w-[130px] flex justify-center items-center"
                      onClick={handleKartaSubmit}
                    >
                      Через карту
                    </button>
                    <button className="py-[17px] px-[25px] bg-[#F2F2F2] rounded-[8px] w-[130px] flex justify-center items-center text-center ">
                      Банковский счёт
                    </button>
                  </div>
                  <button className="py-[20px]  my-10 px-[30px] max-w-[424px] w-full bg-[#FBD029] rounded-[5px] text-[24px] font-bold max-lg:w-full ">
                    Купить
                  </button>
                </Form>
              </Formik>
            </div>
          </div>
        </div>
      </div>

      <KartaModal open={open} setOpen={setOpen} />

    </>
  );
};

export default memo(Index);
