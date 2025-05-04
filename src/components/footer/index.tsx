import { memo } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  email,
  logo,
  phone_icon,
  lokatsiya,
  instagram,
  telegram,
  facebook,
} from "@images";

const Index = () => {
  return (
    <>
      <div className="bg-[#FBD029] h-6 w-full"></div>
      <div className="bg-[#1F1D14] pt-[72px] pb-11">
        <div className="container">
          <div className="flex justify-between gap-6 max-lg:flex max-lg:flex-wrap max-lg:px-5 max-md:flex max-md:px-5">
            <div className="max-xs:mb-4">
              <Link
                href={"/"}
                className="font-bold tracking-wider  uppercase text-[#F28C38] font-Fira Sans text-3xl"
              >
                Decora
              </Link>
            </div>

            <div>
              <h4 className="text-[#fff] font-Fira Sans font-semibold text-[18px] opacity: 0.9 mb-5">
                Контакты
              </h4>
              <p className="flex items-center gap-[13px] mb-6">
                <Image src={phone_icon} alt="phone icon" />
                <Link
                  href="tel:+998905711442"
                  className="font-Fira Sans text-white  text-[16px]"
                >
                  +998 90 571 14 42
                </Link>
              </p>
              <p className="flex items-center gap-[13px] mb-6">
                <Image src={email} alt="email icon" />
                <Link
                  href="mailto: dilshoditolmasov32@gmail.com"
                  className="font-Fira Sans text-white  text-[16px] max-w-[18px]"
                >
                  support@figma.com
                </Link>
              </p>
            </div>

            <div>
              <h4 className="text-[#fff] font-Fira Sans font-semibold text-[18px] opacity: 0.9 mb-5">
                Adress
              </h4>
              <p className="flex items-center gap-[13px] mb-6 ">
                <Image src={lokatsiya} alt="address icon" />
                <Link
                  href="https://maps.app.goo.gl/3xpddUHJGCxbQGy27"
                  target="_blank"
                  className="font-Fira Sans text-white  text-[16px] max-w-[235px]"
                >
                  Tashkent Sh. Chilonzor 9 kvartal 12 uy
                </Link>
              </p>
            </div>
            <div>
              <h4 className="text-[#fff] font-Fira Sans font-semibold text-[18px] opacity: 0.9 mb-4">
                Подписатся
              </h4>
              <form>
                <input
                  type="email"
                  required
                  placeholder="support@figma.com"
                  className="py-[15px] px-4 font-Fira Sans text-[12px] text-[#9A9EA5] leading-3 rounded-[5px] border-[1px] border-[#9A9EA5] outline-none max-xs:w-full "
                />
                <button
                  type="submit"
                  className="bg-[#FBD029] text-[#1F1D14]  px-10 font-Fira Sans text-[16px] rounded-[6px]   lg:left-[-40px] xs:w-full  xs:flex xs:justify-center py-[10px] xs:mt-5 xs:px-6  max-xs:w-full max-xs:mt-5"
                >
                  Отправить
                </button>
              </form>

              <div className="flex gap-5 mt-10">
                <p className="flex items-center gap-[5px] mb-6 max-xs:flex max-xs:justify-center">
                  <Link href="https://www.instagram.com/dilshodbek_zafarivich">
                    <Image src={instagram} alt="instagram icon" />
                  </Link>
                </p>
                <p className="flex items-center gap-[5px] mb-6">
                  <Link href="https://www.facebook.com" target="_blank">
                    <Image src={facebook} alt="facebook icon" />
                  </Link>
                </p>
                <p className="flex items-center gap-[5px] mb-6">
                  <Link href="http://t.me/developer_1442" target="_blank">
                    <Image src={telegram} alt="telegram icon" />
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#F2F2F2] w-full h-[1px] opacity-30"></div>
      <div className="bg-[#1F1D14]">
        <div className="container">
          <div className="flex flex-wrap justify-between items-center pt-[13px] pb-[22px] max-md:gap-5 max-md:justify-center">
            <div>
              <p className="text-[#7B7E86]">© 2022 All Rights Reserved</p>
            </div>
            <div className="flex gap-10 text-[#7B7E86] max-xs:flex max-xs:flex-wrap">
              <p className="">Privacy Policy</p>
              <p>Terms of Use</p>
              <p>Sales and Refunds</p>
              <p>Legal</p>
              <p>Site Map</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default memo(Index);
