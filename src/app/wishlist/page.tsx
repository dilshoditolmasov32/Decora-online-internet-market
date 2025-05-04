"use client";
import { memo, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { like, savat, shopping_bag } from "@images";
import { Product } from "@types";
import { getLikeProduct } from "@service";

const Index = () => {
  const [count, setCount] = useState(0);
  const [wishlist, setWishlist] = useState<Product[]>([]);
  const [params, setParams] = useState({
    page: 1,
    limit: 5,
  });

  const defaultImage = "https://unsplash.com/photos/250x190";

  useEffect(() => {
    const fetData = async () => {
      const response = await getLikeProduct(params);
      console.log(response, "like");
      if (response) {
        setWishlist(response);
      }
    };
  
    fetData();
  }, [params]);
  

  return (
    <>
      {wishlist?.length ? (
        <div className="container">
          <h2 className="text-[#1F1D14] text-[32px] font-Fira Sans font-bold my-2">
            Мои желания
          </h2>
          <div className=" border-solid border-[#FBD029] w-full border-[1px]"></div>
          <div className="flex gap-6 max-lg:grid max-lg:grid-cols-3  max-md:grid max-md:grid-cols-2 max-md:justify-items-center max-xs:grid max-xs:grid-cols-1 mt-[25px] mb-[80px]">
            {wishlist?.map((item) => (
              <div
                className="pt-[15px] rounded-[5px] bg-white max-w-[292px]  w-full relative max-xs:max-w-[440px] max-xs:w-full max-xs:mt-5"
                key={item.product_id}
              >
                <div className="absolute top-[10px] right-[14px]">
                  <button>
                    <Image
                      src={like}
                      alt="like"
                    />
                  </button>
                </div>
                <div className="max-xs:flex max-xs:justify-center mx-[25px] w-full h-[190px] overflow-hidden  py-5 ">
                  <Link href={`product/${item.product_id}`}>
                    <Image
                      width={250}
                      height={200}
                      src={
                        item.images && item.images.length > 0
                          ? item.images[0]
                          : defaultImage
                      }
                      alt="product_image"
                    />
                  </Link>
                </div>

                <p className="ml-[30px] pr-5 mb-3 mt-5 text-[20px] max-sm:pr-3 font-bold">
                  {item.title}
                </p>
                <div className="flex justify-between ml-[30px] mr-6 my-3">
                  <h3 className="text-[20px]">
                    Gender: <br />
                    {item.brand}
                  </h3>
                  <p className="text-[20px]">
                    Country: <br /> {item.category}
                  </p>
                </div>
                <div className="pl-[30px] pr-5 mb-[25px] text-[20px] font-semibold">
                  {item.price} uzs
                </div>
                <button className="bg-[#FBD029] hover:bg-[#f8b600e0] hover:text-[#1F1D14] transition-all duration-500 ease-linear w-full flex items-center justify-center gap-[6px] py-[15px] font-Fira Sans text-[20px] text-[#1F1D14] rounded-br-[5px] rounded-bl-[5px]">
                  <span>
                    <Image src={savat} alt="korzinka_icon" />
                  </span>
                  Корзина
                </button>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="h-[60vh] flex justify-center items-center ">
          <div className="container">
            <div className="text-center">
              <div className="flex justify-center ">
                <Image
                  width={100}
                  height={100}
                  src={shopping_bag}
                  alt="shop_bag"
                  className="bg-[#F2F2F2] mb-6"
                />
              </div>
              <h2 className="font-bold text-[24px]">
                Sevimlilar ro&apos;yxati bo&apos;sh
              </h2>
              <div className="flex justify-center my-4">
                <p className="max-w-[500px] w-full flex justify-center">
                  Ma&apos;qul kelgan maxsulotlarni keyinroq ko&apos;rish yoki
                  harid qilish uchun sevimlilar ro&apos;yxatiga kiriting.
                </p>
              </div>
              <Link href={"/"}>
                <button className="border-[#FBD029] border-[2px] text-[18px] rounded-[8px]  py-3 px-4 ">
                  Asosiy sahifaga o&apos;tish
                </button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default  memo(Index);
