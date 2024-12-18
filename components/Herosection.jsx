"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";
import { Button } from "./ui/button";

export default function HeroSection() {
  return (
    <section className="w-full h-[100vh] bg-red-900 text-white py-6 px-6 md:px-16 flex flex-col md:flex-row items-center justify-around">
      <div className="flex flex-col items-center md:items-start max-w-md w-[100%]">
        <h1
          className="text-6xl md:text-6xl font-bold text-[#997D0E] mb-6 font-blanquotey"
        >
          bOLD
        </h1>
        <p className="text-lg md:text-xl md:text-left leading-relaxed text-justify">
          Ensemble valorisons la voix des femmes et des filles et construisons
          leur un espace d'expression ouverte et positive.
        </p>
        <Button className="mt-8 px-6 py-3 bg-transparent border-white text-white hover:bg-yellow-500 hover:text-red-900 transition">
          Faire un don
        </Button>
      </div>

      <div className="mt-12 md:mt-0 md:ml-8 flex-shrink-0 max-w-lg w-[100%]">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          autoplay={{ delay: 3000 }}
          navigation
          pagination={{ clickable: true }}
          className="h-[45vh] rounded-lg "
        >
          <SwiperSlide>
            <Image
              src="/images/HeroSectionImage.jpg"
              alt="Image 1"
              width={800}
              height={500}
              className="w-full h-full object-cover rounded-lg"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="/images/_I8A3365.jpg"
              alt="Image 2"
              width={800}
              height={500}
              className="w-full h-full object-cover rounded-lg"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="/images/_I8A3146.jpg"
              alt="Image 3"
              width={800}
              height={500}
              className="w-full h-full object-cover rounded-lg"
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
}

