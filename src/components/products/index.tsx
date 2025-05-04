"use client";
import { memo, useEffect, useState } from "react";
import Image from "next/image";
import "./index.css";
import {
  product1,
  product2,
  product3,
  product4,
  like,
  savat,
  liked,
} from "@images";
import { Product } from "@types";
import { getProductsData, saveBasketProduct, saveLikeProduct } from "@service";
import { toast } from "react-toastify";
import Link from "next/link";
import axios from "axios";

const Index = () => {
  const [getData, setGetData] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [products, setProducts] = useState<Product[]>([]);
  const [likedProducts, setLikedProducts] = useState<{
    [key: string]: boolean;
  }>({});
  const [params, setParams] = useState({ page: 1, limit: 4 });
  const defaultImage = "https://unsplash.com/photos/250x190";

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      try {
        const getData = await axios.get("https://dummyjson.com/products");
        console.log(getData?.data?.products);
        setGetData(getData?.data?.products);
        console.log(getData?.data?.products);
      } catch (error) {
        console.log("Xatolik mavjud:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [page]);

  const handleClick = () => {
    setPage((prevPage) => {
      const newPage = prevPage + 1;
      setParams((prevParams) => ({ ...prevParams, page: newPage }));
      return newPage;
    });
  };

  return (
    <>
      <div className="bg-white">
        <div className="container">
          <div className="py-[70px] max-lg:py-[60px] max-md:py-[50px] max-sm:py-[40px] max-xs:py-[30px]">
            <h2 className="text-[#1F1D14] text-[32px] font-Fira Sans font-bold mb-9 ">
              Продукты
            </h2>
            <div className="products">
              {getData?.map((item) => (
                <div className="product" key={item.product_id}>
                  <div className="product-img">
                    <Link href={`/product/${item.product_id}`}>
                      <Image
                        src={item.images[0]}
                        alt={item.title}
                        className="card-image"
                        width={245}
                        height={240}
                      />
                    </Link>
                  </div>
                  <h3 className="product-name ">
                    {item.title}
                  </h3>
                  <div className="product-desc">{item.description}</div>
                  <div className="product-rating">
                    Mahsulot urtacha bahosi: 
                    <span >
                    {item.rating}
                    </span>
                  </div>
                  <div className="product-category">{item.brand}</div>
                  <div className="product-more-div">
                    <div className="product-price">${item.price}</div>
                    <div className="product-count">{item.stock} ta</div>
                    <button className="product-btn">
                      <Image
                        src={savat}
                        alt="savatcha"
                        width={16}
                        className="btn-savatcha"
                      />
                      Add
                    </button>
                  </div>
                  <div className="product-item">New</div>
                </div>
              ))}
            </div>
            <button
              className="w-full py-[15px] mt-[50px] px-10 bg-white rounded-[5px] text-[20px] hover:bg-[#FBD029] hover:text-[#1F1D14] transition-all duration-500 ease-linear"
              onClick={handleClick}
            >
              Показать ещё 3
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default memo(Index);
