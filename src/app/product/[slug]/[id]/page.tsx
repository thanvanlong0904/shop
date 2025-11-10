"use client";
import { useState } from "react";
import Container from "@/src/components/layouts/Container";
import { useParams } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import { http } from "@/src/api/http";
import { Product } from "@/src/types/Product.type";
import { useCartStore } from "@/src/store/useCart";
export default function ProductDetailPage() {
  const productImages = [
    "https://pos.nvncdn.com/4ef0bf-108661/ps/Dam-co-duc-phoi-ke-chan-xep-ly-Xanh-than-M-2.jpg?v=1758780831",
    "https://pos.nvncdn.com/4ef0bf-108661/ps/Dam-co-duc-phoi-ke-chan-xep-ly-Xanh-than-M-3.jpg?v=1758780835",
    "https://pos.nvncdn.com/4ef0bf-108661/ps/Dam-co-duc-phoi-ke-chan-xep-ly-Xanh-than-M-4.jpg?v=1758780837",
    "https://pos.nvncdn.com/4ef0bf-108661/ps/Dam-co-duc-phoi-ke-chan-xep-ly-Kem-S-1.jpg?v=1758780888",
    "https://pos.nvncdn.com/4ef0bf-108661/ps/Dam-co-duc-phoi-ke-chan-xep-ly-Kem-S-2.jpg?v=1758780890",
    "https://pos.nvncdn.com/4ef0bf-108661/ps/Dam-co-duc-phoi-ke-chan-xep-ly-Kem-S-4.jpg?v=1758780896",
  ];
  const { id } = useParams();
  const { add } = useCartStore();
  const [selectedImage, setSelectedImage] = useState(productImages[0]);
  const [quantity, setQuantity] = useState(1);

  const handleIncrease = () => setQuantity((prev) => prev + 1);
  const handleDecrease = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  const { data: itemProduct } = useQuery({
    queryKey: ["product", id],
    queryFn: async () =>
      await http.get<Product>(`/products/${id}`).then((res) => res.data),
  });
  console.log(itemProduct);
  return (
    <Container>
      <div className="grid grid-cols-12 gap-8 py-10">
        {/* ==== CỘT HÌNH ẢNH ==== */}
        <div className="col-span-6 grid grid-cols-12 gap-6">
          {/* Thumbnail bên trái */}
          <div className="col-span-2 flex flex-col justify-between">
            {productImages.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Thumbnail ${index + 1}`}
                onClick={() => setSelectedImage(img)}
                className={`cursor-pointer w-full aspect-square object-contain bg-gray-50 border rounded-md p-1 transition-all duration-300 ${
                  selectedImage === img
                    ? "border-red-500 scale-105"
                    : "border-gray-200 hover:border-gray-400"
                }`}
              />
            ))}
          </div>

          {/* Ảnh chính */}
          <div className="col-span-10 flex items-center justify-center">
            <img
              src={selectedImage}
              alt="Ảnh sản phẩm chính"
              className="max-w-full max-h-[600px] object-contain rounded-md bg-gray-50 p-3 shadow transition-all duration-300"
            />
          </div>
        </div>

        {/* ==== CỘT THÔNG TIN ==== */}
        <div className="col-span-6">
          <h1 className="text-2xl font-semibold mb-2">{itemProduct?.name}</h1>
          <p className="text-gray-500 text-sm mb-2">SKU: 1F06.2509</p>
          <p className="text-red-600 text-2xl font-bold mb-4">
            {itemProduct?.price.toLocaleString("vi-VN")}đ
          </p>

          {/* Màu sắc */}
          <div className="mb-4">
            <h3 className="text-sm font-medium mb-2">Màu sắc:</h3>
            <div className="flex gap-3">
              <div className="w-7 h-7 bg-blue-900 rounded-full border cursor-pointer" />
              <div className="w-7 h-7 bg-gray-300 rounded-full border cursor-pointer" />
            </div>
          </div>

          {/* Size */}
          <div className="mb-4">
            <h3 className="text-sm font-medium mb-2">Size:</h3>
            <div className="flex gap-2">
              {["S", "M", "L", "XL"].map((size) => (
                <button
                  key={size}
                  className="border border-gray-400 px-4 py-1 rounded hover:border-red-500 transition"
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Số lượng */}
          <div className="mb-6">
            <h3 className="text-sm font-medium mb-2">Số lượng:</h3>
            <div className="flex items-center ">
              <button
                onClick={handleDecrease}
                className="w-10 h-10 border cursor-pointer border-gray-300 rounded-l-md flex items-center justify-center text-lg font-semibold hover:bg-gray-100 transition"
              >
                -
              </button>

              <input
                type="number"
                value={quantity}
                readOnly
                className="w-15 h-10 text-center  border border-gray-300  font-medium"
              />

              <button
                onClick={handleIncrease}
                className="w-10 h-10 border cursor-pointer border-gray-300 rounded-r-md flex items-center justify-center text-lg font-semibold hover:bg-gray-100 transition"
              >
                +
              </button>
            </div>
          </div>

          {/* Nút hành động */}
          <div className="flex gap-3">
            <button
              onClick={() => {
                if (!itemProduct) return; 
                add(itemProduct, quantity);
              }}
              className="border border-gray-400 px-6 py-2 rounded hover:bg-gray-100 transition cursor-pointer"
            >
              THÊM VÀO GIỎ HÀNG
            </button>
            <button className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800 transition">
              MUA NGAY
            </button>
          </div>
        </div>
      </div>
    </Container>
  );
}
