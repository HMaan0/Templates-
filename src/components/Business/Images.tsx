import Image from "next/image";

const imageData = [
  {
    src: "https://i.pinimg.com/736x/69/bb/05/69bb0546037a2594aff9389bb814b1f2.jpg",
    alt: "Image 1",
    overlayText: "Overlay 1",
  },
  {
    src: "https://i.pinimg.com/736x/69/bb/05/69bb0546037a2594aff9389bb814b1f2.jpg",
    alt: "Image 2",
    overlayText: "Overlay 2",
  },
  {
    src: "https://i.pinimg.com/736x/69/bb/05/69bb0546037a2594aff9389bb814b1f2.jpg",
    alt: "Image 3",
    overlayText: "Overlay 3",
  },
  {
    src: "https://i.pinimg.com/736x/69/bb/05/69bb0546037a2594aff9389bb814b1f2.jpg",
    alt: "Image 4",
    overlayText: "Overlay 4",
  },
  {
    src: "https://i.pinimg.com/736x/69/bb/05/69bb0546037a2594aff9389bb814b1f2.jpg",
    alt: "Image 5",
    overlayText: "Overlay 5",
  },
];

const Images = () => {
  return (
    <>
      <div className="flex gap-4 flex-col sm:flex-row p-10 ">
        <p className="text-4xl">Little bit of product info and nothing</p>
        <p className="text-lg">
          Little bit of product info and nothing Little bit of product info and
          nothing Little bit of product info and nothingLittle bit of product
          info and nothing Little bit of product info and nothing
        </p>
      </div>
      <div className="p-10 grid grid-cols-2 md:grid-cols-3 gap-4 rounded-lg">
        {imageData.map((item, index) => (
          <div
            key={index}
            className="group relative h-64 w-full transition-transform duration-300 hover:scale-105"
          >
            <Image
              src={item.src}
              alt={item.alt}
              layout="fill"
              objectFit="cover"
              className="rounded-lg transition-transform duration-300 sm:group-hover:blur-sm"
            />
            <div className=" absolute inset-0 flex items-center justify-center rounded-lg group-hover:bg-opacity-50 transition-all duration-300">
              <span className="text-white text-2xl font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {item.overlayText}
              </span>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Images;
