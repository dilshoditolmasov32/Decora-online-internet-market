import { memo } from "react"
import { check, check2, aksiya, taksi } from "@images"
import Image from "next/image"

const Index = () => {
    const boxs=[
        {
            id:1,
            title:"Доставка по всему Узбекистану",
            image:taksi
        },
        {
            id:2,
            title:"Доставка по всему Узбекистану",
            image:check
        },
        {
            id:3,
            title:"Скидки и акции",
            image:aksiya
        },
        {
            id:4,
            title:"Широкий ассортимент товаров",
            image:check2
        },
    ]
  return (
    <>
    <div className="my-20">
        <div className="container">
            <h2 className="text-[#1F1D14] text-[32px] font-Fira Sans font-bold mb-9">Примущества</h2>
            <div className="flex gap-6 max-xs:grid max-xs:grid-cols-1 xs:grid xs:grid-cols-2 xs:justify-items-center md:grid md:grid-cols-3 lg:grid lg:grid-cols-4">
                {
                    boxs?.map((item)=>(
                        <div key={item.id} className="bg-white rounded-[8px] w-[292px] pl-10 pt-16 pr-[70px] max-xs:w-full max-xs:flex max-xs:gap-5 max-xs:items-center max-xs:p-8 xs:p-5 xs:max-w-[290px] xs:w-full lg:py-16 lg:px-10 transform transition-transform duration-300 ease-in-out hover:scale-105">
                      <div className="xs:flex xs:justify-center lg:flex lg:justify-start">
                      <Image src={item.image} alt="icon" />
                      </div>
                      
                            <p className="xs:mt-5">{item.title}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    </div>
    </>
  )
}

export default  memo(Index)