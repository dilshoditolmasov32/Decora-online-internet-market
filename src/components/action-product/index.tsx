import { memo } from "react";
import Image from "next/image";
import { product1, product2, product3, product4, like, savat, action } from "@images";

const Index = () => {
  const products = [
    {
      id: "1",
      image: product1,
      name: "Бутса Nike Mercurial Superfly 8 FG",
      price: "250 000 uzs",
    },
    {
      id: "2",
      image: product2,
      name: "Бутса Nike Mercurial Superfly 8 FG",
      price: "250 000 uzs",
    },
    {
      id: "3",
      image: product3,
      name: "Бутса Nike Mercurial Superfly 8 FG",
      price: "250 000 uzs",
    },
    {
      id: "4",
      image: product4,
      name: "Бутса Nike Mercurial Superfly 8 FG",
      price: "250 000 uzs",
    },
  ];
  return (
    <>
      <div className="container">
        <div className="py-[70px]">
          <h2 className="text-[#1F1D14] text-[32px] font-Fira Sans font-bold mb-9">
          Акция
          </h2>
          <div className="flex gap-6 max-lg:grid max-lg:grid-cols-3  max-md:grid max-md:grid-cols-2 max-md:justify-items-center max-xs:grid max-xs:grid-cols-1">
            {products?.map((item, index) => (
              <div
                className="pt-[25px] rounded-[5px] bg-white w-[292px] relative max-lg:max-w-[280px] max-lg:w-full max-md:max-w-[290px]  max-xs:max-w-[440px] max-xs:w-full group"
                key={index}
              >
                  
                <div className="absolute top-[10px] right-[14px]">
                  <button>
                    <Image src={like} alt="like" />
                  </button>
                </div>
                <div className="absolute top-[0] left-[0px]">
                <Image src={action} alt="action" />
                </div>
             <div className="overflow-hidden m-3">
             <Image
                  src={item.image}
                  alt="product_image"
                  className="pl-[30px] pr-5 transform transition-transform duration-300 ease-in-out group-hover:scale-105"
                />
             </div>
                <p className="pl-[30px] pr-5 mb-6 mt-5 text-[20px]">
                  {item.name}
                </p>
                <div className="pl-[30px] pr-5 mb-[25px] text-[20px] font-semibold">
                  {item.price}
                </div>
                <button className="bg-[#FBD029] w-full hover:bg-[#f8b600e0] hover:text-[#1F1D14] transition-all duration-500 ease-linear  flex items-center justify-center gap-[6px] py-[15px] font-Fira Sans text-[20px] text-[#1F1D14] rounded-br-[5px] rounded-bl-[5px]">
                  <Image src={savat} alt="korzinka_icon" />
                  Корзина
                </button>
              </div>
            ))}
          </div>
        </div>
      
      </div>
    </>
  );
};

export default  memo(Index);
