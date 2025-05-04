// export interface Product {
//     age_max: number;
//     age_min: number;
//     product_id: string;
//     product_name: string;
//     category_id: string;
//     description: string;
//     made_in: string;
//     color: string[];
//     image_url: string[]  ;
//     size: string[];
//     count: number;
//     cost: number;
//     discount: number;
//     for_gender: string;
//     liked: boolean;
//     basket: boolean;
//   }

interface Review {
  rating: number;
  comment: string;
  date: string; // ISO formatdagi sana, string sifatida ko‘riladi
  reviewerName: string;
  reviewerEmail: string;
}
export interface Product {
  product_id:number,
  title:string,
  description: string;
  category:string,
  price:number,
  discountPercentage:number,
  rating:number,
  stock:number,
  tags:string[],
  brand:string,
  sku:string,
  weight:number,
  images:string[]
  dimensions: {
    width: number;
    height: number;
    depth: number;
  };
  warrantyInformation:string,
  shippingInformation:string,
  availabilityStatus:string,
  reviews:Review[],
  returnPolicy:string,
  minimumOrderQuantity:number,
  meta:{
    createdAt:string,
    updatedAt:string,
    barcode:string,
    qrCode:string
  },
  thumbnail:string,

  } 

 