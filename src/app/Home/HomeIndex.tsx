import React from "react";
import Slider from "./Slider";
import CategorySession from "./CategorySession";
import BannerPromotion from "./BannerPromotion";
import ProductHotBox from "./ProductHotBox";

export default function HomeIndex() {
  return (
    <div>
      <Slider></Slider>
      <CategorySession></CategorySession>
      <BannerPromotion></BannerPromotion>
      <ProductHotBox></ProductHotBox>
    </div>
  );
}
