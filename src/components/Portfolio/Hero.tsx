"use client";

import { useState } from "react";
import Image from "next/image";

const Hero = () => {
  const [imgSrc, setImgSrc] = useState(
    "https://i.pinimg.com/736x/69/bb/05/69bb0546037a2594aff9389bb814b1f2.jpg"
  );

  return (
    <div className="flex gap-20 sm:gap-2 sm:flex-row flex-col mt-28 ">
      <div className="flex flex-col justify-center w-full sm:w-1/2">
        <p className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
          Harshdeep Singh
        </p>
        <p className="text-xl sm:text-xl md:text-2xl lg:text-3xl xl:text-3xl mt-6">
          Hello my name is name singh maan I am engineer. Hello my name is name
        </p>
      </div>

      <div className=" flex justify-center ">
        <div className="w-7/12 sm:w-3/4 lg:w-1/2 items-center flex justify-center">
          <Image
            src={imgSrc}
            alt="my Image"
            width={500}
            height={500}
            className="rounded-lg w-full h-auto"
            onError={() =>
              setImgSrc(
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ86U5achMelt_m38QlJfvO_ErE7Yrkycw0MQ&s"
              )
            }
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
