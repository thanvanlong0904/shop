"use client";
import Container from "@/src/components/layouts/Container";
import ItemProduct from "@/src/components/features/ItemProduct";
import { useQuery } from "@tanstack/react-query";
import { http } from "@/src/api/http";
import {Product} from "@/src/types/Product.type";
import { toSlug } from "@/src/utils/slug";

export default function ProductHotBox() {
  const { data: itemProducts } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      return await http.get<Product[]>("/products").then((res) => res.data);
    },
  });
  console.log(itemProducts);
  return (
    <div className=" mt-[60px] mb-[100px]">
      <Container>
        <h1 className=" text-center mb-8 font-semibold text-[25px]">
          SẢN PHẨM BÁN CHẠY
        </h1>
        <div className="grid grid-cols-12 gap-4">
          {itemProducts?.map((item, idx) => {
            const slug = toSlug(item.name);
            return (
              <ItemProduct
                key={idx}
                {...item}
                url={`/product/${slug}/${item._id}`}
              />
            );
          })}
        </div>
      </Container>
    </div>
  );
}
