import Link from "next/link";
interface ItemProductProp {
  name: string,
  price: number,
  oldPrice: number,
  img: string,
  sold: number,
  url: string | ""
}
export default function ItemProduct({name, price, oldPrice, img, sold, url}: ItemProductProp) {
  return (
    <div className="col-span-2 border border-gray-400 hover:border-red-400 rounded-md hover:shadow-lg transition-shadow duration-300">
      <Link href={url} className="block">
        <div className="overflow-hidden">
          <img
            src={img}
            alt={name}
            className="w-full h-auto rounded-t-md hover:scale-110 transition duration-300"
          />
        </div>
        <h1 className="line-clamp-1 text-[13px] font-semibold px-2 mt-3 text-gray-800">
         {name}
        </h1>
      </Link>
      <div className="px-2 pb-3">
        <div className="flex justify-between mt-2 text-[13px] font-semibold">
          <span className="text-red-700">{price} đ</span>
          <del className="text-gray-400 font-normal">{oldPrice} đ</del>
        </div>
        <div className="flex justify-between mt-2 items-center">
          <div className="text-yellow-400">
            {[...Array(5)].map((_, i) => (
              <i key={i} className="fas fa-star fa-fw text-[10px]"></i>
            ))}
          </div>
          <div className="text-[12px] text-gray-500">({sold} đã bán)</div>
        </div>
      </div>
    </div>
  );
}
