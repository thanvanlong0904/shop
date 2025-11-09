'use client';
import Container from "@/src/components/layouts/Container";
import Image from "next/image";
import { RevealWrapper } from 'next-reveal';
export default function BannerPromotion() {
  return (
     <RevealWrapper
      origin="bottom"
      distance="50px"
      delay={200}
      duration={600}
    >
      <div className="mt-[90px]">
      <Container>
        <div className=" grid grid-cols-2 gap-4">
          <div className=" col-span-1 overflow-hidden">
            <a href="">
              <Image
                src="https://pos.nvncdn.com/4ef0bf-108661/bn/20251106_NP9S6TV0.jpg?v=1762399896"
                alt="Đầm"
                width={100}
                height={40}
                unoptimized
                 className="w-full h-auto object-contain mb-2 transition-transform duration-500 ease-in-out hover:scale-105"
              />
            </a>
          </div>
           <div className=" col-span-1 overflow-hidden">
            <a href="">
              <Image
                src="https://pos.nvncdn.com/4ef0bf-108661/bn/20251002_ylnrp9a4.jpg?v=1759377760"
                alt="Đầm"
                width={100}
                height={40}
                unoptimized
                 className="w-full h-auto object-contain mb-2 transition-transform duration-500 ease-in-out hover:scale-105"
              />
            </a>
          </div>
           <div className=" col-span-1 overflow-hidden">
            <a href="">
              <Image
                src="https://pos.nvncdn.com/4ef0bf-108661/bn/20250925_QR7TJv03.jpg?v=1758788166"
                alt="Đầm"
                width={100}
                height={40}
                unoptimized
                 className="w-full h-auto object-contain mb-2 transition-transform duration-500 ease-in-out hover:scale-105"
              />
            </a>
          </div>
           <div className=" col-span-1 overflow-hidden">
            <a href="">
              <Image
                src="https://pos.nvncdn.com/4ef0bf-108661/bn/20250731_zuCbbbJI.jpg?v=1753944584"
                alt="Đầm"
                width={100}
                height={40}
                unoptimized
                 className="w-full h-auto object-contain mb-2 transition-transform duration-500 ease-in-out hover:scale-105"
              />
            </a>
          </div>
           <div className=" col-span-1 overflow-hidden">
            <a href="">
              <Image
                src="https://pos.nvncdn.com/4ef0bf-108661/bn/20250821_0lwtdxz6.jpg?v=1755739086"
                alt="Đầm"
                width={100}
                height={40}
                unoptimized
                 className="w-full h-auto object-contain mb-2 transition-transform duration-500 ease-in-out hover:scale-105"
              />
            </a>
          </div>
           <div className=" col-span-1 overflow-hidden">
            <a href="">
              <Image
                src="https://pos.nvncdn.com/4ef0bf-108661/bn/20250904_1KjJ9i18.jpg?v=1756966546"
                alt="Đầm"
                width={100}
                height={40}
                unoptimized
                 className="w-full h-auto object-contain mb-2 transition-transform duration-500 ease-in-out hover:scale-105"
              />
            </a>
          </div>
        </div>
      </Container>
    </div>
    </RevealWrapper>
    
  );
}
