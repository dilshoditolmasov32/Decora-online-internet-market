"use client";

import { memo, useEffect, useState } from "react";
import { Select, Breadcrumb } from "antd";
import { HomeOutlined } from "@ant-design/icons";
import { Slider } from "@mui/material";
import { getProductsData, saveBasketProduct, saveLikeProduct } from "@service";
import { Product } from "@types";
import { ActionProduct, Skeleton } from "@/components";
import { board, savat, like, list, liked } from "@images";
import { toast, ToastContainer } from "react-toastify";
import Link from "next/link";
import Image from "next/image";

const Index = () => {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState<Product[]>([]);
  const [page, setPage] = useState(1);
  const [likedProducts, setLikedProducts] = useState<{
    [key: string]: boolean;
  }>({});
  const [params, setParams] = useState({
    page: 1,
    limit: 3,
  });
  const defaultImage = "https://unsplash.com/photos/250x190";

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const data = await getProductsData(params);
      if (data) {
        setProducts((prevProducts) => {
          return page === 1 ? data : [...prevProducts, ...data];
        });
      }
      setLoading(false);
    };

    fetchData();
 }, [page, params]);
  const addToCart = async (item: Product) => {
    const payload = { ...item, productId: item.product_id };
    const response = await saveBasketProduct(String(payload.productId));
    if (response === true) {
      toast.success("Mahsulot savatga qoshildi!", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };

  const addToWishlist = async (item: Product) => {
    const response = await saveLikeProduct(String(item.product_id));
    if (response === true) {
      setLikedProducts((prevLikedProducts) => ({
        ...prevLikedProducts,
        [item.product_id]: true,
      }));
      toast.success("Mahsulot sevimlilarga qo&#39;shildi!", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };

  const handleClick = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const data = {
    option1: ["Сортировать", "Option-2", "Option-3"],
    option2: ["Все продукты", "Option-2", "Option-3"],
  };

  type CityName = keyof typeof data;
  const provinceData: CityName[] = ["option1", "option2"];

  const [cities, setCities] = useState(data[provinceData[0] as CityName]);
  const [secondCity, setSecondCity] = useState(
    data[provinceData[0]][0] as CityName
  );

  const handleProvinceChange = (value: CityName) => {
    setCities(data[value]);
    setSecondCity(data[value][0] as CityName);
  };

  const onSecondCityChange = (value: CityName) => {
    setSecondCity(value);
  };

  const [value, setValue] = useState<number[]>([20, 37]);
  const minDistance = 10;

  const handleChange = (newValue: number | number[], activeThumb: number) => {
    if (!Array.isArray(newValue)) {
      return;
    }

    if (activeThumb === 0) {
      setValue([Math.min(newValue[0], value[1] - minDistance), value[1]]);
    } else {
      setValue([value[0], Math.max(newValue[1], value[0] + minDistance)]);
    }
  };

  return (
    <>
      <div className="pt-5">
        <div className="container">
          <Breadcrumb
            items={[
              {
                href: "/",
                title: (
                  <div className="flex items-center gap-[10px] hover:bg-none">
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
                    <p className="text-[#1F1D14] text-[17px]">Продукты</p>
                  </>
                ),
              },
            ]}
            className="my-5 flex items-center"
          />
          <div className="flex gap-6 md:gap-4 max-md:grid max-md:grid-cols-1">
            <div>
              <div className="bg-white xl:w-[292px] rounded-[8px] px-[18px] pt-[19px] pb-[38px] md:w-[260px] max-md:w-full">
                <h5 className="text-[16px] font-Fira Sans text-[#000]">
                  Филтрь
                </h5>
                <form>
                  <label
                    htmlFor="Цена"
                    className="text-[12px] font-Fira Sans text-[#000] mb-[10px]"
                  >
                    Цена
                  </label>
                  <div className="bg-[#F2F2F2] mt-[10px] py-[12px] px-5 rounded-[5px] mb-[16px]">
                    <Slider
                      getAriaLabel={() => "Minimum distance"}
                      value={value}
                      valueLabelDisplay="auto"
                      disableSwap
                      sx={{ color: "#FBD029", height: "4px" }}
                    />
                    <div className="flex text-[000000] gap-16 font-bold text-[14px]">
                      <span>3 000 uzs</span>
                      <span>40 000 uzs</span>
                    </div>
                  </div>
                  <label
                    htmlFor="aртикул"
                    className="text-[12px] font-Fira Sans text-[#000] mb-[10px]"
                  >
                    Артикул:
                  </label>
                  <br />
                  <input
                    type="text"
                    className="bg-[#f2f2f2] rounded-[5px] px-[18px] py-[10px] outline-none text-[16px] text-[#000] w-full mt-[10px] mb-4"
                    placeholder="аф566"
                  />
                  <label
                    htmlFor="aртикул"
                    className="text-[12px] font-Fira Sans text-[#000] mb-[10px]"
                  >
                    Выберите категорию:
                  </label>
                  <br />
                  <select
                    name="select_option"
                    className="bg-[#F2F2F2] rounded-[5px] w-full outline-none py-[10px] px-[18px] mt-[10px] mb-4"
                  >
                    <option value="1">Bce</option>
                    <option value="2">option-1</option>
                    <option value="3">option-2</option>
                  </select>
                  <br />
                  <label
                    htmlFor="aртикул"
                    className="text-[12px] font-Fira Sans text-[#000] mb-[10px]"
                  >
                    Новинка:
                  </label>
                  <select
                    name="select_option"
                    className="bg-[#F2F2F2] rounded-[5px] w-full outline-none py-[10px] px-[18px] mt-[10px] mb-4"
                  >
                    <option value="1">Bce</option>
                    <option value="2">option-1</option>
                    <option value="3">option-2</option>
                  </select>
                  <label
                    htmlFor="aртикул"
                    className="text-[12px] font-Fira Sans text-[#000] mb-[10px]"
                  >
                    Акция:
                  </label>
                  <br />
                  <select
                    name="select_option"
                    className="bg-[#F2F2F2] rounded-[5px] w-full outline-none py-[10px] px-[18px] mt-[10px] mb-4"
                  >
                    <option
                      className="text-[16px] text-[#000000] font-Fira Sans"
                      value="1"
                    >
                      Bce
                    </option>
                    <option
                      className="text-[16px] text-[#000000] font-Fira Sans"
                      value="2"
                    >
                      option-1
                    </option>
                    <option
                      className="text-[16px] text-[#000000] font-Fira Sans px-5"
                      value="3"
                    >
                      option-2
                    </option>
                  </select>
                </form>
              </div>
              <button
                type="submit"
                className="bg-[#E4E4E4] pt-[15px] pb-[21px] w-[292px] font-Fira Sans text-[15px] rounded-[8px] hover:bg-[#F2F2F2] transition-all md:w-[260px] max-md:w-full xl:w-[292px]"
              >
                Показать результат
              </button>
            </div>
            <div>
              <div className="flex justify-between items-center mb-[10px] max-xs:block">
                <div className="flex gap-[25px] max-xs:w-full max-xs:flex max-xs:justify-between max-xs:mb-5">
                  <Select
                    style={{ width: 120 }}
                    value={secondCity}
                    onChange={onSecondCityChange}
                    options={cities.map((city) => ({
                      label: city,
                      value: city,
                    }))}
                  />
                  <Select
                    style={{ width: 120 }}
                    value={secondCity}
                    onChange={onSecondCityChange}
                    options={cities.map((city) => ({
                      label: city,
                      value: city,
                    }))}
                  />
                </div>
                <div className="flex gap-[8px] max-xs:w-full max-xs:flex max-xs:justify-between">
                  <button className="flex justify-between items-center gap-[10px] rounded-[5px] bg-white py-[7px] px-[15px]">
                    <Image src={board} alt="board" />
                    Кард
                  </button>
                  <button className="flex justify-between items-center gap-[10px]">
                    <Image src={list} alt="list" />
                    Лист
                  </button>
                </div>
              </div>
              {loading ? (
                <Skeleton count={3} />
              ) : (
                <div className="gap-6 xl:grid xl:grid-cols-3 lg:grid lg:grid-cols-3 md:grid md:grid-cols-2 max-md:block sm:grid sm:grid-cols-2 sm:mt-6 sm:justify-items-center xs:grid xs:grid-cols-2">
                  {products?.map((item) => (
                    <div
                      className="pt-[15px] rounded-[5px] bg-white max-w-[292px]  w-full relative max-xs:max-w-[440px] max-xs:w-full max-xs:mt-5"
                      key={item.product_id}
                    >
                      <div className="absolute top-[10px] right-[14px]">
                        <button onClick={() => addToWishlist(item)}>
                          <Image
                            src={likedProducts[item.product_id] ? liked : like}
                            alt="like"
                            width={20}
                            height={20}
                          />
                        </button>
                      </div>
                      <div className="max-xs:flex max-xs:justify-center mx-[25px] w-full h-[200px] overflow-hidden py-5">
                        <Link href={`product/${item?.product_id}`}>
                          <div className="relative w-full h-full">
                            <Image
                              layout="fill"
                              objectFit="contain"
                              objectPosition="center"
                              src={
                                item.images && item.images.length > 0
                                  ? item.images[0]
                                  : defaultImage
                              }
                              alt="product_image"
                            />
                          </div>
                        </Link>
                      </div>

                      <p className="ml-[30px] pr-5 mb-3 mt-5 text-[20px] max-sm:pr-3 font-bold h-[50px]">
                        {item.title}
                      </p>
                      <div className="flex justify-between ml-[30px] mr-6 my-3">
                        <h3 className="text-[20px]">
                          Gender: <br />
                          {item.product_id}
                        </h3>
                        <p className="text-[20px]">
                          Country: <br /> {item.brand}
                        </p>
                      </div>
                      <div className="pl-[30px] pr-5 mb-[25px] text-[20px] font-semibold">
                        {item.price} uzs
                      </div>
                      <button
                        className="bg-[#FBD029] hover:bg-[#f8b600e0] hover:text-[#1F1D14] transition-all duration-500 ease-linear w-full flex items-center justify-center gap-[6px] py-[15px] font-Fira Sans text-[20px] text-[#1F1D14] rounded-br-[5px] rounded-bl-[5px]"
                        onClick={() => addToCart(item)}
                      >
                        <span>
                          <Image src={savat} alt="korzinka_icon" />
                        </span>
                        Корзина
                      </button>
                    </div>
                  ))}
                </div>
              )}
              <button
                className="w-full py-[15px] mt-[50px] px-10 bg-white rounded-[5px] text-[20px] hover:bg-[#FBD029] hover:text-[#1F1D14] transition-all duration-500 ease-linear"
                onClick={handleClick}
              >
                Показать ещё 3
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="my-20 max-xs:my-5 max-sm:my-14">
        <ActionProduct />
      </div>
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
};

export default  memo(Index);
