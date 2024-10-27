"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

const Hero = () => {
  const images = [
    {
      src: "https://i.pinimg.com/736x/69/bb/05/69bb0546037a2594aff9389bb814b1f2.jpg",
      alt: "Hero Image 1",
      heading: "Your Overlay Text Here 1",
      content: "Description of the first image.",
    },
    {
      src: "https://i.pinimg.com/736x/69/bb/05/69bb0546037a2594aff9389bb814b1f2.jpg",
      alt: "Hero Image 2",
      heading: "Your Overlay Text Here 2",
      content: "Description of the second image.",
    },
    {
      src: "https://i.pinimg.com/736x/69/bb/05/69bb0546037a2594aff9389bb814b1f2.jpg",
      alt: "Hero Image 3",
      heading: "Your Overlay Text Here 3",
      content: "Description of the third image.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [scale, setScale] = useState(1);

  // Function to handle next slide
  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Function to handle previous slide
  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  // Update scale based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const newScale = 1 + scrollY / 800; // Adjust divisor for desired scaling effect
      setScale(newScale);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative w-full h-[80vh] overflow-hidden">
      <div className="relative w-full h-full transition-transform duration-500">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-700 ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={image.src}
              alt={image.alt}
              layout="fill"
              objectFit="cover"
            />
            <div className="container text-center m-auto absolute inset-0 flex items-center justify-center flex-col gap-6 w-2/3">
              <h1
                className="text-white font-bold text-lg sm:text-3xl"
                style={{
                  transform: `scale(${2 * scale})`,
                  transition: "transform 0.2s ease-out",
                }}
              >
                {image.heading}
              </h1>
              <h4 className="text-xl text-white">{image.content}</h4>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white text-black rounded-full p-2 shadow-md hover:bg-gray-300"
      >
        ❮
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white text-black rounded-full p-2 shadow-md hover:bg-gray-300"
      >
        ❯
      </button>

      {/* Dots Navigation */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full ${
              currentIndex === index ? "bg-white" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export { Hero };
