
import { memo } from "react"
import Swipper from "../components/swiper"
import { Katalog, Products, BoxCard,Box, MarketAbout} from "@/components"

const Index = () => {
  return (
    <>
    <div className="pt-5 pb-10 bg-[#F2F2F2]">
    <Swipper/>
    </div>
    <Katalog/>
    <Products/>
    <BoxCard/>
    <Box/>
    <MarketAbout/>
    </>
  )
}

export default memo(Index)